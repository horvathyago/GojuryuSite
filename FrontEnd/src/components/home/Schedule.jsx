import Button from '../ui/Button';

const Schedule = () => {
  const rows = [
    ["13:00", "13:00", "13:00", "12:00", "13:00"],
    ["13:00", "15:00", "14:00", "14:00", "18:00"],
    ["18:00", "22:00", "22:00", "23:00", ""],
    ["19:00", "23:00", "23:00", "", ""]
  ];

  return (
    <div className="text-white">
      <h3 className="text-xl font-bold uppercase mb-4 tracking-widest">Class Schedule</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-[#B22222] text-[10px] uppercase tracking-tighter">
              <th className="p-2 border border-gray-600">Beginners</th>
              <th className="p-2 border border-gray-600">Advanced</th>
              <th className="p-2 border border-gray-600">Advanced</th>
              <th className="p-2 border border-gray-600">Kids</th>
              <th className="p-2 border border-gray-600">Kids</th>
            </tr>
          </thead>
          <tbody className="bg-white text-black font-bold">
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className="p-2 border border-gray-300 text-sm h-10">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <Button>Start Your Journey Today</Button>
      </div>
    </div>
  );
};

export default Schedule;