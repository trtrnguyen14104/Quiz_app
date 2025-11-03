import { Question } from "../models/question.model";

export const createQuestion = async (data) => {
    return await Question.create(data);
}

export const findAllQuestions = async() => {
    return await Question.findAll();
}

export const findQuestionById = async (id) => {
    return await Question.findByPk(id);
}

export const updateQuestion = async (data, id) => {
    return await Question.update(data, {where: {id}});
}

export const deleteQuestion = async (id) => {
    return await Question.destroy({where: id});
}