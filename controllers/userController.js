// import bcrypt from "bcrypt";
// import User from "../models/userModel.js";

export const registerRender = async (req, res) => {
    return res.render('userViews/userRegister')
}


export async function loginRender(req,res){
    return res.render('userViews/userLogin');
}