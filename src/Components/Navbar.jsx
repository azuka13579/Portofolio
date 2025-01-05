import React from "react";

export default function Navbar() {
  return (
    <div className="bg-slate-100 text-slate-800 px-6 py-4 flex justify-between items-center fixed w-full z-10">
      <h1 className="font-bold text-4xl">My Website</h1>
      <nav className="list-none flex gap-3">
        <li className="hover:bg-slate-700 px-2 py-1 rounded hover:text-slate-100 transition duration-300">
          <a href="/">Home</a>
        </li>
        <li className="hover:bg-slate-700 px-2 py-1 rounded hover:text-slate-100 transition duration-300">
          <a href="/about">About</a>
        </li>
        <li className="hover:bg-slate-700 px-2 py-1 rounded hover:text-slate-100 transition duration-300">
          <a href="/project">Project</a>
        </li>
        <li className="hover:bg-slate-700 px-2 py-1 rounded hover:text-slate-100 transition duration-300">
          <a href="#contact">Contact</a>
        </li>
      </nav>
    </div>
  );
}
