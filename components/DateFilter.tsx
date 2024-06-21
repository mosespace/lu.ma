import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const DateFilter = ({
  events,
  onDateSelect,
}: {
  events: any;
  onDateSelect: any;
}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const days = [
    // { day: "ПТ", date: 12 },
    { day: "СБ", date: 13 },
    { day: "ВС", date: 14 },
    { day: "ПН", date: 15 },
    { day: "ВТ", date: 16 },
    { day: "СР", date: 17 },
    { day: "ЧТ", date: 18 },
    { day: "ПТ", date: 19 },
    { day: "СБ", date: 20 },
    { day: "ВС", date: 21 },
    { day: "ПН", date: 22 },
    { day: "ВТ", date: 23 },
    { day: "СР", date: 24 },
    { day: "ЧТ", date: 25 },
    { day: "ПТ", date: 26 },
    { day: "СБ", date: 27 },
    { day: "ВС", date: 28 },
    { day: "ПН", date: 29 },
    { day: "ВТ", date: 30 },
    { day: "СР", date: 31 },
    { day: "ЧТ", date: 1 },
    { day: "ПТ", date: 2 },
  ];

  const handleDateClick = (date: any) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  return (
    <div className='flex justify-between items-center space-x-4 py-4'>
      <button className='cursor-not-allowed'>
        <ChevronLeft className='size-9' />
      </button>
      {days.map((day, index) => (
        <div
          key={index}
          onClick={() => handleDateClick(day.date)}
          className={`cursor-pointer p-2 rounded-lg ${
            selectedDate === day.date
              ? "bg-orangeB text-white"
              : "bg-gray-200 text-black"
          } hover:bg-orangeB hover:text-white transition duration-300`}
        >
          <div className='text-sm'>{day.day}</div>
          <div className='text-lg font-bold'>{day.date}</div>
        </div>
      ))}
      <button className='cursor-not-allowed'>
        <ChevronRight className='size-9' />
      </button>
    </div>
  );
};

export default DateFilter;
