import React, { useContext, Fragment, memo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/styles/Courses.css';
import { UserContext } from '../Contexts/Usercontext'; // Adjust based on your project structure
import bgimg from '../Assets/images/bgimg.jpg'; // Update path to your background image
import Footer from './footer';
import Navbar from './navbar';

export const Courses = memo(function CertificationPage(props) {
  const { user } = useContext(UserContext); // Destructure to get user object from context
  console.log(user);
    const certifications = [
        {
          title: 'Donec blandit dignissim neque.',
          description: 'Proin enim nisl, aliquet sit amet fermentum a, mattis non enim. In et velit non eros consectetur porta. Nullam volutpat dolor augue, vitae volutpat nulla consequat tristique. Suspendisse bibendum felis.',
          duration: '6 months',
          rating: '4.5',
          views: '1,36,436'
        },
        {
          title: 'Donec blandit dignissim neque.',
          description: 'Proin enim nisl, aliquet sit amet fermentum a, mattis non enim. In et velit non eros consectetur porta. Nullam volutpat dolor augue, vitae volutpat nulla consequat tristique. Suspendisse bibendum felis.',
          duration: '6 months',
          rating: '4.5',
          views: '1,36,436'
        },
        {
          title: 'Donec blandit dignissim neque.',
          description: 'Proin enim nisl, aliquet sit amet fermentum a, mattis non enim. In et velit non eros consectetur porta. Nullam volutpat dolor augue, vitae volutpat nulla consequat tristique. Suspendisse bibendum felis.',
          duration: '6 months',
          rating: '4.5',
          views: '1,36,436'
        }
      ];
        // Function to add a course (simplified example)
        const handleAddCourse = () => {
          // Implement functionality to add a course
          // This could involve showing a modal to input course details, then sending those details to your backend
        };

        // Function to delete a course (simplified example)
        const handleDeleteCourse = (courseId) => {
          // Implement functionality to delete a course
          // This would involve sending the courseId to your backend to delete the course from the database
        };
        console.log(user);
  return (
    <Fragment>
        <Navbar/>
        <main className="container my-4">
        <h1 className="mb-4">Certifications</h1>
        {user.role === 'Admin' && (
          <div className="admin-options mb-3 d-flex justify-content-end">
            <button className="btn btn-success add-course-btn">Add Course</button>
          </div>
        )}

        {certifications.map((cert, index) => (
          <div className="card mb-3 position-relative" key={index}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <div className="bg-secondary h-100" style={{ height: '150px' }}>
                    <img src={bgimg} className="card-img-top h-100" alt="..." />
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{cert.title}</h5>
                  <p className="card-text">{cert.description}</p>
                  <p className="card-text"><small className="text-muted">Duration: {cert.duration}</small></p>
                  <p className="card-text"><small className="text-muted">{cert.rating} ⭐ {cert.views} views</small></p>
                  <button className="btn btn-success">Start</button>
                </div>
              </div>
            </div>
            {user.role === 'Admin' && (
              <div className="delete-btn-container">
                <button className="btn btn-danger delete-course-btn" onClick={() => handleDeleteCourse(cert.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </main>
        <Footer />
    </Fragment>
  );
});