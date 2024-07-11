import express from "express";
const router = express.Router();
import { fetchAndStoreData, fetchedData } from "../controllers/dataFetcher.js";

// Test-API's
router.get("/", (req, res) => {
  res.sendStatus(200);
});

// API-Router
router.get("/query", async (req, res) => {
  await fetchAndStoreData();
  res.json(fetchedData);
});

export default router;
