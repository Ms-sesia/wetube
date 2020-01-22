import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect( process.env.MONGO_URL, 
  { // 새로운 버전에서는 이 것들을 사용하지 않기 때문에 자동으로 주어야 하는 옵션 값 같은 것.
    useNewUrlParser : true,
    useFindAndModify : false,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = error => console.log(`Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);