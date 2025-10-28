import cors from "cors";
import express from "express";
import dotenv from "dotenv/lib/main";

dotenv.config(); //nap bien moi truong .env vao process.env 

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running");
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})