const mongoose = require('mongoose');
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Student Schema
const studentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    bookmarkedCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    enrolledCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    completedCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    ratings: [{ type: Schema.Types.ObjectId, ref: 'Rating' }]
});

// Instructor Schema
const instructorSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
});

// Admin Schema
const adminSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

// Course Schema
const courseSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    instructor: { type: Schema.Types.ObjectId, ref: 'Instructor' },
    videos: [{ type: Schema.Types.ObjectId, ref: 'Video' }],
    resources: [{ type: Schema.Types.ObjectId, ref: 'Resource' }],
    ratings: [{ type: Schema.Types.ObjectId, ref: 'Rating' }],
    enrollments: [{ type: Schema.Types.ObjectId, ref: 'Enrollment' }]
});

// Video Schema
const videoSchema = new Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    duration: { type: String, required: true }, // You may want to change this to a more suitable type
    course: { type: Schema.Types.ObjectId, ref: 'Course' }
});

// Resource Schema
const resourceSchema = new Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    type: { type: String, enum: ['PDF', 'Video', 'Link'], required: true },
    course: { type: Schema.Types.ObjectId, ref: 'Course' }
});

// Rating Schema
const ratingSchema = new Schema({
    score: { type: Number, required: true, min: 1, max: 5 },
    review: { type: String },
    student: { type: Schema.Types.ObjectId, ref: 'Student' },
    course: { type: Schema.Types.ObjectId, ref: 'Course' }
});

// Enrollment Schema
const enrollmentSchema = new Schema({
    student: { type: Schema.Types.ObjectId, ref: 'Student' },
    course: { type: Schema.Types.ObjectId, ref: 'Course' },
    progress: { type: Number, default: 0 }, // Progress as a percentage
    completedAt: { type: Date }
});

// Create models
const User = mongoose.model('User', userSchema);
const Student = mongoose.model('Student', studentSchema);
const Instructor = mongoose.model('Instructor', instructorSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Course = mongoose.model('Course', courseSchema);
const Video = mongoose.model('Video', videoSchema);
const Resource = mongoose.model('Resource', resourceSchema);
const Rating = mongoose.model('Rating', ratingSchema);
const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

// Export models
module.exports = {
    User,
    Student,
    Instructor,
    Admin,
    Course,
    Video,
    Resource,
    Rating,
    Enrollment
};