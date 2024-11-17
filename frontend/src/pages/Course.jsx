import React from "react";
import Header from "../components/Utils/Header.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Info from "../components/Course/Info.jsx";
import New from "../components/Course/New.jsx";
import Footer from "../components/Utils/Footer.jsx";
const LandingPage = () => {
  const { sem_id } = useParams();
  const [course, setCourse] = useState([]);

  const fetchCourse = async () => {
    const { data } = await axios.get(`/api/semester/${sem_id}/course`);
    setCourse(data);
  };
  useEffect(() => {
    fetchCourse();
  }, []);
  const handleAddCourse = async (e, form, setForm) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/course", {
        ...form,
        sem_id: sem_id,
      });
      setForm({ name: "", credits: "", teacher_email: "" });
      fetchCourse();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-[100vh] bg-green-200 flex flex-col">
      <Header />
      <div className="text-3xl text-center py-2  font-bold text-slate-800 underline">
        Course Details
      </div>
      <div className="container mx-auto justify-evenly  py-4 flex flex-wrap mt-4 ">
        {course.map((course, idx) => {
          return <Info key={idx} course={course} />;
        })}
      </div>
      <div className="flex-grow">
        <New handleAddCourse={handleAddCourse} />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
