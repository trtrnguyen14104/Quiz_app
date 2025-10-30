import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

export class Answer extends Model {}

Answer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Question",
        key: "id",
      },
    },
    answer_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    is_correct: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    order_index: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: "Answer",
    tableName: "answers",
  }
);
