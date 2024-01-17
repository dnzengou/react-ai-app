// src: https://medium.com/@saipragna.kancheti/developing-and-deploying-a-generative-ai-chat-app-with-react-openai-and-vercel-ffc9c886f694
// https://github.com/saipragna25/gpt_chat_app
import axios from "axios";

export default async function handler({ apiKey, question }) {
    //console.log("req.method", req.method);
    //const { apiKey, question } = req.body;

    try {
      const prompt = `Answer concisely for this queston:${question}`;
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          prompt: prompt,
          max_tokens: 100,
          temperature: 0.1,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error("Error in OpenAI API request:", error);
      throw new Error("Error in processing the request");
    }
  } 
  

