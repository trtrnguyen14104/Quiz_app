import { Sequelize } from "sequelize"
import ENV from "./env"

dotenv.config();

const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: "postgres",
    logging: false,
})

export default sequelize;