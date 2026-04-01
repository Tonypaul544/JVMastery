import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser')
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser)
        setUser(userData)
        setIsLoggedIn(true)
      } catch (e) {
        console.error('Failed to parse stored user:', e)
      }
    }
  }, [])

  // Signup function
  const signup = (userData) => {
    // Get all users
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]')

    // Check if email already exists
    const emailExists = allUsers.some((u) => u.email === userData.email)
    if (emailExists) {
      throw new Error('Email already registered')
    }

    // Create new user with unique ID
    const newUser = {
      id: Date.now().toString(),
      ...userData,
      // ensure isAdmin flag exists (default false)
      isAdmin: !!userData.isAdmin,
      wallet: null,
      words: [],
      createdAt: new Date().toISOString(),
    }

    // Add to users list
    allUsers.push(newUser)
    localStorage.setItem('users', JSON.stringify(allUsers))

    // Set as current user
    localStorage.setItem('currentUser', JSON.stringify(newUser))
    setUser(newUser)
    setIsLoggedIn(true)
  }

  // Login function
  const login = (email, password) => {
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]')
    const foundUser = allUsers.find((u) => u.email === email && u.password === password)

    if (!foundUser) {
      throw new Error('Invalid email or password')
    }

    localStorage.setItem('currentUser', JSON.stringify(foundUser))
    setUser(foundUser)
    setIsLoggedIn(true)
  }

  // Logout function
  const logout = () => {
    localStorage.removeItem('currentUser')
    setUser(null)
    setIsLoggedIn(false)
  }

  // Update user profile (wallet, words, etc)
  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates }
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]')
    const userIndex = allUsers.findIndex((u) => u.id === user.id)

    if (userIndex !== -1) {
      allUsers[userIndex] = updatedUser
      localStorage.setItem('users', JSON.stringify(allUsers))
      localStorage.setItem('currentUser', JSON.stringify(updatedUser))
      setUser(updatedUser)
    }
  }

  const value = {
    user,
    isLoggedIn,
    signup,
    login,
    logout,
    updateUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
