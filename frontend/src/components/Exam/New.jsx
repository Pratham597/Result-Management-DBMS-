import React from "react";
import { useState } from "react";
const New = ({ handleAddExam }) => {
  const [form, setForm] = useState({
    name: "",
    date:""
  });
  return (
    <div className="md:w-[33%] sm:w-1/2 w-[95%] rounded-lg shadow-lg mx-auto bg-slate-800  p-6 mb-6 border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-white">Conduct new exam</h2>
      <form onSubmit={(e)=>{handleAddExam(e,form)}}>
        {/* Course Name */}
        <div className="mb-4">
          <label
            htmlFor="courseName"
            className="block text-green-400 font-bold mb-2"
          >
            Exam Name 
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="Enter exam name (MID SEM / END SEM)"
            value={form.name}
            onChange={(e) => {
              setForm((form) => {
                return { ...form, ["name"]: e.target.value };
              });
            }}
            required
          />
        </div>

        {/* Credits */}
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-green-400 font-bold mb-2"
          >
            Date
          </label>
          <input
            type="text"
            id="date"
            name="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="Enter date of conduct (YYYY-MM-DD)"
            value={form.date}
            required
            onChange={(e) => {
              setForm((form) => {
                return { ...form, ["date"]: e.target.value };
              });
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-green-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          Conduct Exam
        </button>
      </form>
    </div>
  );
};

export default New;