import { User } from "../models/user.model.js";

export const createUser = async (data) => {
    return await User.create(data);
};

export const findAllUsers = async () => {
    return await User.findAll();
};

export const findUserById = async (id) => {
    return await User.findByPk(id);
};

export const updateUser = async (data, id) => {
    return await User.update(data, {where: {id}});
};

export const deleteUser = async (id) => {
    return await User.destroy({where: {id}});
}