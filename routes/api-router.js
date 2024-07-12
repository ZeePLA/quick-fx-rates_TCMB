import express from "express";
const router = express.Router();
import { fetchData, responseData } from "../controllers/dataFetcher.js";
import { url } from "../controllers/urlController.js";
import tweet from "../controllers/twitterUtility.js";

// Test-API's
router.get("/", (req, res) => {
  res.sendStatus(200);
});

// API-Routers
router.get("/query", async (req, res) => {
  await fetchData(url);
  res.json(responseData);
});

// Constructive-API
router.get("/query/:series/:startdate/:enddate/:type", async (req, res) => {
  const { series, startdate, enddate, type } = req.params;
  const reconstructedUrl = `https://evds2.tcmb.gov.tr/service/evds/series=${series}&startDate=${startdate}&endDate=${enddate}&type=${type}`;
  await fetchData(reconstructedUrl);
  res.json(responseData);
});

// Tweetter-Test-API
router.post("/tweet/hello-world", async (req, res) => {
  await tweet();
  res
    .status(200)
    .send("Meris tweeted with the choco-bot....\n choco-bot giggles...");
});

// Endpoint-NotFound
router.get("/*", (req, res) => {
  res.sendStatus(404);
});

export default router;
