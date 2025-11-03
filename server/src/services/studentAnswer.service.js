import { studentAnswer } from "../models/studentAnswer.model.js";

export const createStudentAnswer = async (data) => {
    return await studentAnswer.create(data);
}

export const findAllStudentAnswers = async() => {
    return await studentAnswer.findAll();
}

export const findStudentAnswerById = async (id) => {
    return await studentAnswer.findByPk(id);
}

export const updateStudentAnswer = async (data, id) => {
    return await studentAnswer.update(data, {where: {id}});
}

export const deleteStudentAnswer = async (id) => {
    return await studentAnswer.destroy({where: {id}});
}