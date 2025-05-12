"use client";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function Page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex p-4 justify-between">
        <div>
          <h1 className="text-xl font-semibold">Calendar</h1>
        </div>
        <div className="flex items-center">
          <a href="/" className="mr-1">
            Dashboard{" "}
          </a>
          <h1>/</h1>
          <h1 className="text-blue-900 ml-1 font-light">Profile</h1>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full h-full max-w-full max-h-full bg-white rounded-md border shadow overflow-hidden"
          classNames={{
            months: "flex flex-col sm:flex-row w-full h-full space-y-4 sm:space-x-4 sm:space-y-0",
            month: "w-full h-full flex flex-col space-y-4 p-1",
            table: "w-full h-full border-collapse",
            head_row: "w-full",
            row: "w-full border rounded-sm",
            
          }}
        />
      </div>
    </div>
  );
}
