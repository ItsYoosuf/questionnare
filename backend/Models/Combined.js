const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

const studentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bookmarkedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    completedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }]
});

const Student = mongoose.model('Student', studentSchema);

const instructorSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const Instructor = mongoose.model('Instructor', instructorSchema);

const adminSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    managedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    questionPool: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }]
});

const Admin = mongoose.model('Admin', adminSchema);

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    type: { type: String, enum: ['Paid', 'Free'], required: true },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor', required: true },
    resources: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }],
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }],
    enrollments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Enrollment' }]
});

const Course = mongoose.model('Course', courseSchema);

const resourceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    type: { type: String, enum: ['Video', 'PDF'], required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    video: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' }
});

const Resource = mongoose.model('Resource', resourceSchema);

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    duration: { type: String, required: true }
});

const Video = mongoose.model('Video', videoSchema);

const ratingSchema = new mongoose.Schema({
    score: { type: Number, required: true },
    review: { type: String },
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }
});

const Rating = mongoose.model('Rating', ratingSchema);

const enrollmentSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    progress: { type: Number, default: 0 },
    completedAt: { type: Date }
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }]
});

const Quiz = mongoose.model('Quiz', quizSchema);

const questionSchema = new mongoose.Schema({
    text: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true },
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = {
    User,
    Student,
    Instructor,
    Admin,
    Course,
    Resource,
    Video,
    Rating,
    Enrollment,
    Quiz,
    Question
};