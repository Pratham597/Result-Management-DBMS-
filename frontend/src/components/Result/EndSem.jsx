const EndSem = ({ exams }) => {
  const calculateGPA = (exams) => {
    let totalCredits = 0;
    let totalPoints = 0;

    exams.forEach((exam) => {
      const { marks, total_marks, credits } = exam;

      // Calculate the percentage and map it to GPA out of 10
      const percentage = (marks / total_marks) * 100;
      let gpa = 0;

      if (percentage >= 90) gpa = 10;
      else if (percentage >= 80) gpa = 9;
      else if (percentage >= 70) gpa = 8;
      else if (percentage >= 60) gpa = 7;
      else if (percentage >= 50) gpa = 6;
      else gpa = 0;

      // Add to total points and total credits
      totalPoints += gpa * credits;
      totalCredits += credits;
    });

    // Calculate the final GPA for the semester out of 10
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
  };
  return (
    <div className="bg-slate-800 p-6 sm:w-[45%] w-[95%] mx-auto rounded-lg shadow-lg mb-6">
      <h3 className="text-xl font-bold text-blue-400 mb-4">End-Sem Marks</h3>
      <ul>
        {exams.map((exam, index) => (
          <li key={index} className="mb-4">
            <div className="text-green-400 font-bold">{exam.course_name}</div>
            <div className="text-white">Marks: {exam.marks} / {exam.total_marks}</div>
            <div className="text-white">Teacher: {exam.teacher_name}</div>
            <div className="text-white">
              Exam Date: {new Date(exam.exam_date).toLocaleString("en-IN")}
            </div>
          </li>
        ))}
      </ul>
      <div className="text-green-400  mb-4">
        <strong>End-Sem GPA:</strong> {calculateGPA(exams)}
      </div>
    </div>
  );
};

export default EndSem;
