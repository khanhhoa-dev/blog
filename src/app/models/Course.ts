// @ts-ignore
import slug from 'mongoose-slug-updater';
import { Document } from 'mongoose';
import mongoose from 'mongoose';
import MongooseDelete, { SoftDeleteModel } from 'mongoose-delete';

const Schema = mongoose.Schema;

interface ConfigSchema extends Document {
    title: string;
    description: string;
    image: string;
    videoId: string;
    slug: string;
}
type ConfigModel = SoftDeleteModel<ConfigSchema>;

const CourseSchema = new Schema<ConfigSchema, ConfigModel>(
    {
        title: { type: String, require: true },
        description: { type: String },
        image: { type: String },
        videoId: { type: String, require: true },
        slug: { type: String, slug: 'title', unique: true },
    },
    {
        timestamps: true,
    },
);

CourseSchema.plugin(MongooseDelete as any, {
    deleted: true,
    deletedAt: true,
    overrideMethods: 'all',
});
mongoose.plugin(slug);

// Gắn Schema vào connection hiện tại của db
const Course = mongoose.model<ConfigSchema, ConfigModel>(
    'Course',
    CourseSchema,
);

export default Course;
