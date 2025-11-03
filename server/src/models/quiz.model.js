import { DataTypes, Model } from "sequelize";
import {sequelize} from "../config/db.js";

export class Quiz extends Model {}

Quiz.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "user",
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    difficult_level: {
      type: DataTypes.ENUM("easy", "medium", "hard"),
      defaultValue: "medium",
    },
    time_limit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_public: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    //   created_at: {
    //     type: DataTypes.DATE,
    //     defaultValue: DataTypes.NOW,
    //   },
    //   updated_at: {
    //     type: DataTypes.DATE,
    //     defaultValue: DataTypes.NOW,
    //   },
  },
  {
    sequelize: sequelize,
    modelName: "Quiz",
    tableName: "quizzes",
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);
