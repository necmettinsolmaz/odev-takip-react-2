import { ChevronRight, Calendar, Book } from "lucide-react";

export default function HomeworkCard({ 
  title, 
  source, 
  pages, 
  givenDate, 
  dueDate, 
  onClick 
}) {

  const given = new Date(givenDate);
  const due = new Date(dueDate);

  const givenStr = given.toLocaleDateString("tr-TR", { day: "2-digit", month: "short", weekday: "short" });
  const month = due.toLocaleString("tr-TR", { month: "short" }).toUpperCase();
  const day = due.getDate();

  return (
    <div 
      className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm active:scale-[0.98] transition cursor-pointer"
      onClick={onClick}
    >
      {/* Sol taraf – Başlık + Meta */}
      <div className="flex flex-col flex-1">
        
        {/* Başlık + Kaynak ikonu */}
        <div className="flex items-center gap-2">
          <Book className="text-purple-500 text-lg" strokeWidth={2} />
          <span className="text-base font-semibold">{title}</span>
        </div>

        {/* Meta Bilgi */}
        <span className="text-xs text-gray-600 mt-1">
          {source} • {pages}. sayfalar
        </span>

        {/* Veriliş Tarihi */}
        <div className="flex items-center gap-1 mt-2 bg-gray-200 px-2 py-[3px] rounded-md w-fit">
          <Calendar className="w-3 h-3 text-gray-600" />
          <span className="text-[11px] font-medium text-gray-700">{givenStr}</span>
        </div>
      </div>

      {/* Sağ büyük tarih kutusu */}
      <div className="flex flex-col items-center ml-3">
        <div className="w-12 rounded-md overflow-hidden shadow border border-red-300">
          <div className="w-full bg-red-500 text-white text-[10px] font-semibold text-center">
            {month}
          </div>
          <div className="w-full bg-white text-black text-lg font-bold text-center py-1">
            {day}
          </div>
        </div>
      </div>

      {/* Ok butonu */}
      <ChevronRight className="text-gray-400 text-xl ml-2" />
    </div>
  );
}
