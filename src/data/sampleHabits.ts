import { Habit, HabitCategory, FrequencyType } from '../types/habit'

export const sampleHabits: Habit[] = [
  {
    id: '1',
    name: 'Drink 8 glasses of water',
    description: 'Stay hydrated throughout the day',
    category: HabitCategory.HEALTH,
    targetFrequency: FrequencyType.DAILY,
    createdAt: new Date('2025-01-11'),
    completions: [
      { date: '2025-01-11', completed: true },
      { date: '2025-01-12', completed: true },
      { date: '2025-01-13', completed: false },
    ]
  },
  {
    id: '2', 
    name: '30min morning exercise',
    description: 'Start the day with energy and movement',
    category: HabitCategory.FITNESS,
    targetFrequency: FrequencyType.DAILY,
    createdAt: new Date('2025-01-11'),
    completions: [
      { date: '2025-01-11', completed: true },
      { date: '2025-01-12', completed: false },
      { date: '2025-01-13', completed: true },
    ]
  },
  {
    id: '3',
    name: 'Read for 20 minutes', 
    description: 'Learn something new every day',
    category: HabitCategory.LEARNING,
    targetFrequency: FrequencyType.DAILY,
    createdAt: new Date('2025-01-12'),
    completions: [
      { date: '2025-01-12', completed: true },
      { date: '2025-01-13', completed: true },
    ]
  }
]