import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { AlertTriangle, FileText, Map, MessageSquare, TrendingUp, Truck } from "lucide-react"

export default function Home() {
  return (
    <div className="container py-8">
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">RapidTruck 2.0</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Connecting truck drivers with traffic authorities for better coordination, document management, and
                  community support.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg">Get Started</Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full overflow-hidden rounded-xl md:h-[400px]">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="RapidTruck Platform"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/50 rounded-lg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to manage your trucking operations efficiently
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <AlertTriangle className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Traffic Alerts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Receive real-time alerts about roadblocks and traffic restrictions for heavy vehicles.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <FileText className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Document Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Store and manage all your essential truck and logistics documents securely.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <TrendingUp className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Traffic Insights</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>Get valuable insights and traffic estimation based on logistics data.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <MessageSquare className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Community</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>Connect with other truck drivers, share experiences, and seek advice.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Map className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Route Planning</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Plan your routes efficiently based on real-time traffic data and restrictions.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Truck className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Vehicle Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Manage your vehicle details, maintenance records, and compliance documents.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

