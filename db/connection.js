const mongoose = require("mongoose");

const mongooseConnect = mongoose.connect(
  "mongodb://localhost:27017/express_react",
  {
    useNewUrlParser: true
  }
);
