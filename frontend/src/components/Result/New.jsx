import React from "react";
import { useState } from "react";
const New = ({ handleAddResult}) => {
  const [form, setForm] = useState({
    marks: "",
    total_marks: "",
    exam_id: "",
  });
  return (
    <div className="max-w-md rounded-lg shadow-lg mx-auto bg-slate-800  p-6  border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-white">Add Exam Result</h2>
      <form onSubmit={(e)=>{handleAddResult(e,form,setForm)}}>
        {/* Course Name */}
        <div className="mb-4">
          <label
            htmlFor="marks"
            className="block text-green-400 font-bold mb-2"
          >
            Marks
          </label>
          <input
            type="number"
            id="marks"
            name="marks"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="Enter exam mark"
            value={form.marks}
            onChange={(e) => {
              setForm((form) => {
                return { ...form, ["marks"]: e.target.value };
              });
            }}
            required
          />
        </div>

        {/* Credits */}
        <div className="mb-4">
          <label
            htmlFor="total_marks"
            className="block text-green-400 font-bold mb-2"
          >
            Total marks
          </label>
          <input
            type="number"
            id="total_marks"
            name="total_marks"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="Enter exam total_marks"
            value={form.total_marks}
            required
            onChange={(e) => {
              setForm((form) => {
                return { ...form, ["total_marks"]: e.target.value };
              });
            }}
          />
        </div>

        {/* Teacher Name */}
        <div className="mb-4">
          <label
            htmlFor="exam_id"
            className="block text-green-400 font-bold mb-2"
          >
            Exam ID
          </label>
          <input
            type="text"
            id="exam_id"
            name="exam_id"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="Enter exam id"
            value={form.exam_id}
            onChange={(e) => {
              setForm((form) => {
                return { ...form, ["exam_id"]: e.target.value };
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
          Add Exam Result
        </button>
      </form>
    </div>
  );
};

export default New;