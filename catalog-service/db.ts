import mongoose from "mongoose";

export const initDb = async() => {
    await mongoose.connect('');
}