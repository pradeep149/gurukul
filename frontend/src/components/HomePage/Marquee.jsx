import React, { useState, useEffect } from "react";
import axios from "axios";
const Marquee = () => {
  const [data, setData] = useState({ text: "", link: "#" });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/marquee/get`
        );
        setData(res.data);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <div className="bg-blue-100 p-4">
      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="5"
          className="text-lg font-bold"
        >
          {data.text}
        </marquee>
      </a>
    </div>
  );
};
export default Marquee;
