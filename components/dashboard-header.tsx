import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin } from "lucide-react"

type User = {
  id: string
  name: string
  email: string
  role: "driver" | "police" | "admin"
  imageUrl?: string
}

interface DashboardHeaderProps {
  user: User
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={user.imageUrl || ""} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            <span>Current Location: New York, NY</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Link href="/profile">
          <Button variant="outline">Edit Profile</Button>
        </Link>
        <Link href="/alerts/create">
          <Button>{user.role === "police" ? "Create Alert" : "Report Issue"}</Button>
        </Link>
      </div>
    </div>
  )
}

