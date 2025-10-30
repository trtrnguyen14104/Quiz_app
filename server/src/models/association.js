import { User } from "./user.model";
import { Quiz } from "./quiz.model";
import { Question } from "./question.model";
import { Answer } from "./answer.model";
import { Quiz_attempt } from "./quiz_attempt.model";
import { Student_answer } from "./student_answer.model";

User.hasMany(Quiz, { foreignKey: "teacher_id" });
Quiz.belongsTo(User, { foreignKey: "teacher_id" });

Quiz.hasMany(Question, { foreignKey: "quiz_id" });
Question.belongsTo(Quiz, { foreignKey: "quiz_id" });

Question.hasMany(Answer, { foreignKey: "question_id" });
Answer.belongsTo(Question, { foreignKey: "question_id" });

User.hasMany(Quiz_attempt, { foreignKey: "user_id" });
Quiz_attempt.belongsTo(User, { foreignKey: "user_id" });

Quiz.hasMany(Quiz_attempt, { foreignKey: "quiz_id" });
Quiz_attempt.belongsTo(Quiz, { foreignKey: "quiz_id" });

Quiz_attempt.hasMany(Student_answer, { foreignKey: "attempt_id" });
Student_answer.belongsTo(Quiz_attempt, { foreignKey: "attempt_id" });

Question.hasMany(Student_answer, { foreignKey: "question_id" });
Student_answer.belongsTo(Question, { foreignKey: "question_id" });

Answer.hasMany(Student_answer, { foreignKey: "answer_id" });
Student_answer.belongsTo(Answer, { foreignKey: "answer_id" });
