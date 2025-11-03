import { Quiz } from "../models/quiz.model";

export const createQuiz = async (data) => {
    return await Quiz.create(data);
}

export const findAllQuizzes = async() => {
    return await Quiz.findAll();
}

export const findQuizById = async (id) => {
    return await Quiz.findByPk(id);
}

export const updateQuiz = async (data, id) => {
    return await Quiz.update(data, {where: {id}});
}

export const deleteQuiz = async (id) => {
    return await Quiz.destroy({where: id});
}