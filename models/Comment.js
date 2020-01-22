import mongoose, { mongo } from "mongoose";

// comment 를 만들게 되면 text와 createAt을 생성하게 되고 videoID는 1이 된다.
const CommentSchema = new mongoose.Schema({
  text : {
    type : String,
    required : "Text is required"
  },
  createAt : {
    type : Date,
    default : Date.now
  },
})

const model = mongoose.model("Comment", CommentSchema);

export default model;