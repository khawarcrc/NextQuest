"use client";
import React from 'react';

const page: React.FC<{ params: { lecture: string[] } }> = ({ params }) => {
  console.log("params", params);

  return (
    <div>
      {params.lecture[0]}
    </div>
  );
};

export default page;
