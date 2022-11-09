import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StudentUsers from "./components/student/create";
import Dashboard from "./dashboard";
import EditUsers from "./components/student/edit";
import StudentData from "./components/student/studentData";
import TeacherUsers from "./components/Teacher/createteacher";
import TeacherData from "./components/Teacher/teacherdata";
import EditTeacher from "./components/Teacher/editteacher";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/createstudent" element={<StudentUsers />} />
          <Route path="/edit/:id" element={<EditUsers />} />
          <Route path="/student" element={<StudentData />} />
          <Route path="/createteacher" element={<TeacherUsers />} />
          <Route path="/editteacher/:id" element={<EditTeacher />} />
          <Route path="/teacher" element={<TeacherData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
