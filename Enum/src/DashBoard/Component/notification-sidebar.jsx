"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, CalendarCheck } from "lucide-react"
import { useState } from "react"

export default function NotificationsSidebar() {
  const [currentDate, setCurrentDate] = useState(new Date(2022, 1, 6)) // February 6, 2022

  const notifications = [
    {
      title: "Semicolon Africa",
      description: "Created a cohort",
      date: "Jan 12, 2023",
      icon: "S",
      iconColor: "bg-red-500",
    },
    {
      title: "Productive",
      description: "Sent on 12 May 2025",
      date: "Feb 12, 2023",
      icon: "P",
      iconColor: "bg-orange-500",
    },
    {
      title: "Semicolon Africa",
      description: "Created a program",
      date: "Mar 12, 2023",
      icon: "S",
      iconColor: "bg-red-500",
    },
    {
      title: "Semicolon Africa",
      description: "Created a course",
      date: "May 12, 2023",
      icon: "S",
      iconColor: "bg-red-500",
    },
  ]

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    return { daysInMonth, startingDayOfWeek }
  }

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate)
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Recent notifications</h3>
          <Button variant="ghost" size="sm" className="text-primary text-xs">
            View all
          </Button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <div key={index} className="flex items-start gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className={`${notification.iconColor} text-white text-xs`}>
                  {notification.icon}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{notification.title}</p>
                <p className="text-xs text-muted-foreground">{notification.description}</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{notification.date}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-sm">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={previousMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
            <div key={day} className="text-center text-xs font-medium text-muted-foreground py-1">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1 }).map((_, index) => (
            <div key={`empty-${index}`} className="aspect-square" />
          ))}

          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1
            const isSelected = day === 6

            return (
              <button
                key={day}
                className={`aspect-square flex items-center justify-center text-sm rounded-full transition-colors ${
                  isSelected ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted"
                }`}
              >
                {day}
              </button>
            )
          })}
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
            <CalendarCheck className="w-8 h-8 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground">There are no activities for today</p>
        </div>
      </Card>
    </div>
  )
}
