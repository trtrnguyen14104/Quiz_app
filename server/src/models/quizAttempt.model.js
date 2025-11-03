import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

export class quizAttempt extends Model {}

quizAttempt.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },
    quiz_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Quiz",
        key: "id",
      },
    },
    score: {
      type: DataTypes.INTEGER,
    },
    total_points: {
      type: DataTypes.INTEGER,
    },
    started_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    completed_at: {
      type: DataTypes.TEXT,
    },
    time_spent: {
      type: DataTypes.INTEGER,
    },
    attempt_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: "quizAttempt",
    tableName: "quiz_attempts",
  }
);
