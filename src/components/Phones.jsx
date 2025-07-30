import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    // .then((res) => res.json())
    // .then((data) => setPhones(data.data));

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;

        const phoneWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]) || 0, // fallback to 0 if undefined
          };
          return obj;
        });

        setPhones(phoneWithFakeData);
      });
  }, []);
  return (
    <div className="border w-10/12 mx-auto my-10 p-2 rounded-2xl">
      <h1 className="text-2xl font-bold text-center">
        Phone : {phones.length}
      </h1>
      <hr className="my-3" />
      <ResponsiveContainer width="100%" height={400}>
        <BarChart width={600} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Phones;
