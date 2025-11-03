import { User } from "./user.model.js";
import { Quiz } from "./quiz.model.js";
import { Question } from "./question.model.js";
import { Answer } from "./answer.model.js";
import { quizAttempt } from "./quizAttempt.model.js";
import { studentAnswer } from "./studentAnswer.model.js";

User.hasMany(Quiz, {
  foreignKey: "teacher_id",
});
Quiz.belongsTo(User, { foreignKey: "teacher_id", onDelete: "SET NULL" });

Quiz.hasMany(Question, { foreignKey: "quiz_id" });
Question.belongsTo(Quiz, { foreignKey: "quiz_id", onDelete: "CASCADE" });

Question.hasMany(Answer, { foreignKey: "question_id" });
Answer.belongsTo(Question, { foreignKey: "question_id", onDelete: "CASCADE" });

User.hasMany(quizAttempt, { foreignKey: "user_id" });
quizAttempt.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

Quiz.hasMany(quizAttempt, { foreignKey: "quiz_id" });
quizAttempt.belongsTo(Quiz, { foreignKey: "quiz_id", onDelete: "CASCADE" });

quizAttempt.hasMany(studentAnswer, { foreignKey: "attempt_id" });
studentAnswer.belongsTo(quizAttempt, {
  foreignKey: "attempt_id",
  onDelete: "CASCADE",
});

Question.hasMany(studentAnswer, { foreignKey: "question_id" });
studentAnswer.belongsTo(Question, {
  foreignKey: "question_id",
  onDelete: "SET NULL",
});

Answer.hasMany(studentAnswer, { foreignKey: "answer_id" });
studentAnswer.belongsTo(Answer, {
  foreignKey: "answer_id",  
  onDelete: "SET NULL",
});
