const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
 const cors = require('cors')


app.use(
  cors({
    origin: ["https://uix-store.vercel.app", "http://localhost:3000"],

    credentials: true,
  })
);



const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser())
app.use(fileUpload({
  useTempFiles:true
}))

app.get("/", (req, res) => {
  res.json({ msg: "this is example" });
});

app.listen(PORT, () => {
  console.log("server is running");
});


//connect mongoDB

const URI = process.env.MONGODB_URL;
// console.log(process.env.MONGODB_URL);

mongoose.connect(URI)
  .then(() => {
    console.log("connect to db");
  })
  .catch((err) => {
    console.log(err);
  });

  
//Routes
app.use('/user',require('./routes/useRouter'))
app.use('/api',require('./routes/categoryRouter'))
app.use('/api',require('./routes/productRouter'))
app.use("/api", require("./routes/upload"));
app.use("/api", require("./routes/adminRouter"));

//admin route
