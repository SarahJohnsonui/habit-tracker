import { Habit } from '../types/habit'
import HabitCard from './HabitCard'

interface HabitListProps {
  habits: Habit[]
  onToggleComplete: (habitId: string, date: string) => void
}

export default function HabitList({ habits, onToggleComplete }: HabitListProps) {
  if (habits.length === 0) {
    return (
      <div className="empty-state">
        <p>No habits yet. Create your first habit to get started!</p>
      </div>
    )
  }

  return (
    <div className="habit-list">
      {habits.map(habit => (
        <HabitCard 
          key={habit.id}
          habit={habit}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  )
}