import mongoose from 'mongoose';

const connection = {};

export const connectToDB = async () => {
    console.log(process.env.MONGO);
    if (connection.isConnected) {
        console.log('Using existing connection');
        return;
    }

    try {
        if (!process.env.MONGO) {
            throw new Error('MONGO environment variable not defined');
        }

        console.log('Connecting to MongoDB...');
        const db = await mongoose.connect(process.env.MONGO);

        connection.isConnected = db.connections[0].readyState;
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        // throw new Error('MongoDB connection error');
    }
};
