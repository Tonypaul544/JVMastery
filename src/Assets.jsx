
import { useContext, useEffect, useState } from 'react'
import DashboardHeader from './DashboardHeader'
import Footer from './footer'
import { AuthContext } from './AuthContext'

function fmt(v) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(v) || 0)
}

export default function Assets({ showHeader = true, showAdminControls = true }) {
  const { user } = useContext(AuthContext)
  const isAdmin = !!user?.isAdmin

  const [totals, setTotals] = useState({ initial: 0, interest: 0, total: 0 })
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState(totals)

  // Load persisted totals
  useEffect(() => {
    const raw = localStorage.getItem('assetsTotals')
    if (raw) {
      try {
        setTotals(JSON.parse(raw))
      } catch (e) {
        console.error('Failed to parse assetsTotals', e)
      }
    }
  }, [])

  useEffect(() => setForm(totals), [totals])

  const saveTotals = () => {
    const persisted = {
      initial: Number(form.initial) || 0,
      interest: Number(form.interest) || 0,
      total: Number(form.total) || 0,
    }
    localStorage.setItem('assetsTotals', JSON.stringify(persisted))
    setTotals(persisted)
    setEditing(false)
  }

  // Attempt to auto-calc from users list if they store balances
  const autoCalcFromUsers = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const initial = users.reduce((s, u) => s + (Number(u?.initialBalance) || 0), 0)
    const interest = users.reduce((s, u) => s + (Number(u?.interestEarned) || 0), 0)
    const total = users.reduce((s, u) => s + (Number(u?.totalBalance) || 0), 0)
    const persisted = { initial, interest, total }
    localStorage.setItem('assetsTotals', JSON.stringify(persisted))
    setTotals(persisted)
    setForm(persisted)
  }

  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      {showHeader && <DashboardHeader currentPage={'assets'} />}

      <main className="pt-28 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Assets Dashboard</h1>
          <p className="text-white/60 !mb-6 text-center">Overview of platform assets. Admins can update totals below.</p>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#070a11]/90 backdrop-blur-lg border border-white/10 rounded-lg p-6">
              <h3 className="text-sm text-white/60">Total Initial Balance</h3>
              <div className="mt-3 text-2xl font-semibold">{fmt(totals.initial)}</div>
            </div>

            <div className="bg-[#070a11]/90 backdrop-blur-lg border border-white/10 rounded-lg p-6">
              <h3 className="text-sm text-white/60">Interest Earned</h3>
              <div className="mt-3 text-2xl font-semibold">{fmt(totals.interest)}</div>
            </div>

            <div className="bg-[#070a11]/90 backdrop-blur-lg border border-white/10 rounded-lg p-6">
              <h3 className="text-sm text-white/60">Total Balance</h3>
              <div className="mt-3 text-2xl font-semibold">{fmt(totals.total)}</div>
            </div>
          </section>

          {showAdminControls && (
            <div className="bg-[#070a11]/90 backdrop-blur-lg border border-white/10 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-3">Admin Controls</h2>
              <p className="text-white/60 mb-4">Only users marked as admins can update these values. Changes are saved to localStorage.</p>

              {isAdmin ? (
                <div className="space-y-4">
                  {!editing ? (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                      <button onClick={() => { setForm(totals); setEditing(true) }} className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded">Edit Totals</button>
                      <button onClick={autoCalcFromUsers} className="px-4 py-2 border border-white/10 rounded bg-transparent">Auto-calc from users</button>
                      <div className="text-sm text-white/60 mt-3 sm:mt-0">Tip: provide `initialBalance`, `interestEarned`, and `totalBalance` for users to enable auto-calculation.</div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <label className="flex flex-col">
                        <span className="text-sm text-white/70 mb-1">Initial Balance</span>
                        <input type="number" value={form.initial} onChange={(e) => setForm({ ...form, initial: e.target.value })} className="p-2 rounded bg-[#0b0f18] border border-white/5" />
                      </label>

                      <label className="flex flex-col">
                        <span className="text-sm text-white/70 mb-1">Interest Earned</span>
                        <input type="number" value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className="p-2 rounded bg-[#0b0f18] border border-white/5" />
                      </label>

                      <label className="flex flex-col">
                        <span className="text-sm text-white/70 mb-1">Total Balance</span>
                        <input type="number" value={form.total} onChange={(e) => setForm({ ...form, total: e.target.value })} className="p-2 rounded bg-[#0b0f18] border border-white/5" />
                      </label>

                      <div className="sm:col-span-3 flex gap-3">
                        <button onClick={saveTotals} className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded">Save</button>
                        <button onClick={() => { setForm(totals); setEditing(false) }} className="px-4 py-2 border border-white/10 rounded">Cancel</button>
                        <button onClick={autoCalcFromUsers} className="px-4 py-2 border border-white/10 rounded">Auto-calc</button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-white/60">You are not an admin. Contact an administrator to update totals.</div>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}