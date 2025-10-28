import pg from "pg";
import ENV from "./env"

dotenv.config();

const {Pool} = pg;

const db = new Pool({
    connectionString: ENV.DB_URL,
})

db.connect()
.then(()=> {console.log("Kết nối thành công database")})
.catch((err)=> {console.error("Kết nối database thất bại!", err)})

export default db;
