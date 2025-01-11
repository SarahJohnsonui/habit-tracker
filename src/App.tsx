import { useState } from 'react'
import { Habit, HabitCategory, FrequencyType } from './types/habit'
import HabitList from './components/HabitList'
import CreateHabitForm from './components/CreateHabitForm'

function App() {
  const [habits, setHabits] = useState<Habit[]>([])
  const [showCreateForm, setShowCreateForm] = useState(false)

  const createHabit = (habitData: {
    name: string
    description: string
    category: HabitCategory
    targetFrequency: FrequencyType
  }) => {
    const newHabit: Habit = {
      id: Date.now().toString(),
      ...habitData,
      createdAt: new Date(),
      completions: []
    }
    
    setHabits(prev => [...prev, newHabit])
    setShowCreateForm(false)
  }

  const toggleHabitCompletion = (habitId: string, date: string) => {
    setHabits(prev => prev.map(habit => {
      if (habit.id === habitId) {
        const existingCompletion = habit.completions.find(c => c.date === date)
        
        if (existingCompletion) {
          return {
            ...habit,
            completions: habit.completions.map(c =>
              c.date === date ? { ...c, completed: !c.completed } : c
            )
          }
        } else {
          return {
            ...habit,
            completions: [...habit.completions, { date, completed: true }]
          }
        }
      }
      return habit
    }))
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Daily Habit Tracker</h1>
        <p>Build better habits, one day at a time</p>
      </header>
      
      <div style={{ marginBottom: '32px', textAlign: 'center' }}>
        <button 
          className="btn"
          onClick={() => setShowCreateForm(true)}
        >
          + Add New Habit
        </button>
      </div>

      <HabitList 
        habits={habits}
        onToggleComplete={toggleHabitCompletion}
      />

      {showCreateForm && (
        <CreateHabitForm
          onCreateHabit={createHabit}
          onCancel={() => setShowCreateForm(false)}
        />
      )}
    </div>
  )
}

export default App