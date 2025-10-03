import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PartnerInstitutesTable() {
  const institutes = [
    {
      name: "Productive",
      location: "Lagos, Nigeria",
      dateJoined: "12, Jan 2021",
      status: "Active",
      pathways: 34,
      learners: 34,
      logo: "/productive-logo.jpg",
      logoColor: "bg-orange-500",
    },
    {
      name: "Semicolon Africa",
      location: "Nasarawa, Nigeria",
      dateJoined: "12, Jan 2021",
      status: "Suspended",
      pathways: 5,
      learners: 5,
      logo: "/semicolon-logo.jpg",
      logoColor: "bg-red-500",
    },
    {
      name: "Productive",
      location: "Maiduguri, Nigeria",
      dateJoined: "12, Jan 2021",
      status: "Pending",
      pathways: 3,
      learners: 3,
      logo: "/productive-maiduguri-logo.jpg",
      logoColor: "bg-orange-500",
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
        <h2 className="text-xl font-semibold">Recent partner institutes</h2>
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
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Institutes</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date joined</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">No of pathways</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">No of learners</th>
            </tr>
          </thead>
          <tbody>
            {institutes.map((institute, index) => (
              <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${institute.logoColor} flex items-center justify-center`}>
                      <span className="text-white font-semibold text-sm">{institute.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{institute.name}</p>
                      <p className="text-xs text-muted-foreground">{institute.location}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm">{institute.dateJoined}</td>
                <td className="py-4 px-4">
                  <Badge
                    variant={
                      institute.status === "Active"
                        ? "default"
                        : institute.status === "Suspended"
                          ? "destructive"
                          : "secondary"
                    }
                    className={
                      institute.status === "Active"
                        ? "bg-green-100 text-green-700 hover:bg-green-100"
                        : institute.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                          : ""
                    }
                  >
                    {institute.status}
                  </Badge>
                </td>
                <td className="py-4 px-4 text-sm text-center">{institute.pathways}</td>
                <td className="py-4 px-4 text-sm text-center">{institute.learners}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
