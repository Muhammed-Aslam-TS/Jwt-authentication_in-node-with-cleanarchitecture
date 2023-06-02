import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
    },

    Email: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        validator : [validator.isEmail,"Invalid Email"]
    },
    Password: {
        type: String,
        required: true,
    },


    
});

const userModel = mongoose.model("users", UserSchema);
export default userModel;