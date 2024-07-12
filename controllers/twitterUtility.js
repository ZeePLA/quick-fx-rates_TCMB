import { config } from "dotenv";
config({ path: `${process.cwd()}/../live.env` });

import { twitterClient } from "./twitterClient.js";

const tweet = async () => {
  try {
    await twitterClient.v2.tweet("meep-morp-zerp, cogs are grinding! robewt!");
  } catch (err) {
    console.log(err.message);
  }
};

export default tweet;
