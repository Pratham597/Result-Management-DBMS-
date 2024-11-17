import React from "react";
import Header from "../components/Utils/Header.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card.jsx";
import Footer from "../components/Utils/Footer.jsx";
const LandingPage = () => {
  const imageSrc=['/department_images/dept1.jpg','/department_images/dept2.jpg','/department_images/dept3.jpg']
  const [department, setDepartment] = useState([]);
  const fetchDepartment = async () => {
    const { data } = await axios.get("/api/department");
    setDepartment(data)
  };
  useEffect(() => {
    fetchDepartment();
  }, []);

  return (
    <div className=" min-h-[100vh] bg-green-200 flex flex-col">
      <Header />
      <div className="text-3xl text-center py-2  font-bold text-slate-800 underline">Departments</div>
      <div className="container mx-auto justify-evenly  py-4 flex flex-wrap flex-grow">
        {department.map((dept,idx) => {
          return (
              <Card
                key={idx} 
                title={dept.dept_name}
                src={imageSrc[idx%3]}
                actionText="View More"
                onAction={() => (window.location.href = `/department/${dept.dept_id}/semester`)}
              />
        
          );
        })}
      </div>
      <Footer/>
    </div>
  );
};

export default LandingPage;
