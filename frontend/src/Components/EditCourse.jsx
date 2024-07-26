import React, { useState } from 'react';

const EditCourseForm = ({ courseId }) => {
  const [course, setCourse] = useState({
    title: '',
    description: '',
    image: '',
    type: 'Free',
    instructor: '',
    resources: [],
    ratings: [],
    enrollments: []
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission without API call
    console.log('Form submitted with course details:', course);
  };

  return (
    <div>
      <h1>Edit Course</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Course Title</label>
          <input type="text" className="form-control" id="title" value={course.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Course Description</label>
          <textarea className="form-control" id="description" value={course.description} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Course Image</label>
          <input type="text" className="form-control" id="image" value={course.image} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="type">Course Type</label>
          <select className="form-control" id="type" value={course.type} onChange={handleChange} required>
            <option value="Paid">Paid</option>
            <option value="Free">Free</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="instructor">Instructor</label>
          <input type="text" className="form-control" id="instructor" value={course.instructor} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="resources">Resources</label>
          <input type="text" className="form-control" id="resources" value={course.resources.join(', ')} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="ratings">Ratings</label>
          <input type="text" className="form-control" id="ratings" value={course.ratings.join(', ')} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="enrollments">Enrollments</label>
          <input type="text" className="form-control" id="enrollments" value={course.enrollments.join(', ')} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default EditCourseForm;