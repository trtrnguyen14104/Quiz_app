import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

export class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING(255),
    },
    role: {
      type: DataTypes.ENUM("student", "teacher", "admin"),
      defaultValue: "student",
    },
    is_active: {
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
    modelName: "User",
    tableName: "users",
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);
