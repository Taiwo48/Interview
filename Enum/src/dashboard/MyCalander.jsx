import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import calendarimage from "../assets/calendar-check-01.png";

function MyCalander() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="w-[343px] max-w-[400px] bg-white rounded-[8px] p-4 ml-4 shadow">
      <Calendar
        onChange={setDate}
        value={date}
        className="mx-auto border-none"
        
        style={{ border: "none", boxShadow: "none" }}
      />

      <div className="flex justify-center mt-4">
        <img src={calendarimage} alt="calendar" />
      </div>

      <p className="mt-4 text-center text-gray-600">
        There are no activities for today
      </p>

      
      <style jsx>{`
        .react-calendar {
          border: none !important;
          box-shadow: none !important;
        }
        .react-calendar__tile {
          border: none !important;
        }
      `}</style>
    </div>
  );
}

export default MyCalander;
