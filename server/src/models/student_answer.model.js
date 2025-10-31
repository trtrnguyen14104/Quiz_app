import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

export class Student_answer extends Model {}

Student_answer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    attempt_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Quiz_attempt",
        key: "id",
      },
    },
    question_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Question",
        key: "id",
      },
    },
    answer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Answer",
        key: "id",
      },
    },
    answer_text: {
      type: DataTypes.TEXT,
    },
    is_correct: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    points_earned: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: "Student",
    tableName: "students",
  }
);
