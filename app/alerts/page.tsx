"use client"

import { useState } from "react"
import { useAuth } from "@/hooks/use-auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RecentAlerts } from "@/components/recent-alerts"
import { Search, Filter, MapPin } from "lucide-react"
import Link from "next/link"

export default function AlertsPage() {
  const { user } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")
  const [filterSeverity, setFilterSeverity] = useState("all")

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Traffic Alerts</h1>
          <p className="text-muted-foreground">Stay updated with the latest traffic alerts and roadblocks</p>
        </div>
        {user?.role === "police" && (
          <Link href="/alerts/create">
            <Button>Create Alert</Button>
          </Link>
        )}
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Search Alerts</CardTitle>
          <CardDescription>Find alerts by location, description, or severity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by location or description..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <div className="w-[180px]">
                <Select value={filterSeverity} onValueChange={setFilterSeverity}>
                  <SelectTrigger>
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Filter by severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Severities</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" className="w-[180px]">
                <MapPin className="mr-2 h-4 w-4" />
                Near Me
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Current Alerts</CardTitle>
          <CardDescription>Showing all active traffic alerts and roadblocks</CardDescription>
        </CardHeader>
        <CardContent>
          <RecentAlerts limit={10} />
        </CardContent>
      </Card>
    </div>
  )
}

