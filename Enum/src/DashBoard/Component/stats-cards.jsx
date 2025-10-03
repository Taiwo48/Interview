import { Users, Building2, BookOpen } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function StatsCards() {
  const stats = [
    {
      label: "Total learners",
      value: "2,114",
      icon: Users,
      iconColor: "text-blue-500",
    },
    {
      label: "Partner institutes",
      value: "2,114",
      icon: Building2,
      iconColor: "text-purple-500",
    },
    {
      label: "Live courses",
      value: "2,114",
      icon: BookOpen,
      iconColor: "text-green-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-lg bg-muted ${stat.iconColor}`}>
              <stat.icon className="w-8 h-8" strokeWidth={1.5} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
