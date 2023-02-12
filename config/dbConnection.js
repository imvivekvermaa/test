const mongoose= require("mongoose");
const connect= mongoose.connect("mongod:/");

model.export= connect;