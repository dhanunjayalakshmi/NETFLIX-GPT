import OpenAI from "openai";
import { DEEPSEEK_API_KEY } from "./constants";

const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: DEEPSEEK_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
