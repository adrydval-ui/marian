export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum SkillLevel {
  NOOB = 'NOOB',
  ADVANCED = 'POKROČILÝ',
  LEGEND = 'LEGENDA',
  MARIAN = 'ÚROVEŇ MARIAN'
}

export interface Skill {
  name: string;
  level: SkillLevel;
  icon: string;
}