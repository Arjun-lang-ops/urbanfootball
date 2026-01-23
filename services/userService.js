import User from "../models/userModel";
import bcrypt from "bcrypt"

export const userRegisterLogic=async function(data) {
    const {
        fullname,
        email,
        password
    }=data;

    const normalizedEmail=email.toLowerCase();

    const existingUser=await User.findOne({normalizedEmail});

    if(existingUser){
        return {
            success:false,
            errorMessage:"user already exist"
        }
    }
    const salt=await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(password,salt);

    const user=new User({
        fullname,
        email:normalizedEmail,
        password:hashedPassword,
        role:"user",
        isVerified:false

    });

    await user.save();

    return {
        success:true,
        user
    }
    
}