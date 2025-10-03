import {
  Home,
  Building2,
  Users,
  GraduationCap,
  FileText,
  ClipboardCheck,
  HelpCircle,
  FileSpreadsheet,
  Calendar,
  Bell,
  Megaphone,
  User,
  Settings,
  LogOut,
} from "lucide-react"
import Link from "next/link"

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: "Home", href: "/", active: true },
    { icon: Building2, label: "Training institutes", href: "/institutes" },
    { icon: Users, label: "Instructors", href: "/instructors" },
    { icon: GraduationCap, label: "Learners", href: "/learners" },
    { icon: FileText, label: "Applications", href: "/applications" },
    { icon: ClipboardCheck, label: "Assessment", href: "/assessment" },
    { icon: HelpCircle, label: "Question bank", href: "/questions" },
    { icon: FileSpreadsheet, label: "Forms", href: "/forms" },
    { icon: Calendar, label: "Calendar", href: "/calendar" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
    { icon: Megaphone, label: "Announcements", href: "/announcements" },
  ]

  const bottomItems = [
    { icon: User, label: "Profile", href: "/profile" },
    { icon: Settings, label: "Configuration", href: "/settings" },
    { icon: LogOut, label: "Log out", href: "/logout" },
  ]

  return (
    <aside className="w-64 bg-background border-r border-border h-screen flex flex-col fixed left-0 top-0">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
              fill="#2563EB"
            />
            <path
              d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6Z"
              fill="#2563EB"
            />
          </svg>
          <span className="text-xl font-semibold text-primary">enum</span>
        </div>
      </div>

      <nav className="flex-1 px-3 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  item.active
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-3 border-t border-border">
        <ul className="space-y-1">
          {bottomItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
