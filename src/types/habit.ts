export interface Habit {
  id: string
  name: string
  description?: string
  category: HabitCategory
  createdAt: Date
  targetFrequency: FrequencyType
  completions: CompletionRecord[]
}

export interface CompletionRecord {
  date: string // YYYY-MM-DD format
  completed: boolean
  notes?: string
}

export enum HabitCategory {
  HEALTH = 'health',
  FITNESS = 'fitness', 
  PRODUCTIVITY = 'productivity',
  LEARNING = 'learning',
  PERSONAL = 'personal',
  SOCIAL = 'social'
}

export enum FrequencyType {
  DAILY = 'daily',
  WEEKLY = 'weekly'
}