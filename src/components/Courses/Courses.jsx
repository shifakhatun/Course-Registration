import { useEffect, useState } from "react";
import Course from "./Course";


const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
            fetch("./recepies.json")
            .then(res=>res.json())
            .then(data=>setCourses(data))
  }, [])

 
    return (
        <div> 
        <h4>Course : {courses.length}</h4>
        <div className="grid grid-cols-3 gap-4">
         {
          courses.map((course, idx) => <Course key={idx} course={course}> </Course>)

         }
          </div>
        </div>
    );
};

export default Courses;