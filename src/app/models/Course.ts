// @ts-ignore
import slug from 'mongoose-slug-updater';
import { Document } from 'mongoose';
import mongoose from 'mongoose';
import MongooseDelete, { SoftDeleteModel } from 'mongoose-delete';
import { Request } from 'express';

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

//Custom query helpers
(CourseSchema.query as any).sortable = function (req: Request) {
    if (Object.prototype.hasOwnProperty.call(req.query, '_sort')) {
        const name = req.query.column as string;
        const type = req.query.type as string;

        const isValidType = ['asc', 'desc'].includes(type) ? type : 'desc';
        const sortValue = isValidType === 'desc' ? -1 : 1;
        return this.sort({
            [name]: sortValue,
        });
    }
    return this;
};

//App plugin
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
