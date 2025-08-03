import React from 'react';
import './components.css';

const courses = [
  { id: 'C1', name: 'Angular', date: '4/5/2021' },
  { id: 'C2', name: 'React', date: '6/3/20201' }
];

function CourseDetails() {
  return (
    <div className="box">
      <h2>Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <strong>{course.name}</strong>
            <small>{course.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
