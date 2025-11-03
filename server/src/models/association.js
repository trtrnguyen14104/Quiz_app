import { User } from "./user.model";
import { Quiz } from "./quiz.model";
import { Question } from "./question.model";
import { Answer } from "./answer.model";
import { QuizAttempt } from "./quizAttempt.model";
import { StudentAnswer } from "./studentAnswer.model";

User.hasMany(Quiz, {
  foreignKey: "teacher_id",
});
Quiz.belongsTo(User, { foreignKey: "teacher_id", onDelete: "SET NULL" });

Quiz.hasMany(Question, { foreignKey: "quiz_id" });
Question.belongsTo(Quiz, { foreignKey: "quiz_id", onDelete: "CASCADE" });

Question.hasMany(Answer, { foreignKey: "question_id" });
Answer.belongsTo(Question, { foreignKey: "question_id", onDelete: "CASCADE" });

User.hasMany(QuizAttempt, { foreignKey: "user_id" });
QuizAttempt.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

Quiz.hasMany(QuizAttempt, { foreignKey: "quiz_id" });
QuizAttempt.belongsTo(Quiz, { foreignKey: "quiz_id", onDelete: "CASCADE" });

QuizAttempt.hasMany(StudentAnswer, { foreignKey: "attempt_id" });
StudentAnswer.belongsTo(QuizAttempt, {
  foreignKey: "attempt_id",
  onDelete: "CASCADE",
});

Question.hasMany(StudentAnswer, { foreignKey: "question_id" });
StudentAnswer.belongsTo(Question, {
  foreignKey: "question_id",
  onDelete: "SET NULL",
});

Answer.hasMany(StudentAnswer, { foreignKey: "answer_id" });
StudentAnswer.belongsTo(Answer, {
  foreignKey: "answer_id",  
  onDelete: "SET NULL",
});
