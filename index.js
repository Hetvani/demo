const express=require('express');
const app=express();
const connectDB = require('./db');

const PORT=3000;
//connect to database
connectDB();
//body parser
app.use(express.json());

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb://localhost:27017//`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

app.get('/',(req,res)=>{
    console.log("I am inside home page route handler");
    res.send("Hello Jee,Wellcome to CodeHelp");
})

app.listen(PORT,()=>{
    console.log("Server is Up")
})
