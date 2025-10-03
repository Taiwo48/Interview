import Sidebar from "@/components/dashboard/sidebar"
import StatsCards from "@/components/dashboard/stats-cards"
import CoursePerformance from "@/components/dashboard/course-performance"
import PartnerInstitutesTable from "@/components/dashboard/partner-institutes-table"
import InstructorsTable from "@/components/dashboard/instructors-table"
import NotificationsSidebar from "@/components/dashboard/notifications-sidebar"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Settings, ChevronDown } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 ml-64">
        <div className="p-8">
          <Alert className="mb-8 bg-primary text-primary-foreground border-primary">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">Your learning hub is almost ready!</h3>
                <AlertDescription className="text-primary-foreground/90">
                  To give your learners and partner institutions the best experience, we recommend setting up your hub
                  preferences today.
                </AlertDescription>
                <Button variant="secondary" size="sm" className="mt-3">
                  Configure hub
                </Button>
              </div>
              <Settings className="w-20 h-20 ml-4 opacity-20" strokeWidth={1} />
            </div>
          </Alert>

          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold">
              Welcome <span className="font-bold">Femi</span>
            </h1>
            <Button variant="default">
              More actions
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex gap-8">
            <div className="flex-1 space-y-8">
              <StatsCards />
              <CoursePerformance />
              <PartnerInstitutesTable />
              <InstructorsTable />
            </div>

            <aside className="w-80 flex-shrink-0">
              <NotificationsSidebar />
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}
