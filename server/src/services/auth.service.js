import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { ENV } from "../config/env.js";

export const register = async (data) => {
    const {email, password, username, role} = data;

    const existedUser = await User.findOne({where: {email}});
    if(existedUser) {
        console.error("Email đã tồn tại");
        return ({wasSuccessful: false, message: "Email đã tồn tại"});
    }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            email,
            password: hashedPassword,
            username,
            role,
        });
    return ({wasSuccessful: true, message: "Đăng ký thành công", result: newUser});
}

export const login = async (email, password) => {
    const existedUser = await User.findOne({where: {email}});
    if(!existedUser) {
        console.error("Không tìm thấy email");
        return ({wasSuccessful: false, message: "Không tìm thấy email"});
    }

    const isPasswordValid = await bcrypt.compare(password, existedUser.password);
    if(!isPasswordValid) {
        console.error("Mật khẩu không chính xác");
        return ({wasSuccessful: false, message: "Mật khẩu không chính xác"});
    }

    const token = jwt.sign({
        id: existedUser.id,
        email: existedUser.email,
        role: existedUser.role,
    }, 
    ENV.JWT_SECRET,
    {expiresIn: "1d"}
    );
    return ({wasSuccessful: true, message: "Đăng nhập thành công",token, existedUser});
}