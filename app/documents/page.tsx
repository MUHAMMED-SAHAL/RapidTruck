"use client"

import { useState } from "react"
import { useAuth } from "@/hooks/use-auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DocumentsList } from "@/components/documents-list"
import { Search, Upload, Clock, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function DocumentsPage() {
  const { user } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Document Management</h1>
          <p className="text-muted-foreground">Store and manage all your essential truck and logistics documents</p>
        </div>
        <Link href="/documents/upload">
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
        </Link>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Search Documents</CardTitle>
          <CardDescription>Find documents by name, type, or status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search documents..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Documents</TabsTrigger>
              <TabsTrigger value="valid" className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                Valid
              </TabsTrigger>
              <TabsTrigger value="expiring" className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Expiring Soon
              </TabsTrigger>
              <TabsTrigger value="expired" className="flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                Expired
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <DocumentsList limit={10} />
        </CardContent>
      </Card>
    </div>
  )
}

