import { config } from "dotenv";
config({ path: `${process.cwd()}/live.env` });
import axios from "axios";
import { url } from "./urlController.js";

// Request-Parameters
const headers = { key: process.env.EVDS_API_KEY };

// In-memory data storage
let fetchedData = [];

// Fetch data from the API and store it in memory
async function fetchAndStoreData() {
  try {
    const response = await axios.get(url, { headers: headers });
    fetchedData = response.data.items;
    console.log("Data fetched and stored in memory.");
  } catch (error) {
    if (error.response) {
      console.error("Error response status:", error.response.status);
      console.error("Error response data:", error.response.data);
      console.error("Error response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Error request:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    console.error("Error config:", error.config);
  }
}

export { fetchAndStoreData, fetchedData };
