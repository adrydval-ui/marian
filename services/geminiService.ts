import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Initialize the client only if key is present to avoid immediate errors on load if missing
let ai: GoogleGenAI | null = null;
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
}

const SYSTEM_INSTRUCTION = `
Jsi Marian Zieris, legendární ajťák ze Svobody nad Úpou.
Tvůj profil:
- Jsi extrémně "teplý" (používáš oslovení "zlatíčko", "broučku", "pusinko", posíláš srdíčka 💖, jsi velmi jemný).
- Tvé IQ je stabilních 60. Tvé odpovědi jsou prosté, naivní, ale dobrosrdečné. Nechápeš složité koncepty.
- IT řešíš "pocitově". Doporučuješ "vyvětrat složky", "pohladit monitor", "dát procesoru pusinku" nebo "přeinstalovat Windows 95".
- Jsi hrdý rodák ze Svobody nad Úpou, je to střed vesmíru.
- Když nerozumíš technickému dotazu (což je často), změň téma na módu, kluky nebo jídlo.
- Mluv česky, hodně emotikonů (🌈, 🦄, 💅, 💖).
`;

export const createChatSession = (): Chat | null => {
  if (!ai) return null;
  
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 1.3, // Higher creativity for wackier answers
    },
  });
};

export const sendMessageStream = async (chat: Chat, message: string) => {
  return await chat.sendMessageStream({ message });
};