import React from "react";
import Header from "../components/Utils/Header.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card.jsx";
import { useParams } from "react-router-dom";
import Footer from "../components/Utils/Footer.jsx";
const Semester = () => {
  const { dept_id } = useParams();
  const imageSrc = [
    "/department_images/dept1.jpg",
    "/department_images/dept2.jpg",
    "/department_images/dept3.jpg",
  ];
  const [semester, setSemester] = useState([]);
  const fetchSemester = async () => {
    const { data } = await axios.get(`/api/${dept_id}/semester`);
    setSemester(data);
  };
  useEffect(() => {
    fetchSemester();
  }, []);

  return (
    <div className=" min-h-[100vh] bg-green-200 flex flex-col">
      <Header />
      <div className="text-3xl text-center py-2  font-bold text-slate-800 underline">
        Semesters
      </div>
      <div className="flex-grow container mx-auto justify-evenly  py-4 flex flex-wrap ">
        {semester.map((sem, idx) => {
          return (
            <Card
              key={idx}
              title={`Semester ${sem.sem_no}`}
              src={imageSrc[idx % 3]}
              actionText="View Subjects"
              onAction={() =>
                (window.location.href = `/semester/${sem.sem_id}/course`)
              }
              actionSecondText="Students Enrolled"
              onSecondAction={() =>
                (window.location.href = `/semester/${sem.sem_id}/students`)
              }
            />
          );
        })}
      </div>
      <Footer/>
    </div>
  );
};

export default Semester;
