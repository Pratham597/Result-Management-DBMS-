import React from "react";
import Header from "../components/Utils/Header.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import StudentInfo from "../components/Student/StudentInfo.jsx";
import { useParams } from "react-router-dom";
import AddStudent from "../components/Student/AddStudent.jsx";
import Footer from "../components/Utils/Footer.jsx";
const server=import.meta.env.VITE_BACKEND;
const Semester = () => {
  const { sem_id } = useParams();
  const [student, setStudent] = useState([]);
  const [fetch, setFetch] = useState(false);
  const fetchStudent = async () => {
    const { data } = await axios.get(`${server}/api/semester/${sem_id}/students`);
    setStudent(data);
  };
  useEffect(() => {
    fetchStudent();
  }, [fetch]);

  return (
    <div className=" min-h-[100vh] bg-green-200 flex flex-col">
      <Header />
      <div className="text-3xl text-center py-2  font-bold text-slate-800 underline">
        Students Enrolled
      </div>
      <div className="container mx-auto justify-evenly   py-4 flex flex-wrap ">
        {student.map((student, idx) => {
          return <StudentInfo key={idx} student={student} />;
        })}
      </div>

      <div className="flex-grow">
        <AddStudent sem_id={sem_id} fetch={fetch} setFetch={setFetch} />
      </div>
      <Footer />
    </div>
  );
};

export default Semester;
