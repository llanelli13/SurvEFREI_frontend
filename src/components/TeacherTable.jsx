import React from "react";
import "./styles/TeacherTable.css";

const TeacherTable = () => {
  const teachers = [
    { name: "John Michael", subject: "Manager", status: "ONLINE", date: "23/04/18" },
    { name: "Alexa Liras", subject: "Programmer", status: "OFFLINE", date: "11/01/19" },
    { name: "Laurent Perrier", subject: "Executive", status: "ONLINE", date: "19/09/17" },
    { name: "Michael Levi", subject: "Programmer", status: "ONLINE", date: "24/12/08" },
    { name: "Richard Gran", subject: "Manager", status: "OFFLINE", date: "04/10/21" },
    { name: "Miriam Eric", subject: "Programmer", status: "OFFLINE", date: "14/09/20" },
  ];

  return (
    <div className="teacher-table">
      <table>
        <thead>
          <tr>
            <th>Teacher</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={index}>
              <td>{teacher.name}</td>
              <td>{teacher.subject}</td>
              <td className={teacher.status.toLowerCase()}>{teacher.status}</td>
              <td>{teacher.date}</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTable;
