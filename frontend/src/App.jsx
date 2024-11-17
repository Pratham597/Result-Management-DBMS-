import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Exam from './pages/Exam.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Semester from './pages/Semester.jsx'
import Course from './pages/Course.jsx'
import Student from './pages/Student.jsx';
import Result from './pages/Result.jsx';
import Footer from './components/Utils/Footer.jsx';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/department/:dept_id/semester" element={<Semester />} />
                <Route path="/semester/:sem_id/course" element={<Course />} />
                <Route path="/semester/:sem_id/students" element={<Student />} />
                <Route path="/student/:student_id/result" element={<Result />} />
                <Route path="/course/:course_id/exam" element={<Exam />} />
            </Routes>
        </Router>
    );
}

export default App;

