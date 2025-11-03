import * as authService from "../services/auth.service.js";

export const register = async (req, res) => {
    try {
    const {email, password, username, role} = req.body;
    const result = await authService.register({email, password, username, role});
    if(!result.wasSuccessful) {
        return res.status(400).json(result);
    }
    return res.status(201).json(result);
    } catch (error) {
        console.error("Lỗi server", error);
        return res.status(500).json({wasSuccessful: false, message: "Lỗi server"});
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const result = await authService.login(email, password);
        if(!result.wasSuccessful) {
            return res.status(404).json(result);
        }
        return res.status(200).json(result); 
    } catch (error) {
        console.error("Lỗi server", error);
        return res.status(500).json({wasSuccessful: false, message: "Lỗi server"});
    }
}
