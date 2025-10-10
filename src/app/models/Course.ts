// Schema(Lược đồ )
//Là bản thiết kế cho dữ liệu — quy định một “document” có những thuộc tính nào, kiểu dữ liệu ra sao.
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    title: { type: String },
    description: { type: String },
    image: { type: String },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

// Gắn Schema vào connection hiện tại của db
const Course = mongoose.model('Course', CourseSchema);

export default Course;
