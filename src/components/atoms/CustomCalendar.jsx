import React from 'react';

const CustomCalendar = React.forwardRef(({ onClick, homeworkCheckDate }, ref) => {
  const dateObj = new Date(homeworkCheckDate);
  const isValid = !isNaN(dateObj.getTime());

  const day = isValid ? dateObj.getDate() : "--";
  const month = isValid
    ? dateObj.toLocaleString("tr-TR", { month: "short" }).toUpperCase()
    : "--";

  const weekday = isValid
    ? dateObj.toLocaleString("tr-TR", { weekday: "short" })
    : "--";
  return (
    <div
      ref={ref}
      onClick={onClick}
      className="w-10 rounded-md overflow-hidden shadow-sm border border-red-200 cursor-pointer flex flex-col items-center"
    >
      <div className="w-full bg-red-500 text-white text-[10px] font-semibold text-center">
        {month}
      </div>

      <div className="w-full bg-white text-black text-l font-bold text-center">
        {day}
      </div>
      <div className="w-full bg-white text-gray-500 text-[8px] font-medium text-center leading-none">
        {weekday}
      </div>
    </div>
  );
});

export default CustomCalendar;


