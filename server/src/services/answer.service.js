import { Answer } from "../models/answer.model.js";

export const createAnswer = async (data) => {
    return await Answer.create(data);
}

export const findAllAnswers = async() => {
    return await Answer.findAll();
}

export const findAnswerById = async (id) => {
    return await Answer.findByPk(id);
}

export const updateAnswer = async (data, id) => {
    return await Answer.update(data, {where: {id}});
}

export const deleteAnswer = async (id) => {
    return await Answer.destroy({where: {id}});
}