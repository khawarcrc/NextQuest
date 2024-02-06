"use client";
import Link from "next/link";
import React from "react";

const reviews = [
  { id: 1, name: "Getting Started with React", route: "react-start", review: "review1" },
  { id: 2, name: "Building a RESTful API with Express", route: "api-express", review: "review2" },
  { id: 3, name: "CSS-in-JS: Styling in React", route: "css-in-js", review: "review3" },
];

const page = ({ params }: { params: { blogdetails: string; id: string } }) => {
  console.log("params", params);
  return (
    <div>
      <h1 className="pb-4">This is Blog Detail Page</h1>
      <ul>
        {reviews.map((item, index) => (
          <li key={index} className="pb-4">
            <Link href={`/blog/${item.route}/${item.id}/${item.review}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
