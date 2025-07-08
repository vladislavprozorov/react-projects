import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import courses from '../data/courses';
const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  console.log(query);
  return (
    <>
      {courses.map((data) => {
        return (
          <div key={data.id}>
            <NavLink to={data.slug}>{data.title}</NavLink>
          </div>
        );
      })}
    </>
  );
};

export default Courses;
