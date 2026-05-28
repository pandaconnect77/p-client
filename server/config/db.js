const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || "mongodb+srv://pandaconnect7:@cluster0.jxn5h.mongodb.net/pandafiles";
    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB connected");

    global.gridfsBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: "uploads" });
    console.log("✅ GridFS initialized");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
