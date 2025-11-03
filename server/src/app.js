import cors from "cors";
import express from "express";
import morgan from "morgan";
// import adminQuizRoutes from "./routes/admin.route";
// import studentQuizRoutes from "./routes/student.route";
// import authRoutes from "./routes/auth.route";
// import teacherQuizRoutes from "./routes/teacher.route";
import { connectDB } from "./config/db";

const app = express();

app.use(cors()); //Cho phép truy cập tài nguyên từ domain khác
app.use(express.json()); 
app.use(morgan('dev')); //Thông báo mã trạng thái khi có req tới

connectDB();


app.get("/", (req, res) => {
    res.send("Backend is running");
})


// //Routes
// app.use("", adminQuizRoutes);
// app.use("", teacherQuizRoutes);
// app.use("", studentQuizRoutes);

export default app;

