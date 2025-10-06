"use client"

import { useState } from "react"
import {
  Home,
  Building2,
  Users,
  BookOpen,
  FileText,
  CheckSquare,
  HelpCircle,
  FileEdit,
  CalendarIcon,
  Bell,
  Megaphone,
  User,
  Settings,
  LogOut,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(6)
  const [currentMonth] = useState("February 2022")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const stats = [
    { label: "Total learners", value: "2,114", icon: Users, color: "text-blue-600" },
    {
      label: "Partner institutes",
      value: "2,114",
      iconImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/building-08-BSJmKVSc1P5fDxtOPOjPI2eY15GV2e.png",
      color: "text-purple-600",
    },
    { label: "Live courses", value: "2,114", icon: BookOpen, color: "text-green-600" },
  ]

  const notifications = [
    {
      org: "Semicolon Africa",
      action: "Created a cohort",
      date: "Jan 12, 2023",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20group-lNweKLAvGbmPwL5R2oFfZgl7cd2Pit.png",
    },
    {
      org: "Productive",
      action: "Sent on 12 May 2025",
      date: "Feb 12, 2023",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PD-Logo_Stack-removebg-preview%201-4iQOwMu2wW0iLuFiSU1u7WH6LiwAa5.png",
    },
    {
      org: "Semicolon Africa",
      action: "Created a program",
      date: "Mar 12, 2023",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20group-lNweKLAvGbmPwL5R2oFfZgl7cd2Pit.png",
    },
    {
      org: "Semicolon Africa",
      action: "Created a course",
      date: "May 12, 2023",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20group-lNweKLAvGbmPwL5R2oFfZgl7cd2Pit.png",
    },
  ]

  const partners = [
    {
      name: "Productive",
      location: "Lagos, Nigeria",
      date: "12, Jan 2021",
      status: "Active",
      pathways: 34,
      learners: 34,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PD-Logo_Stack-removebg-preview%201-4iQOwMu2wW0iLuFiSU1u7WH6LiwAa5.png",
    },
    {
      name: "Semicolon Africa",
      location: "Nasarawa, Nigeria",
      date: "12, Jan 2021",
      status: "Suspended",
      pathways: 5,
      learners: 5,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20group-lNweKLAvGbmPwL5R2oFfZgl7cd2Pit.png",
    },
    {
      name: "Productive",
      location: "Maiduguri, Nigeria",
      date: "12, Jan 2021",
      status: "Pending",
      pathways: 3,
      learners: 3,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PD-Logo_Stack-removebg-preview%201%20%281%29-r8D3JO9Er3rwo4rowXvFLdNDp2Nq16.png",
    },
  ]

  const instructors = [
    {
      name: "Adewale Michael",
      org: "Semicolon Africa",
      date: "12, Jan 2021",
      status: "Active",
      email: "Adewale@gmail.com",
      courses: 24,
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Avatar-DAnYN9OJALYc5IuZDd5WICJ5WOTGAr.png",
    },
    {
      name: "Ashley Immanuel",
      org: "Product dive",
      date: "12, Jan 2021",
      status: "Suspended",
      email: "Adewale@gmail.com",
      courses: 24,
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ashley-Immanuel%201-ixyrNGx9yItxLhutNhVMIODQXip7GV.png",
    },
    {
      name: "Ashley Immanuel",
      org: "Product dive",
      date: "12, Jan 2021",
      status: "Active",
      email: "Adewale@gmail.com",
      courses: 24,
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ashley-Immanuel%201-ixyrNGx9yItxLhutNhVMIODQXip7GV.png",
    },
  ]

  const menuItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Building2, label: "Training institutes" },
    { icon: Users, label: "Instructors" },
    { icon: BookOpen, label: "Learners" },
    { icon: FileText, label: "Applications" },
    { icon: CheckSquare, label: "Assessment" },
    { icon: HelpCircle, label: "Question bank" },
    { icon: FileEdit, label: "Forms" },
    { icon: CalendarIcon, label: "Calendar" },
    { icon: Bell, label: "Notifications" },
    { icon: Megaphone, label: "Announcements" },
  ]

  const calendarDays = [
    [28, 27, 28, 29, 30, 31, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, 31, 1, 2, 3, 4, 5],
  ]

  const chartData = [
    { month: "Jan", value: 65 },
    { month: "Feb", value: 68 },
    { month: "Mar", value: 70 },
    { month: "Apr", value: 72 },
    { month: "May", value: 75 },
    { month: "Jun", value: 78 },
    { month: "Jul", value: 76 },
    { month: "Aug", value: 80 },
    { month: "Sep", value: 82 },
    { month: "Oct", value: 81 },
    { month: "Nov", value: 83 },
    { month: "Dec", value: 85 },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between p-6">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Enum_Logo_Blue-removebg-preview%202-ZUtgxHmcyTsl0rjPWOiSUEvQchVAY7.png"
            alt="enum logo"
            className="h-8"
          />
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(false)}>
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                item.active ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-3 space-y-1 border-t border-gray-200">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
            <User className="w-5 h-5" />
            <span>Profile</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
            <Settings className="w-5 h-5" />
            <span>Configuration</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
            <LogOut className="w-5 h-5" />
            <span>Log out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Enum_Logo_Blue-removebg-preview%202-ZUtgxHmcyTsl0rjPWOiSUEvQchVAY7.png"
            alt="enum logo"
            className="h-6"
          />
          <div className="w-6" />
        </div>

        <div className="p-4 md:p-8">
          <div className="bg-blue-600 text-white p-4 md:p-6 mb-4 md:mb-6 relative overflow-hidden rounded-lg shadow-sm">
            <div className="relative z-10">
              <h2 className="text-lg md:text-2xl font-semibold mb-2">Your learning hub is almost ready!</h2>
              <p className="text-blue-100 text-sm md:text-base mb-4 max-w-2xl">
                To give your learners and partner institutions the best experience, we recommend setting up your hub
                preferences today.
              </p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md font-medium transition-colors text-sm md:text-base">
                Configure hub
              </button>
            </div>
            <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2">
              <svg
                className="w-16 h-16 md:w-24 md:h-24 text-blue-500 opacity-50"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 md:mb-6">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
              Welcome <span className="font-bold">Sam</span>
            </h1>
            <button className="flex items-center justify-center gap-2 text-blue-600 border border-blue-600 hover:bg-blue-50 bg-white px-4 py-2 rounded-md font-medium transition-colors text-sm md:text-base w-full sm:w-auto">
              More actions
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 md:mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
                <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{stat.value}</div>
                {stat.iconImage ? (
                  <img
                    src={stat.iconImage || "/placeholder.svg"}
                    alt={stat.label}
                    className="w-10 h-10 md:w-12 md:h-12"
                  />
                ) : (
                  <stat.icon className={`w-10 h-10 md:w-12 md:h-12 ${stat.color}`} strokeWidth={1.5} />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
            {/* Course Performance */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">Course performance</h3>
                <button className="text-sm text-blue-600 hover:underline">Customize</button>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-3 text-sm md:text-base">Introduction to UX Design</h4>
                <div className="flex gap-2 md:gap-4 border-b border-gray-200 overflow-x-auto">
                  <button className="pb-2 px-1 text-xs md:text-sm font-medium text-blue-600 border-b-2 border-blue-600 whitespace-nowrap">
                    Enrollment
                  </button>
                  <button className="pb-2 px-1 text-xs md:text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">
                    In progress
                  </button>
                  <button className="pb-2 px-1 text-xs md:text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">
                    Completion
                  </button>
                  <button className="pb-2 px-1 text-xs md:text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">
                    Complaints
                  </button>
                  <div className="ml-auto flex gap-2">
                    <button className="pb-2 px-2 md:px-3 text-xs md:text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">
                      This year
                    </button>
                    <button className="pb-2 px-2 md:px-3 text-xs md:text-sm text-gray-400 whitespace-nowrap">
                      This month
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative h-48 md:h-64">
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500">
                  <span>100</span>
                  <span>80</span>
                  <span>60</span>
                  <span>40</span>
                  <span>20</span>
                  <span>0</span>
                </div>
                <div className="ml-6 md:ml-8 h-full relative">
                  <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d={`M 0 ${200 - chartData[0].value * 2} ${chartData.map((d, i) => `L ${(i * 600) / 11} ${200 - d.value * 2}`).join(" ")}`}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                    />
                    <path
                      d={`M 0 ${200 - chartData[0].value * 2} ${chartData.map((d, i) => `L ${(i * 600) / 11} ${200 - d.value * 2}`).join(" ")} L 600 200 L 0 200 Z`}
                      fill="url(#chartGradient)"
                    />
                  </svg>
                </div>
                <div className="ml-6 md:ml-8 flex justify-between text-xs text-gray-500 mt-2">
                  {chartData.map((d) => (
                    <span key={d.month}>{d.month}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">{currentMonth}</h3>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Mo", "Tu", "We", "Th", "Fr", "Sat", "Su"].map((day) => (
                  <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {calendarDays.flat().map((day, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(day)}
                    className={`aspect-square flex items-center justify-center text-xs md:text-sm rounded-lg transition-colors ${
                      day === selectedDate
                        ? "bg-blue-600 text-white font-medium"
                        : day === 31 || (index < 7 && day > 20) || (index > 34 && day < 10)
                          ? "text-gray-400 hover:bg-gray-50"
                          : "text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <div className="mt-6 text-center">
                <CalendarIcon className="w-12 h-12 md:w-16 md:h-16 mx-auto text-gray-300 mb-2" />
                <p className="text-xs md:text-sm text-gray-500">There are no activities for today</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 mb-4 md:mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-900">Recent partner institutes</h3>
              <button className="text-sm text-blue-600 hover:underline">View all</button>
            </div>

            <div className="flex gap-2 md:gap-4 mb-4 border-b border-gray-200 overflow-x-auto">
              <button className="pb-2 px-1 text-xs md:text-sm font-medium text-blue-600 border-b-2 border-blue-600 whitespace-nowrap">
                All(123)
              </button>
              <button className="pb-2 px-1 text-xs md:text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">
                Active(23)
              </button>
              <button className="pb-2 px-1 text-xs md:text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">
                Suspended(12)
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Institutes</th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Date joined</th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Status</th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">No of pathways</th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">No of learners</th>
                  </tr>
                </thead>
                <tbody>
                  {partners.map((partner, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
                            <img
                              src={partner.logo || "/placeholder.svg"}
                              alt={partner.name}
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm md:text-base">{partner.name}</div>
                            <div className="text-xs md:text-sm text-gray-500">{partner.location}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-xs md:text-sm text-gray-600">{partner.date}</td>
                      <td className="py-4">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded ${
                            partner.status === "Active"
                              ? "bg-green-50 text-green-700"
                              : partner.status === "Suspended"
                                ? "bg-red-50 text-red-700"
                                : "bg-yellow-50 text-yellow-700"
                          }`}
                        >
                          {partner.status}
                        </span>
                      </td>
                      <td className="py-4 text-xs md:text-sm text-gray-600">{partner.pathways}</td>
                      <td className="py-4 text-xs md:text-sm text-gray-600">{partner.learners}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 mb-4 md:mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 text-base md:text-lg">Recent notifications</h3>
              <button className="text-sm text-blue-600 hover:underline">View all</button>
            </div>
            <div className="space-y-3">
              {notifications.map((notif, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 flex-shrink-0">
                    <img
                      src={notif.logo || "/placeholder.svg"}
                      alt={notif.org}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900">{notif.org}</div>
                    <div className="text-xs text-gray-500">{notif.action}</div>
                  </div>
                  <div className="text-xs text-gray-500 whitespace-nowrap">{notif.date}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-900">Instructors</h3>
              <button className="text-sm text-blue-600 hover:underline">View all</button>
            </div>

            <div className="flex gap-2 md:gap-4 mb-4 border-b border-gray-200 overflow-x-auto">
              <button className="pb-2 px-1 text-xs md:text-sm font-medium text-blue-600 border-b-2 border-blue-600 whitespace-nowrap">
                All(123)
              </button>
              <button className="pb-2 px-1 text-xs md:text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">
                Active(23)
              </button>
              <button className="pb-2 px-1 text-xs md:text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">
                Suspended(12)
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Name</th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Date joined</th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Status</th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Email</th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Active courses</th>
                  </tr>
                </thead>
                <tbody>
                  {instructors.map((instructor, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
                            <img
                              src={instructor.avatar || "/placeholder.svg"}
                              alt={instructor.name}
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm md:text-base">{instructor.name}</div>
                            <div className="text-xs md:text-sm text-gray-500">{instructor.org}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-xs md:text-sm text-gray-600">{instructor.date}</td>
                      <td className="py-4">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded ${
                            instructor.status === "Active" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                          }`}
                        >
                          {instructor.status}
                        </span>
                      </td>
                      <td className="py-4 text-xs md:text-sm text-gray-600">{instructor.email}</td>
                      <td className="py-4 text-xs md:text-sm text-gray-600">{instructor.courses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
