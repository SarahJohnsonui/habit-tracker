import { Habit } from '../types/habit'

interface HabitCardProps {
  habit: Habit
  onToggleComplete: (habitId: string, date: string) => void
}

export default function HabitCard({ habit, onToggleComplete }: HabitCardProps) {
  const today = new Date().toISOString().split('T')[0]
  const todayCompletion = habit.completions.find(c => c.date === today)
  const isCompleted = todayCompletion?.completed || false

  const getCategoryColor = (category: string) => {
    const colors = {
      health: '#10b981',
      fitness: '#f59e0b', 
      productivity: '#3b82f6',
      learning: '#8b5cf6',
      personal: '#ec4899',
      social: '#06b6d4'
    }
    return colors[category as keyof typeof colors] || '#6b7280'
  }

  return (
    <div className="habit-card">
      <div className="habit-info">
        <div className="habit-name">{habit.name}</div>
        {habit.description && (
          <div className="habit-description">{habit.description}</div>
        )}
        <div 
          className="habit-category"
          style={{ backgroundColor: getCategoryColor(habit.category) }}
        >
          {habit.category}
        </div>
      </div>
      <button
        className={`completion-btn ${isCompleted ? 'completed' : ''}`}
        onClick={() => onToggleComplete(habit.id, today)}
      >
        {isCompleted ? '✓' : '○'}
      </button>
    </div>
  )
}