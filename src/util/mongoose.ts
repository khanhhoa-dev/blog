import { Document } from 'mongoose';

const plainObject = {
    multipleMongooseObject: (mongooses: Document[]) => {
        return mongooses.map((mongoose) => {
            return mongoose.toObject();
        });
    },
    mongooseObject: (doc: Document) => (doc ? doc.toObject() : doc),
};

export default plainObject;
