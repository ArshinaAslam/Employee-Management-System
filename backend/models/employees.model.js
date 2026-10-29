import { model, Schema } from "mongoose";

const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required:true,
        min: 0
    }

})

export const Employee = model("Employee", EmployeeSchema)