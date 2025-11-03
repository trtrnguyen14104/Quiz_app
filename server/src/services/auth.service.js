import { User } from "../models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { ENV } from "../config/env";

export const register = async (data) => {
    const {email, password, username, role} = data;

    const existedUser = await User.findOne({where: {email}});
    if(existedUser) {
        throw new console.error("Email đã tồn tại");
    }
        const hashedPassword = bcrypt.hash(password, 10);
        const newUser = await User.create({
            email,
            password: hashedPassword,
            username,
            role,
        });
    return newUser;
}

export const login = async (email, password) => {
    const existedUser = await User.findOne({where: {email}});
    if(!existedUser) {
        throw new console.error("Email không tồn tại");
    }

    const isPasswordValid = await bcrypt.compare(password, existedUser.password);
    if(!isPasswordValid) {
        throw new console.error("Mật khẩu không chính xác");
    }

    const token = jwt.sign({
        id: existedUser.id,
        email: existedUser.email,
        role: existedUser.role,
    }, 
    ENV.JWT_SECRET,
    {expiresIn: "1d"}
    );
    return {success: true, message: "Đăng nhập thành công",token, existedUser};
}