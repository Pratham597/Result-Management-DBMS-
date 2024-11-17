import express, { urlencoded } from "express";
const app = express();
import "dotenv/config";
import connectDB from "./connectDB.js";
import { v4 as uuidv4 } from "uuid";
import cors from 'cors';

const allowedOrigins = ['https://https://result-management-dbms.onrender.com']; // Replace with your frontend's URL

app.use(cors({
  origin: allowedOrigins, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true, 
}));

// Middlewares for body parsing.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

let connection;
connectDB().then((result) => {
  connection = result;
}).catch((err)=>{
  console.log(err.message)
});

// Adding new department!
app.post("/department", async (req, res, next) => {
  const { dept_name, dept_inaug } = req.body;
  if (!dept_name || !dept_inaug) {
    return res.status(403).json({ message: "Incomplete Fields!" });
  }
  const query = "insert into department values (?,?,?)";
  const values = [uuidv4(), dept_name, dept_inaug];

  try {
    const [result, fields] = await connection.query(query, values);
    return res.json({ message: "Inserted Successfully!" });
  } catch (error) {
    next(error);
  }
});

app.get("/api/department", async (req, res, next) => {
  try {
    const query = "select * from department";
    const [result] = await connection.query(query);
    return res.json(result);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

// Adding new semester;
app.post("/semester", async (req, res, next) => {
  const { dept_id, sem_no, duration } = req.body;
  if (!dept_id || !sem_no) {
    return res.status(403).json({ message: "Incomplete Fields" });
  }

  const dur = duration ? duration : 6;
  try {
    const query = "insert into semester values (?,?,?,?)";
    const values = [uuidv4(), dur, dept_id, sem_no];
    await connection.query(query, values);
    return res.json({ message: "Semester created successfully!" });
  } catch (error) {
    next(error);
  }
});

app.get("/api/:dept_id/semester", async (req, res, next) => {
  let { dept_id } = req.params;
  try {
    const query = "select * from semester where dept_id=? order by sem_no";
    const values = [dept_id];
    const [result] = await connection.query(query, values);
    return res.json(result);
  } catch (error) {
    next(error);
  }
});

// Adding new teacher.
app.post("/teacher", async (req, res, next) => {
  const { name, email, phone } = req.body;

  if (!email || !name || !phone) {
    return res.status(500).json({ message: "Incomplete Fields!" });
  }
  const query = "Insert into teacher values (?,?,?,?)";
  const values = [uuidv4(), name, email, phone];

  try {
    await connection.query(query, values);
    return res.json({ message: "Teacher inserted succeessfully!" });
  } catch (error) {
    next(error);
  }
});

// Adding new course.
app.post("/api/course", async (req, res, next) => {
  const { sem_id, teacher_email, credits, name } = req.body;
  try {
    let query = "select teacher_id from teacher where email=?";
    let values = [teacher_email];
    const [result] = await connection.query(query, values);
    
    if (result.length > 0) {
      const teacher_id = result[0].teacher_id;
      query = "insert into course values (?,?,?,?,?)";
      values = [uuidv4(), name, teacher_id, credits, sem_id];
      await connection.query(query, values);
      return res.json({ message: "Course added successfully!" });
    } else return res.status(403).json({ message: "Invalid data!" });
  } catch (error) {
    next(error);
  }
});

app.get("/api/semester/:sem_id/course", async (req, res, next) => {
  const { sem_id } = req.params;
  try {
    const query =
      "select course_id,c.course_name as course_name,credits,t.teacher_name as teacher_name from course as c join teacher as t using(teacher_id) where sem_id=?";
    const values = [sem_id];

    const [result] = await connection.query(query, values);
    return res.json(result);
  } catch (error) {
    next(error);
  }
});

app.post("/api/student", async (req, res, next) => {
  const { name, age, phone, sem_id } = req.body;

  if (!name || !age || !phone || !sem_id) {
    return res.json({ message: "Incomplete Fields!" });
  }
  try {
    const query = "insert into student values (?,?,?,?,?)";
    const values = [uuidv4(), name, age, phone, sem_id];
    await connection.query(query, values);
    return res.json({ message: "Student inserted successfully!" });
  } catch (error) {
    next(error);
  }
});

app.get("/api/semester/:sem_id/students", async (req, res, next) => {
  const { sem_id } = req.params;
  const query = "select * from student where sem_id=?";
  const values = [sem_id];

  try {
    const [result] = await connection.query(query, values);
    return res.json(result);
  } catch (error) {
    next(error);
  }
});

app.get("/api/course/:course_id/exam", async (req, res, next) => {
  const { course_id } = req.params;
  const query = "select * from exam where course_id=?";
  const values = [course_id];

  try {
    const [result] = await connection.query(query, values);
    return res.json(result);
  } catch (error) {
    next(error);
  }
});

app.post("/api/exam", async (req, res, next) => {
  const { name, date, course_id } = req.body;
  if (!name || !date || !course_id) {
    return res.json({ message: "Invalid data entry!" });
  }
  try {
    const query = "insert into exam values (?,?,?,?)";
    const values = [uuidv4(), name, date, course_id];
    await connection.query(query, values);
    return res.json({ message: "Exam taken successfully!" });
  } catch (error) {
    next(error);
  }
});

app.post("/api/result", async (req, res, next) => {
  const { student_id, exam_id, marks, total_marks } = req.body;
  try {
    const query = "insert into result values (?,?,?,?,?)";
    const values = [uuidv4(), student_id, exam_id, marks, total_marks];

    await connection.query(query, values);
    return res.json({ message: "Result added successfully!" });
  } catch (error) {
    next(error);
  }
});

app.get("/api/student/:student_id/result", async (req, res, next) => {
  const { student_id } = req.params;
  try {
    const query =
      "select * from result join exam  using(exam_id) join course  using (course_id) join semester   using (sem_id) join teacher  using (teacher_id) where student_id=?";
    const values = [student_id];
    const [result] = await connection.query(query, values);

    return res.json(result);
  } catch (error) {
    next(error);
  }
});
app.put("/api/student", async (req, res, next) => {
  const { student_id, sem_id } = req.body;
  let query = "select dept_id,sem_no from semester where sem_id=?";
  let values = [sem_id];

  try {
    let [result] = await connection.query(query, values);
    query = "select sem_id from semester where dept_id=? and sem_no=?";
    values = [result[0].dept_id, result[0].sem_no + 1];

    [result] = await connection.query(query, values);

    if (result[0] && result[0].sem_id) {
      query = "update student set sem_id=? where student_id=?";
      values = [result[0].sem_id, student_id];
      await connection.query(query, values);
      return res.json({ message: "Upgraded Successfully!" });
    } else return res.status(500).json({ message: "Department Not found" });
  } catch (error) {
    next(error);
  }
});

app.all('*',(req,res,next)=>{
  return res.status(400).json({message:'Not Found! Please back to home!'});
})

app.use((err, req, res) => {
  return res.status(500).json({ message: "Internal Server Error!" });
});
app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
