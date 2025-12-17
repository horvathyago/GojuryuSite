import Button from '../ui/Button';

const Schedule = () => {
  const headers = ["Beginners", "Intermediate", "Advanced", "Kids Elite", "Junior"];
  const rows = [
    ["13:00", "13:00", "13:00", "12:00", "13:00"],
    ["14:30", "15:00", "14:00", "14:00", "18:00"],
    ["18:00", "22:00", "22:00", "23:00", "—"],
    ["19:00", "23:00", "23:00", "—", "—"]
  ];

  return (
    <div className="bg-[#262626] p-8 md:p-12 shadow-2xl border border-white/5 relative">
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <span className="text-8xl font-black italic uppercase">Time</span>
      </div>
      
      <div className="flex justify-between items-end mb-10">
        <div>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white">Class Schedule</h3>
          <div className="w-12 h-1 border-b-2 border-[#B22222] mt-2"></div>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Updated weekly</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr>
              {headers.map(h => (
                <th key={h} className="pb-4 px-4 text-[10px] uppercase tracking-widest text-[#B22222] font-black">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="group">
                {row.map((cell, j) => (
                  <td key={j} className="bg-[#1f1f1f] p-4 text-xs font-mono text-gray-300 border-l border-white/0 group-hover:border-[#B22222] group-hover:bg-[#2a2a2a] transition-all">
                    {cell || "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-10">
        <Button className="w-full md:w-auto">Secure Your Spot</Button>
      </div>
    </div>
  );
};

export default Schedule;