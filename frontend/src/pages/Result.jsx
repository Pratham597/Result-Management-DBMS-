import React from "react";
import Header from "../components/Utils/Header.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MidSem from "../components/Result/MidSem.jsx";
import EndSem from "../components/Result/EndSem.jsx";
import New from "../components/Result/New.jsx";
import Footer from "../components/Utils/Footer.jsx";
const Result = () => {
  const { student_id } = useParams();
  const [result, setResult] = useState({});
  function GroupedResults(results) {
    const groupedBySemester = {};

    results.forEach((result) => {
      const semester = result.sem_no;

      if (!groupedBySemester[semester]) {
        groupedBySemester[semester] = { midSem: [], endSem: [] };
      }

      // Categorize exams into Mid-Sem or End-Sem
      if (result.exam_name === "MID SEM") {
        groupedBySemester[semester].midSem.push(result);
      } else if (result.exam_name === "END SEM") {
        groupedBySemester[semester].endSem.push(result);
      }
    });

    return groupedBySemester;
  }
  const fetchResult = async () => {
    try {
      const { data } = await axios.get(`/api/student/${student_id}/result`);
      let groupResult = GroupedResults(data);
      setResult(groupResult);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAddResult = async (e, form, setForm) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/result", { ...form, student_id });
      fetchResult();
      setForm({ exam_id: "", marks: "", total_marks: "" });
    } catch (error) {
      console.log(error.message);
      alert("Error Occured!");
    }

    try {
    } catch (error) {
      console.log(error.message);
      alert("Error Occured!");
    }
  };

  useEffect(() => {
    fetchResult();
  }, []);

  return (
    <div className=" min-h-[100vh] bg-green-200 flex flex-col">
      <Header />
      <div className="text-3xl text-center py-2  font-bold text-slate-800 underline">
        Report Card
      </div>
      <div className="container mx-auto   py-4 flex flex-col">
        {Object.entries(result).map(([semester, exams]) => (
          <>
            <h2 className="text-2xl font-bold mx-auto text-gray-800 mb-4">
              Semester {semester}
            </h2>
            <div
              key={semester}
              className="mb-6 flex sm:flex-row justify-evenly flex-col"
            >
              {/* Display Mid-Sem Marks */}
              <MidSem exams={exams.midSem} />
              {/* Display End-Sem Marks */}
              <EndSem exams={exams.endSem} />
              {/* Calculate and display GPA for Mid-Sem and End-Sem */}
            </div>
          </>
        ))}
      </div>
      <div className="flex-grow">
        <New handleAddResult={handleAddResult} />
      </div>
      <Footer />
    </div>
  );
};

export default Result;
