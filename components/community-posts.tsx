import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MessageSquare, ThumbsUp, Share } from "lucide-react"
import Link from "next/link"

export function CommunityPosts() {
  // Mock data - in a real app, this would come from an API
  const posts = [
    {
      id: "post-1",
      author: {
        name: "Michael Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Truck Driver",
      },
      content: "Has anyone encountered roadblocks on I-95 South today? Planning to head that way in a few hours.",
      timestamp: "2023-06-15T08:30:00Z",
      likes: 12,
      comments: 8,
    },
    {
      id: "post-2",
      author: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Traffic Police",
      },
      content:
        "Attention all drivers: We've implemented a new system for oversized load permits. Check the official website for details.",
      timestamp: "2023-06-14T15:45:00Z",
      likes: 24,
      comments: 5,
    },
    {
      id: "post-3",
      author: {
        name: "Robert Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Truck Driver",
      },
      content:
        "Looking for recommendations on reliable truck repair shops in the Chicago area. Had a breakdown last week and need a better option for next time.",
      timestamp: "2023-06-13T11:20:00Z",
      likes: 7,
      comments: 15,
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) {
      return "Just now"
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`
    } else {
      return date.toLocaleDateString()
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h3 className="text-sm font-medium">Recent Discussions</h3>
        <Link href="/community/new-post">
          <Button size="sm" variant="outline" className="h-8">
            New Post
          </Button>
        </Link>
      </div>

      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2">
            <Avatar>
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium leading-none">{post.author.name}</p>
                <span className="text-xs text-muted-foreground">•</span>
                <p className="text-xs text-muted-foreground">{post.author.role}</p>
              </div>
              <p className="text-xs text-muted-foreground">{formatDate(post.timestamp)}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{post.content}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
                <ThumbsUp className="h-4 w-4" />
                <span>{post.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
                <MessageSquare className="h-4 w-4" />
                <span>{post.comments}</span>
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="px-2">
              <Share className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}

      <div className="flex justify-center pt-2">
        <Link href="/community">
          <Button variant="outline">View All Posts</Button>
        </Link>
      </div>
    </div>
  )
}

