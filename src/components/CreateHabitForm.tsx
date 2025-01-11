import { useState } from 'react'
import { HabitCategory, FrequencyType } from '../types/habit'

interface CreateHabitFormProps {
  onCreateHabit: (habit: {
    name: string
    description: string
    category: HabitCategory
    targetFrequency: FrequencyType
  }) => void
  onCancel: () => void
}

export default function CreateHabitForm({ onCreateHabit, onCancel }: CreateHabitFormProps) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState<HabitCategory>(HabitCategory.HEALTH)
  const [frequency, setFrequency] = useState<FrequencyType>(FrequencyType.DAILY)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return

    onCreateHabit({
      name: name.trim(),
      description: description.trim(),
      category,
      targetFrequency: frequency
    })

    setName('')
    setDescription('')
    setCategory(HabitCategory.HEALTH)
    setFrequency(FrequencyType.DAILY)
  }

  return (
    <div className="form-overlay">
      <form className="create-habit-form" onSubmit={handleSubmit}>
        <h2>Create New Habit</h2>
        
        <div className="form-group">
          <label htmlFor="name">Habit Name *</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Drink 8 glasses of water"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Optional description..."
            rows={3}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value as HabitCategory)}
          >
            {Object.values(HabitCategory).map(cat => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="frequency">Frequency</label>
          <select
            id="frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value as FrequencyType)}
          >
            {Object.values(FrequencyType).map(freq => (
              <option key={freq} value={freq}>
                {freq.charAt(0).toUpperCase() + freq.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn">
            Create Habit
          </button>
        </div>
      </form>
    </div>
  )
}