/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async(e: any) => {
    e.preventDefault();

    try {
      console.log(name)
      const response = await fetch('https://6aeei2crz4lhf4j2ue3adntiny0tlxzh.lambda-url.us-east-1.on.aws',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',

        },
        body: JSON.stringify({
          name : name
        })

      })
      const data = await response.json()
      setResponseData(data)

    } catch (error: any) {
      console.log(error)
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          className="border p-2 rounded"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {" "}
          Click for submit this
        </button>
      </form>
      {
        responseData && (
          <div>
            Response :
            <pre>
              {JSON.stringify(responseData, null, 2)}
            </pre>
            </div>
        )
      }
    </div>
  );
}
