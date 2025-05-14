"use client"

import type React from "react"

import { createContext, useEffect, useState } from "react"
import { useToast } from "@/components/ui/use-toast"

type User = {
  id: string
  name: string
  email: string
  role: "driver" | "police" | "admin"
  imageUrl?: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string, role: "driver" | "police") => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  login: async () => {},
  register: async () => {},
  logout: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    try {
      // In a real app, this would be an API call
      // For demo purposes, we'll simulate a successful login
      if (email && password) {
        const mockUser: User = {
          id: "user-1",
          name: "John Doe",
          email,
          role: "driver",
        }
        setUser(mockUser)
        localStorage.setItem("user", JSON.stringify(mockUser))
        toast({
          title: "Login successful",
          description: "Welcome back!",
        })
      } else {
        throw new Error("Invalid credentials")
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      })
      throw error
    }
  }

  const register = async (name: string, email: string, password: string, role: "driver" | "police") => {
    try {
      // In a real app, this would be an API call
      // For demo purposes, we'll simulate a successful registration
      if (name && email && password) {
        const mockUser: User = {
          id: "user-" + Math.floor(Math.random() * 1000),
          name,
          email,
          role,
        }
        setUser(mockUser)
        localStorage.setItem("user", JSON.stringify(mockUser))
        toast({
          title: "Registration successful",
          description: "Welcome to RapidTruck!",
        })
      } else {
        throw new Error("Please fill in all fields")
      }
    } catch (error) {
      toast({
        title: "Registration failed",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      })
      throw error
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    })
  }

  return <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>{children}</AuthContext.Provider>
}

