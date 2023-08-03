import mongoose, { Schema, models,model } from "mongoose";
const useSchema = new Schema({
    email: String,
     name:String
  
     
},

);
const Employee = models.employee || model('employee',useSchema);
export default Employee;