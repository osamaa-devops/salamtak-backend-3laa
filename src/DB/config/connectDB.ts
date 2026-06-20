import mongoose from "mongoose";

export const DBConnection = async () => {
    const uri = process.env.DB_URI || process.env.LOCAL_DATABASE_URI;
    if (!uri) {
        throw new Error("Database URI is not defined in environment variables.");
    }

    return await mongoose.connect(uri).then(() => {
        console.log('Data Base connected successfully');
    }).catch(err => {
        console.log("Db error=> ", err);
    });
};