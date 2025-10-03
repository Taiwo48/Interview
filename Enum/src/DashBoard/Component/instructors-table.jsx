import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function InstructorsTable() {
  const instructors = [
    {
      name: "Adewale Michael",
      organization: "Semicolon Africa",
      dateJoined: "12, Jan 2021",
      status: "Active",
      email: "Adewale@gmail.com",
      courses: 24,
      avatar: "/instructor-1.jpg",
    },
    {
      name: "Ashley Immanuel",
      organization: "Product dive",
      dateJoined: "12, Jan 2021",
      status: "Suspended",
      email: "Adewale@gmail.com",
      courses: 24,
      avatar: "/instructor-2.jpg",
    },
    {
      name: "Ashley Immanuel",
      organization: "Product dive",
      dateJoined: "12, Jan 2021",
      status: "Active",
      email: "Adewale@gmail.com",
      courses: 24,
      avatar: "/instructor-3.jpg",
    },
  ]

  const tabs = [
    { label: "All", count: 123, active: true },
    { label: "Active", count: 23 },
    { label: "Suspended", count: 12 },
  ]

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Instructors</h2>
        <Button variant="ghost" size="sm" className="text-primary">
          View all
        </Button>
      </div>

      <div className="flex gap-6 mb-6 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
              tab.active
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}({tab.count})
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Name</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date joined</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Email</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Active courses</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor, index) => (
              <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={instructor.avatar || "/placeholder.svg"} alt={instructor.name} />
                      <AvatarFallback>
                        {instructor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{instructor.name}</p>
                      <p className="text-xs text-muted-foreground">{instructor.organization}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm">{instructor.dateJoined}</td>
                <td className="py-4 px-4">
                  <Badge
                    variant={instructor.status === "Active" ? "default" : "destructive"}
                    className={instructor.status === "Active" ? "bg-green-100 text-green-700 hover:bg-green-100" : ""}
                  >
                    {instructor.status}
                  </Badge>
                </td>
                <td className="py-4 px-4 text-sm">{instructor.email}</td>
                <td className="py-4 px-4 text-sm text-center">{instructor.courses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
