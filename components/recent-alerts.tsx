import { Badge } from "@/components/ui/badge"
import { AlertTriangle, MapPin, Clock } from "lucide-react"
import Link from "next/link"

interface RecentAlertsProps {
  limit?: number
}

export function RecentAlerts({ limit = 5 }: RecentAlertsProps) {
  // Mock data - in a real app, this would come from an API
  const alerts = [
    {
      id: "alert-1",
      title: "Road Closure on I-95",
      description: "Construction work causing complete closure for heavy vehicles",
      location: "I-95 North, Exit 23-27",
      severity: "high",
      timestamp: "2023-06-15T10:30:00Z",
    },
    {
      id: "alert-2",
      title: "Weight Restriction on Bridge",
      description: "Temporary weight limit of 10 tons due to structural issues",
      location: "Hudson River Bridge, Westbound",
      severity: "medium",
      timestamp: "2023-06-14T16:45:00Z",
    },
    {
      id: "alert-3",
      title: "Accident Cleanup",
      description: "Right lane blocked due to accident cleanup",
      location: "Highway 101, Southbound Mile 45",
      severity: "low",
      timestamp: "2023-06-14T08:15:00Z",
    },
    {
      id: "alert-4",
      title: "Hazardous Material Spill",
      description: "Road closed for cleanup of chemical spill",
      location: "Route 9, Between exits 3-5",
      severity: "high",
      timestamp: "2023-06-13T14:20:00Z",
    },
    {
      id: "alert-5",
      title: "Oversized Load Restriction",
      description: "No oversized loads permitted due to construction",
      location: "I-87 South, Mile markers 120-140",
      severity: "medium",
      timestamp: "2023-06-12T11:10:00Z",
    },
  ].slice(0, limit)

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive"
      case "medium":
        return "warning"
      case "low":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString()
  }

  return (
    <div className="space-y-4">
      {alerts.length === 0 ? (
        <div className="flex h-[100px] items-center justify-center rounded-md border border-dashed">
          <p className="text-sm text-muted-foreground">No alerts at the moment</p>
        </div>
      ) : (
        alerts.map((alert) => (
          <Link key={alert.id} href={`/alerts/${alert.id}`}>
            <div className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50">
              <AlertTriangle
                className={`h-5 w-5 ${alert.severity === "high" ? "text-destructive" : alert.severity === "medium" ? "text-orange-500" : "text-muted-foreground"}`}
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{alert.title}</p>
                  <Badge
                    variant={
                      getSeverityColor(alert.severity) as
                        | "default"
                        | "secondary"
                        | "destructive"
                        | "outline"
                        | "warning"
                    }
                  >
                    {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{alert.description}</p>
                <div className="flex items-center gap-4 pt-1 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-3 w-3" />
                    <span>{alert.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>{formatDate(alert.timestamp)}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  )
}

