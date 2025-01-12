import { Habit } from '../types/habit'

interface HabitStatsProps {
  habits: Habit[]
}

export default function HabitStats({ habits }: HabitStatsProps) {
  const today = new Date().toISOString().split('T')[0]
  
  const todayCompletions = habits.filter(habit => 
    habit.completions.some(c => c.date === today && c.completed)
  ).length

  const totalHabits = habits.length
  const completionRate = totalHabits > 0 ? Math.round((todayCompletions / totalHabits) * 100) : 0

  const getWeeklyStats = () => {
    const weekDays = []
    for (let i = 6; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      weekDays.push(date.toISOString().split('T')[0])
    }

    return weekDays.map(date => {
      const dayCompletions = habits.filter(habit =>
        habit.completions.some(c => c.date === date && c.completed)
      ).length
      
      return {
        date,
        completed: dayCompletions,
        total: totalHabits,
        percentage: totalHabits > 0 ? Math.round((dayCompletions / totalHabits) * 100) : 0
      }
    })
  }

  const weeklyData = getWeeklyStats()

  return (
    <div className="stats-container">
      <h2>Your Progress</h2>
      
      <div className="stats-today">
        <div className="stat-card">
          <div className="stat-number">{todayCompletions}/{totalHabits}</div>
          <div className="stat-label">Today's Completion</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{completionRate}%</div>
          <div className="stat-label">Success Rate</div>
        </div>
      </div>

      <div className="weekly-chart">
        <h3>Last 7 Days</h3>
        <div className="chart-bars">
          {weeklyData.map((day, index) => (
            <div key={day.date} className="chart-bar">
              <div 
                className="bar-fill"
                style={{ height: `${day.percentage}%` }}
              ></div>
              <div className="bar-label">
                {new Date(day.date).toLocaleDateString('en', { weekday: 'short' })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}