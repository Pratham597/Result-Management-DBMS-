import React from "react";
import { useState } from "react";
const New = ({ handleAddCourse }) => {
  const [form, setForm] = useState({
    name: "",
    credits: "",
    teacher_email: "",
  });
  return (
    <div className="md:w-[33%] sm:w-1/2 w-[95%] rounded-lg shadow-lg mx-auto bg-slate-800  p-6  border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-white">Add New Course</h2>
      <form onSubmit={(e)=>{handleAddCourse(e,form,setForm)}}>
        {/* Course Name */}
        <div className="mb-4">
          <label
            htmlFor="courseName"
            className="block text-green-400 font-bold mb-2"
          >
            Course Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="Enter course name"
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
            htmlFor="credits"
            className="block text-green-400 font-bold mb-2"
          >
            Credits
          </label>
          <input
            type="number"
            id="credits"
            name="credits"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="Enter number of credits"
            min="1"
            max="20"
            value={form.credits}
            required
            onChange={(e) => {
              setForm((form) => {
                return { ...form, ["credits"]: e.target.value };
              });
            }}
          />
        </div>

        {/* Teacher Name */}
        <div className="mb-4">
          <label
            htmlFor="teacherName"
            className="block text-green-400 font-bold mb-2"
          >
            Teacher Email
          </label>
          <input
            type="text"
            id="teacher_email"
            name="teacher_email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="Enter teacher's name"
            value={form.teacher_email}
            onChange={(e) => {
              setForm((form) => {
                return { ...form, ["teacher_email"]: e.target.value };
              });
            }}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-green-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default New;
