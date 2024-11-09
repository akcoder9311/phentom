import mongoose,{Schema, Document} from "mongoose";

export interface Message extends Document{
    content: string;
    createdAt: Date
}


const MessageSchema: Schema<Message> = new Schema({
   content: {
    type:String,
    required:true
   },

   createdAt:{
    type: Date,
    required: true,
    default: Date.now
   }
})

export interface User extends Document{
    username: string;
    email: string;
    password:string;
    verifyCode:string;
    verifyCodeExpiry:Date;
    isAcceptingMessage:boolean;
    message:Message[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, 'username is required'],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'please use a valid email'
    ]
  }
})