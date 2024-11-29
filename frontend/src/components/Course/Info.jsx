import React from "react";
import { useNavigate } from "react-router-dom";
const Info = ({course}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
      navigate(`/course/${course.course_id}/exam`);
  };
  return (
    <div
      className="sm:w-[30%]  w-[90%] rounded-lg overflow-hidden shadow-md bg-slate-800 p-6 mb-4 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-xl font-semibold mb-3 text-green-400">
        {course.course_name}
      </div>
      <div className="text-gray-300 mb-2">
        <span className="font-medium">Credits:</span> {course.credits}
      </div>
      <div className="text-gray-300">
        <span className="font-medium">Teacher:</span> {course.teacher_name}
      </div>
      <button
        onClick={handleNavigate}
        className=" my-2 bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-green-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        Exams
      </button>
    </div>
  );
};

export default Info;
