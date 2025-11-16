
export enum Feature {
  Chatbot = "Chatbot",
  ImageAnalyzer = "Analiz AI",
  AnalysisHistory = "Історія аналізів",
  MartingaleCalculator = "Калькулятор",
}

export interface ChatMessagePart {
  text?: string;
  inlineData?: {
      base64: string;
      mimeType: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: ChatMessagePart[];
  timestamp?: string;
}