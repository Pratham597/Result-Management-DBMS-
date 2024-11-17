import React from "react";
import Header from "../components/Utils/Header.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import New from '../components/Exam/New.jsx'
import { useParams } from "react-router-dom";
import Info from "../components/Exam/Info.jsx";
import Footer from "../components/Utils/Footer.jsx";
const server=import.meta.env.VITE_BACKEND;
const Exam = () => {
  const { course_id } = useParams();
  const [exam, setExam] = useState([]);
  const fetchExam = async () => {
    const { data } = await axios.get(`${server}/api/course/${course_id}/exam`);
    setExam(data);
  };


  const handleAddExam= async (e,form)=>{
    e.preventDefault();
    try {
      const {data}=await axios.post(`${server}/api/exam`,{...form,course_id})
      fetchExam();
    } catch (error) {
      console.log(error.message)
      alert('Error Occured!')
    }
  }
  useEffect(() => {
    fetchExam();
  }, []);

  return (
    <div className="min-h-[100vh] bg-green-200 flex flex-col">
      <Header />
      <div className="text-3xl text-center py-2  font-bold text-slate-800 underline">
        Exams
      </div>
      <div className=" container mx-auto  justify-evenly  py-4 flex flex-wrap ">
        {exam.map((e, idx) => {
          return (
            <Info e={e}/>
          );
        })}
      </div>
      {/* Conduct Exam */}
      <div className="flex-grow"><New handleAddExam={handleAddExam}/></div>
      <Footer/>
    </div>
  );
};

export default Exam;
