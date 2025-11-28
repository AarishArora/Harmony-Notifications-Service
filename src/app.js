import express from "express";

const app = express();


app.get('/health', (req, res) => {
	return res.status(200).json({ service: "notifications", status: "healthy" });
});

export default app;