import Button from '../ui/Button';

const Schedule = () => {
  const headers = ["Categoria", "Terça", "Quinta", "Sábado", "Domingo"];
  
  const rows = [
    ["Adultos", "20:00", "20:00", "17:00", "10:00"],
    ["Crianças", "—", "—", "16:00", "09:00"]
  ];

  return (
    <div className="bg-[#262626] p-5 md:p-8 lg:p-12 shadow-2xl border border-white/5 relative w-full rounded-sm">
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none hidden sm:block">
        <span className="text-6xl md:text-8xl font-black italic uppercase">Time</span>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 md:mb-8 gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white">Classes e Horário</h3>
          <div className="w-12 h-1 border-b-2 border-[#B22222] mt-2"></div>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Updated weekly</span>
      </div>

      {/* Container com scroll horizontal suave para evitar quebra em telas muito pequenas */}
      <div className="w-full pb-2 overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-2 min-w-[320px]">
          <thead>
            <tr>
              {headers.map((h, index) => (
                <th key={h} className={`pb-4 px-2 md:px-4 text-[9px] md:text-[10px] uppercase tracking-widest text-[#B22222] font-black align-bottom ${index === 0 ? 'w-auto' : 'w-1/5 text-center'}`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="group">
                {row.map((cell, j) => (
                  <td key={j} className={`bg-[#1f1f1f] p-3 md:p-4 text-[10px] md:text-xs font-mono text-gray-300 border-l border-white/0 group-hover:border-[#B22222] group-hover:bg-[#2a2a2a] transition-all whitespace-nowrap ${j !== 0 ? 'text-center' : 'font-bold'}`}>
                    {cell || "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 md:mt-10">
        <Button className="w-full">Secure Your Spot</Button>
      </div>
    </div>
  );
};

export default Schedule;