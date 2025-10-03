"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { useState } from "react"

const data = [
  { month: "Jan", enrollment: 65 },
  { month: "Feb", enrollment: 68 },
  { month: "Mar", enrollment: 70 },
  { month: "Apr", enrollment: 72 },
  { month: "May", enrollment: 75 },
  { month: "Jun", enrollment: 78 },
  { month: "Jul", enrollment: 80 },
  { month: "Aug", enrollment: 82 },
  { month: "Sep", enrollment: 83 },
  { month: "Oct", enrollment: 84 },
  { month: "Nov", enrollment: 85 },
  { month: "Dec", enrollment: 86 },
]

export default function CoursePerformance() {
  const [activeTab, setActiveTab] = useState("enrollment")
  const [timePeriod, setTimePeriod] = useState("year")

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Course performance</h2>
        <Button variant="ghost" size="sm" className="text-primary">
          Customize
        </Button>
      </div>

      <div className="mb-6">
        <h3 className="text-base font-medium mb-4">Introduction to UX Design</h3>

        <div className="flex items-center gap-6 mb-6">
          <button
            onClick={() => setActiveTab("enrollment")}
            className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "enrollment"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Enrollment
          </button>
          <button
            onClick={() => setActiveTab("progress")}
            className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "progress"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            In progress
          </button>
          <button
            onClick={() => setActiveTab("completion")}
            className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "completion"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Completion
          </button>
          <button
            onClick={() => setActiveTab("complaints")}
            className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "complaints"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Complaints
          </button>
        </div>

        <div className="flex gap-2 mb-6">
          <Button
            variant={timePeriod === "year" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimePeriod("year")}
          >
            This year
          </Button>
          <Button
            variant={timePeriod === "month" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimePeriod("month")}
          >
            This month
          </Button>
        </div>
      </div>

      <div className="h-64 bg-muted/30 rounded-lg p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#9ca3af" />
            <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" domain={[0, 100]} />
            <Line type="monotone" dataKey="enrollment" stroke="#2563eb" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
