// Schema(Lược đồ )
//Là bản thiết kế cho dữ liệu — quy định một “document” có những thuộc tính nào, kiểu dữ liệu ra sao.
import mongoose from 'mongoose';
// @ts-ignore
import slug from 'mongoose-slug-updater';

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        title: { type: String, require: true },
        description: { type: String },
        image: { type: String },
        videoId: { type: String, require: true },
        slug: { type: String, slug: 'title', unique: true },
    },
    {
        timestamps: true,
    }
);

// Gắn Schema vào connection hiện tại của db
const Course = mongoose.model('Course', CourseSchema);

export default Course;
