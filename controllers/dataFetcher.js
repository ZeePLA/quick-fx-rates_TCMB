import { config } from "dotenv";
config({ path: `${process.cwd()}/live.env` });
import axios from "axios";

// Request-Parameters
const headers = { key: process.env.EVDS_API_KEY };

// In-memory data storage
let responseData = [];

// Fetch data from the API and store it in memory
async function fetchData(urlAsParameter) {
  try {
    const response = await axios.get(urlAsParameter, { headers: headers });
    responseData = response.data.items;
    console.log("Query successful!");
  } catch (error) {
    console.log(error.message);
  }
}

export { fetchData, responseData };
