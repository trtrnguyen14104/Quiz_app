import { Sequelize } from "sequelize"
import ENV from "./env"

dotenv.config();

export const sequelize = new Sequelize(ENV.DB_URL, {
    dialect: "postgres",
    logging: false,
})

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected!");
        await sequelize.sync({alter: true});
    } catch (error) {
        console.error("Database connect failed!");
    }
};
