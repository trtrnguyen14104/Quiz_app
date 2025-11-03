import { QuizAttempt } from "../models/quizAttempt.model.js";

export const createQuizAttempt = async (data) => {
    return await QuizAttempt.create(data);
}

export const findAllQuizAttempts = async() => {
    return await QuizAttempt.findAll();
}

export const findQuizAttemptById = async (id) => {
    return await QuizAttempt.findByPk(id);
}

export const updateQuizAttempt = async (data, id) => {
    return await QuizAttempt.update(data, {where: {id}});
}

export const deleteQuizAttempt = async (id) => {
    return await QuizAttempt.destroy({where: {id}});
}