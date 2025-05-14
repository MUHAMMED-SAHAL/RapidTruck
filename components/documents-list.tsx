import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Download, Upload, AlertCircle } from "lucide-react"
import Link from "next/link"

interface DocumentsListProps {
  limit?: number
}

export function DocumentsList({ limit = 5 }: DocumentsListProps) {
  // Mock data - in a real app, this would come from an API
  const documents = [
    {
      id: "doc-1",
      title: "Vehicle Registration",
      type: "registration",
      uploadDate: "2023-01-15T10:30:00Z",
      expiryDate: "2024-01-15T10:30:00Z",
      status: "valid",
    },
    {
      id: "doc-2",
      title: "Commercial Driver's License",
      type: "license",
      uploadDate: "2022-11-05T14:45:00Z",
      expiryDate: "2023-11-05T14:45:00Z",
      status: "expiring-soon",
    },
    {
      id: "doc-3",
      title: "Insurance Certificate",
      type: "insurance",
      uploadDate: "2023-03-22T09:15:00Z",
      expiryDate: "2024-03-22T09:15:00Z",
      status: "valid",
    },
    {
      id: "doc-4",
      title: "Hazardous Materials Permit",
      type: "permit",
      uploadDate: "2022-08-10T11:20:00Z",
      expiryDate: "2023-08-10T11:20:00Z",
      status: "expired",
    },
    {
      id: "doc-5",
      title: "Vehicle Inspection Report",
      type: "inspection",
      uploadDate: "2023-05-18T16:10:00Z",
      expiryDate: "2023-11-18T16:10:00Z",
      status: "valid",
    },
  ].slice(0, limit)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "valid":
        return "success"
      case "expiring-soon":
        return "warning"
      case "expired":
        return "destructive"
      default:
        return "secondary"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString()
  }

  return (
    <div className="space-y-4">
      {documents.length === 0 ? (
        <div className="flex h-[100px] items-center justify-center rounded-md border border-dashed">
          <p className="text-sm text-muted-foreground">No documents uploaded yet</p>
        </div>
      ) : (
        <>
          <div className="flex justify-between">
            <h3 className="text-sm font-medium">Your Documents</h3>
            <Link href="/documents/upload">
              <Button size="sm" variant="outline" className="h-8">
                <Upload className="mr-2 h-3.5 w-3.5" />
                Upload
              </Button>
            </Link>
          </div>
          <div className="space-y-2">
            {documents.map((doc) => (
              <Link key={doc.id} href={`/documents/${doc.id}`}>
                <div className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{doc.title}</p>
                      <p className="text-xs text-muted-foreground">Expires: {formatDate(doc.expiryDate)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {doc.status === "expiring-soon" && <AlertCircle className="h-4 w-4 text-orange-500" />}
                    {doc.status === "expired" && <AlertCircle className="h-4 w-4 text-destructive" />}
                    <Badge
                      variant={
                        getStatusColor(doc.status) as
                          | "default"
                          | "secondary"
                          | "destructive"
                          | "outline"
                          | "success"
                          | "warning"
                      }
                    >
                      {doc.status === "valid" ? "Valid" : doc.status === "expiring-soon" ? "Expiring Soon" : "Expired"}
                    </Badge>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

