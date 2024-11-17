import axios from "axios";
const StudentCard = ({ student }) => {
  const handleUpgrade = async () => {
    try {
      const {sem_id,student_id}=student;
      await axios.put("/api/student",{student_id,sem_id});
    } catch (error) {
      console.log(error.message);
      alert("Cant Upgrade! Please pass all exams");
    }
  };
  return (
    <div className="sm:w-[30%] w-[95%] rounded-lg shadow-lg bg-slate-800 p-6 mb-3 border border-gray-200">
      {/* Student Details */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-green-400 mb-1 ">
          {student.student_name}
        </h3>
        <p className="text-gray-200 mb-1 ">
          <span className="font-medium">Phone:</span> {student.phone}
        </p>
        <p className="text-gray-200 mb-1">
          <span className="font-medium">Age:</span> {student.age}
        </p>
      </div>

      {/* Upgrade Button */}
      <button
        onClick={() =>
          (window.location.href = `/student/${student.student_id}/result`)
        }
        className="w-full bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
      >
        View Result
      </button>
      <button
        onClick={handleUpgrade}
        className="w-full bg-gray-300 mt-3 text-black py-2 px-4 rounded-lg hover:bg-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none"
      >
        Upgrade Semester
      </button>
    </div>
  );
};

export default StudentCard;
