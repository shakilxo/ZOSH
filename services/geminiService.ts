
// Always use the official GoogleGenAI class from @google/genai
import { GoogleGenAI } from "@google/genai";

/**
 * Expert event consultant service using Gemini API.
 * Follows strict guidelines for model selection and API usage.
 */
export const getEventAdvice = async (prompt: string, lang: 'EN' | 'BN') => {
  try {
    // ALWAYS initialize the client using a named parameter with process.env.API_KEY
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Using gemini-3-flash-preview for basic text tasks (consulting and Q&A)
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: `You are an expert event consultant for Zosh Communications in Dhaka, Bangladesh. 
        Help the user plan their event. Be creative, professional, and culturally aware of Bangladeshi traditions (weddings, corporate cultures, festivals).
        Keep responses concise and engaging. Respond in ${lang === 'EN' ? 'English' : 'Bengali'}.`,
        temperature: 0.8,
      },
    });

    // The text property is a getter, not a method; do not use response.text()
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return lang === 'EN' 
      ? "I'm having trouble connecting to my creative brain right now. Please try again or contact our team!" 
      : "আমি এই মুহূর্তে সংযোগ করতে পারছি না। দয়া করে আবার চেষ্টা করুন বা আমাদের টিমের সাথে যোগাযোগ করুন!";
  }
};
