"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Download, Filter } from "lucide-react"
import { format } from "date-fns"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function InsightsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Traffic Insights</h1>
          <p className="text-muted-foreground">
            Analyze traffic patterns and get valuable insights for better route planning
          </p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Trips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Trip Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2 hours</div>
            <p className="text-xs text-muted-foreground">-8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Roadblocks Encountered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">37</div>
            <p className="text-xs text-muted-foreground">+5 since last month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle>Traffic Analysis</CardTitle>
              <CardDescription>Analyze traffic patterns and congestion data</CardDescription>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="w-[180px]">
                <Select defaultValue="weekly">
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-[180px] justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
              <Button variant="outline" className="w-[120px]">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="congestion">
            <TabsList className="mb-4">
              <TabsTrigger value="congestion">Congestion</TabsTrigger>
              <TabsTrigger value="routes">Popular Routes</TabsTrigger>
              <TabsTrigger value="delays">Delays</TabsTrigger>
              <TabsTrigger value="roadblocks">Roadblocks</TabsTrigger>
            </TabsList>
            <TabsContent value="congestion">
              <div className="h-[400px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Traffic congestion visualization will appear here</p>
              </div>
            </TabsContent>
            <TabsContent value="routes">
              <div className="h-[400px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Popular routes visualization will appear here</p>
              </div>
            </TabsContent>
            <TabsContent value="delays">
              <div className="h-[400px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Delay statistics visualization will appear here</p>
              </div>
            </TabsContent>
            <TabsContent value="roadblocks">
              <div className="h-[400px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Roadblock frequency visualization will appear here</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

