"use client";

import { GetPost } from "@/zod/types";
import { useEffect, useState } from "react";

const RCCExample = () => {
  const [data, setData] = useState<GetPost | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold mb-4">React Client Component (RCC)</h1>
      <p className="text-lg font-semibold">
        Title: <span className="text-gray-700">{data.title}</span>
      </p>
      <p className="mt-2 text-gray-600">{data.body}</p>
    </div>
  );
};

export default RCCExample;
