import React, { Component } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <Link to={{ pathname: "/" }}>
        <button className="button button4">Logout</button>
      </Link>
    </div>
  );
};

export default Dashboard;