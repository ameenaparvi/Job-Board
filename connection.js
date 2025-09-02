require('dotenv').config();

const mongoose = require('mongoose');

// Cache the connection across hot reloads and serverless invocations
let cached = global.__mongoose;
if (!cached) {
  cached = global.__mongoose = { conn: null, promise: null };
}

if (!cached.promise) {
  cached.promise = mongoose
    .connect(process.env.MONGO_URI, { bufferCommands: false })
    .then((m) => {
      console.log("db connected");
      return m;
    })
    .catch((err) => {
      console.error("db connection error", err);
      throw err;
    });
}

cached.promise.then((m) => {
  if (!cached.conn) cached.conn = m;
});

module.exports = cached.promise;