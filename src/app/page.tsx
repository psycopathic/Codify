"use client";
import React from "react";
import { useTRPC } from "@/trpc/client"; //useTRPC is a custom hook to use tRPC in React components
import { useQuery } from "@tanstack/react-query";

const page = () => {
  const trpc = useTRPC();
  const {data} = useQuery(trpc.createAI.queryOptions({text:"Harsh"}));
  
  
  return (
    <div>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
};

export default page;
