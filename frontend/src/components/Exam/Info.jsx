import React from "react";

const Info = ({e}) => {
  return (
    <div className="sm:w-[30%]  w-[90%] rounded-lg overflow-hidden shadow-md bg-slate-800 p-6 mb-4 hover:shadow-xl transition-shadow duration-300">
      <div className="text-xl font-semibold mb-3 text-green-400">
        {e.exam_name}
      </div>
      <div className="text-gray-300 mb-2">
        <span className="font-medium">Date:</span>{" "}
        {new Date(e.exam_date).toLocaleString("en-IN")}
      </div>
      <div className="text-gray-300 mb-2">
        <span className="font-medium">ID: </span>
        {e.exam_id}
      </div>
    </div>
  );
};

export default Info;
