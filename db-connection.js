const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;
const db = mongoose.connect(URI);
module_exports = db;