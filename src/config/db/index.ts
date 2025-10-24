//Kết nối đến cơ sở dữ liệu
import mongoose from 'mongoose';

async function Connect() {
    try {
        await mongoose.connect(
            'mongodb://localhost:27017/khanhhoa_education_dev',
        );
        console.log('Connect Successful!!!');
    } catch (error) {
        console.log('Connection Error', error);
    }
}

export default { Connect };
