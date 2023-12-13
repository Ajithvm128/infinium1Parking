// HomePage.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import firebase from "./../firebaseConfig";
import { firebaseApp } from "./../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f2f2f2;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const HomePage = ({ username }) => {
  const data = [
    { id: 1, name: "Item 1", price: "$10" },
    { id: 2, name: "Item 2", price: "$15" },
    { id: 3, name: "Item 3", price: "$20" },
  ];

  const [parkingData, setParkingData] = useState(null);
  const [targetDate, setTargetDate] = useState(new Date());

  const fetchData = async () => {
    try {
      // Reference the "users" node in your Firebase Realtime Database
      const db = getDatabase(firebaseApp);
      const snapshot = await get(ref(db, "users"));

      // Convert the snapshot to an array of objects
      const data = snapshot.val() ? Object.values(snapshot.val()) : [];

      const formattedTargetDate = format(targetDate, "dd-MM-yyyy");

      const filteredData = data.filter(
        (user) => user.date === formattedTargetDate
      );
      setParkingData(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleButtonClick = async () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome Accel Infinium</h2>

      {/* <div>
        <DatePicker
          selected={targetDate}
          onChange={(date) => setTargetDate(date)}
        />
      </div> */}

      <div style={{ display: "flex", alignItems: "center" }}>
        <DatePicker
          selected={targetDate}
          onChange={(date) => setTargetDate(date)}
          dateFormat="dd-MM-yyyy"
        />
        <button onClick={handleButtonClick} style={{ marginLeft: 10 }}>
          Search
        </button>
      </div>

      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Owner Name</TableHeader>
            <TableHeader>Company Name</TableHeader>
            <TableHeader>Vehicle No</TableHeader>
            <TableHeader>User Added</TableHeader>
          </tr>
        </thead>
        <tbody>
          {parkingData &&
            parkingData.map((item, index) => (
              <tr key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.ownerName}</TableCell>
                <TableCell>{item.companyName}</TableCell>
                <TableCell>{item.vehicleNumber}</TableCell>
                <TableCell>{item.userAdded}</TableCell>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HomePage;
