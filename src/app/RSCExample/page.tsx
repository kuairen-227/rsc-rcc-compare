import { GetPost } from "@/zod/types";

const fetchData = async (): Promise<GetPost> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  return data;
};

const RSCExample = async () => {
  const data = await fetchData();

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold mb-4">React Server Component (RSC)</h1>
      <p className="text-lg font-semibold">
        Title: <span className="text-gray-700">{data.title}</span>
      </p>
      <p className="mt-2 text-gray-600">{data.body}</p>
    </div>
  );
};

export default RSCExample;
