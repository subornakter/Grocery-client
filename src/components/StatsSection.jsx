import { FaWarehouse, FaUsers, FaMoneyBillWave } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";

export default function StatsSection() {
  const stats = [
    {
      number: "26 warehouses",
      text: "all over bangladesh",
      icon: <FaWarehouse className="text-[#78C841] text-4xl" />,
    },
    {
      number: "5 million orders",
      text: "have been delivered",
      icon: <MdLocalGroceryStore className="text-[#78C841] text-4xl" />,
    },
    {
      number: "100,000 families",
      text: "are being served",
      icon: <FaUsers className="text-[#78C841] text-4xl" />,
    },
    {
      number: "340 million Taka",
      text: "customer savings",
      icon: <FaMoneyBillWave className="text-[#78C841] text-4xl" />,
    },
  ];

  return (
    <div className="w-full py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#F6F7F8] p-6 rounded-xl shadow-sm flex flex-col gap-3"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">{item.number}</h2>
              {item.icon}
            </div>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
