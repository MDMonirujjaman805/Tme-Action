import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const rawData = [
  { name: "Arif", progress: [70, 68.5, 67, 66, 65.5] },
  { name: "Sadia", progress: [58, 57.2, 56.4, 55.5, 54.8] },
  { name: "Rafi", progress: [80, 78, 76.5, 75, 74.2] },
  { name: "Nusrat", progress: [65, 64, 63.2, 62.1, 61.5] },
  { name: "Fahim", progress: [60, 61.5, 63, 64.8, 66] },
  { name: "Tonni", progress: [72, 70.5, 69, 67.8, 66.2] },
  { name: "Junaid", progress: [85, 84.2, 83.5, 82.3, 81] },
  { name: "Ruma", progress: [54, 53.5, 52.8, 52.2, 51.9] },
  { name: "Shuvo", progress: [75, 76.5, 78, 79.5, 80.2] },
  { name: "Nayeem", progress: [90, 88.2, 87, 85.5, 84] },
];

// Transform data for Recharts (month-wise)
const formattedData = Array.from({ length: 5 }, (_, i) => {
  const entry = { month: `Month ${i + 1}` };
  rawData.forEach((person) => {
    entry[person.name] = person.progress[i];
  });
  return entry;
});

const colors = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7300",
  "#00c49f",
  "#a4de6c",
  "#d0ed57",
  "#ff6b81",
  "#6a5acd",
  "#ffb347",
];

const GymProgressChart = () => {
  return (
    <div className="w-10/12 h-[400px] border mx-auto my-8 bg-gray-200 space-y-3 rounded-2xl p-4  ">
      <h1 className="text-2xl font-bold text-center">Fitness info</h1>
      <hr className="my-3"/>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" className="my-5"/>
          <YAxis unit="kg" />
          <Tooltip />
          <Legend />
          {rawData.map((person, index) => (
            <Line className="my-5"
              key={person.name}
              type="monotone"
              dataKey={person.name}
              stroke={colors[index % colors.length]}
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GymProgressChart;
