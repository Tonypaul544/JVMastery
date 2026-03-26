
export default function Signup() {
  return (
    <div
    className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800"
    id="signup">  
      <div className="bg-[#070a11]/90 backdrop-blur-lg border border-white/10 rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Create Your Account</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:ring-red-500 focus:border-red-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:ring-red-500 focus:border-red-500"
              placeholder="••••••••"
            />
          </div>
        </form>
      </div>
    </div>
  );
}