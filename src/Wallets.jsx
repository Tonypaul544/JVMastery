import { useState, useEffect, useContext } from 'react'
import { AuthContext } from './AuthContext'

export default function Wallet() {
  const { user, isLoggedIn, updateUser } = useContext(AuthContext)
  const [words, setWords] = useState(Array(12).fill(''))
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (user?.words && Array.isArray(user.words)) {
      const existing = Array.from({ length: 12 }, (_, i) => user.words[i] || '')
      setWords(existing)
    }
  }, [user])

  if (!isLoggedIn || !user) {
    window.location.href = '#/login'
    return null
  }

  const handleChange = (index, value) => {
    const next = [...words]
    next[index] = value
    setWords(next)
  }

  const handleSave = (e) => {
    e.preventDefault()
    setSaving(true)
    setMessage('')

    try {
      // Trim empty trailing entries
      const cleaned = words.map((w) => (w || '').trim()).filter((w) => w)
      updateUser({ words: cleaned })
      setMessage('Saved successfully')
      // clear the inputs after successful save
      setWords(Array(12).fill(''))
    } catch (err) {
      console.error(err)
      setMessage('Failed to save words')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 max-md:text-lg w-full !text-red-500 text-center">Import Wallet (12-word phrase)</h1>
        <p className="text-white/60 mb-6 text-center !mb-5">Enter your 12 recovery words.</p>

        <form onSubmit={handleSave} className="bg-[#070a11]/90 backdrop-blur-lg border border-white/10 rounded-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-md:grid-cols-2">
            {words.map((w, i) => (
              <input
                required
                key={i}
                value={w}
                onChange={(e) => handleChange(i, e.target.value)}
                placeholder={`Word ${i + 1}`}
                className="px-4 py-2 border border-white/10 rounded-lg bg-transparent text-white"
              />
            ))}
          </div>

          <div className="mt-4 flex flex-col items-center gap-3">
            <button type="submit" disabled={saving} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium max-md:w-full">
              {saving ? 'Saving...' : 'Save Words'}
            </button>
            {message && <span className="text-sm text-white/70">{message}</span>}
          </div>
        </form>
      </div>
    </div>
  )
}