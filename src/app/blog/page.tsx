import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogs = [
  { id: 1, name: "Getting Started with React", route: "react-start" },
  { id: 2, name: "Building a RESTful API with Express", route: "api-express" },
  { id: 3, name: "CSS-in-JS: Styling in React", route: "css-in-js" },
  {
    id: 4,
    name: "State Management in React Applications",
    route: "state-management",
  },
  {
    id: 5,
    name: "Introduction to Next.js for Frontend Development",
    route: "nextjs-intro",
  },
  {
    id: 6,
    name: "Responsive Web Design Best Practices",
    route: "responsive-design",
  },
  {
    id: 7,
    name: "Optimizing Performance in React Apps",
    route: "performance-optimize",
  },
  { id: 8, name: "GraphQL: A Comprehensive Guide", route: "graphql-guide" },
  {
    id: 9,
    name: "JavaScript ES6 Features Every Developer Should Know",
    route: "es6-features",
  },
  {
    id: 10,
    name: "Testing React Components with Jest and Enzyme",
    route: "testing-jest-enzyme",
  },
];

const page = () => {
  return (
    <div className="">
      <h1 className="mb-8">This is Blog Page</h1>
      <ul className="pb-12">
        {blogs.map((item, index) => (
          <li key={index} className="pb-4">
            <Link href={`/blog/${item.route}/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="pb-4">
        <Image
          src="/DynamicNestedRoutes/dynamic-nested-routes.png"
          alt="Description of the image"
          width={805}
          height={497}
        />
      </div>
    </div>
  );
};

export default page;
