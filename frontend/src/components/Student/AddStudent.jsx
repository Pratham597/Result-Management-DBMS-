import React from "react";
import { useState } from "react";
import axios from "axios";
const AddStudent = ({ sem_id,fetch ,setFetch }) => {
  const [form, setForm] = useState({ name: "", age: "", phone: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const { data } = await axios.post("/api/student", { ...form, sem_id });
        console.log(data);
        setForm({name:'',age:'',phone:''});
        setFetch(!fetch)
    } catch (error) {
        console.log(error.message)
        alert('Error Occurred!');
    }
  };

  return (
    <div className="sm:max-w-md w-[95%]  rounded-lg shadow-lg mx-auto bg-slate-800 p-6  border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-white">Add New Student</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold text-green-400 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-slate-700 text-white focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Enter student name"
            value={form.name}
            onChange={(e) => {
              setForm((form) => {
                return { ...form, ["name"]: e.target.value };
              });
            }}
            required
          />
        </div>

        {/* Phone Input */}
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block font-bold text-green-400 mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-slate-700 text-white focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Enter phone number"
            required
            value={form.phone}
            onChange={(e) => {
              setForm((form) => {
                return { ...form, ["phone"]: e.target.value };
              });
            }}
          />
        </div>

        {/* Age Input */}
        <div className="mb-4">
          <label htmlFor="age" className="block font-bold text-green-400 mb-2">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-slate-700 text-white focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Enter age"
            min="1"
            value={form.age}
            onChange={(e) => {
              setForm((form) => {
                return { ...form, ["age"]: e.target.value };
              });
            }}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
