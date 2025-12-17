import Button from '../ui/Button';

const Schedule = () => {
  const headers = ["Categoria", "Terça", "Quinta", "Sábado", "Domingo"];
  
  const rows = [
    ["Adultos", "20:00", "20:00", "17:00", "10:00"],
    ["Crianças", "—", "—", "16:00", "09:00"]
  ];

  return (
    <div className="bg-[#262626] p-4 md:p-8 lg:p-12 shadow-2xl border border-white/5 relative w-full">
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none hidden sm:block">
        <span className="text-6xl md:text-8xl font-black italic uppercase">Time</span>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white">Class Schedule</h3>
          <div className="w-12 h-1 border-b-2 border-[#B22222] mt-2"></div>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Updated weekly</span>
      </div>

      {/* Removido overflow-x-auto e ajustes de margem negativa que podiam causar scroll */}
      <div className="w-full pb-4">
        {/* Removido min-w-[600px] para a tabela não forçar largura */}
        <table className="w-full text-left border-separate border-spacing-y-2 table-fixed">
          <thead>
            <tr>
              {headers.map(h => (
                // Ajuste de padding (px-1) e fonte (text-[8px]) para caber em telas pequenas
                <th key={h} className="pb-4 px-1 md:px-4 text-[8px] md:text-[10px] uppercase tracking-widest text-[#B22222] font-black break-words align-bottom">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="group">
                {row.map((cell, j) => (
                  // Ajuste de padding (p-2) e fonte (text-[10px])
                  // whitespace-normal permite quebra de linha se necessário
                  <td key={j} className="bg-[#1f1f1f] p-2 md:p-4 text-[10px] md:text-xs font-mono text-gray-300 border-l border-white/0 group-hover:border-[#B22222] group-hover:bg-[#2a2a2a] transition-all whitespace-normal md:whitespace-nowrap">
                    {cell || "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 md:mt-10">
        <Button className="w-full md:w-auto">Secure Your Spot</Button>
      </div>
    </div>
  );
};

export default Schedule;