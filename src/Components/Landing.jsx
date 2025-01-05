import React from "react";

export default function Landing(props) {
  return (
    <div className="md:h-screen h-[130vh] bg-gradient-to-t from-cyan-400 to-sky-700 flex flex-col rounded-b-lg">
      <div className="navbar bg-transparent px-4 sm:px-10 lg:px-24 py-5 text-white font-bold">
        <div className="flex-1">
          <a
            className="btn btn-ghost md:text-4xl sm:text-2xl text-xl font-bold font-serif hover:bg-slate-50 hover:bg-opacity-20"
            href="/"
          >
            Samudra Wirakarsa
          </a>
        </div>
        <div className="flex-none hidden sm:block">
          <ul className="menu menu-horizontal px-1 font-serif font-light">
            <li>
              <a
                className="font-serif hover:bg-slate-50 hover:bg-opacity-20"
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="font-serif hover:bg-slate-50 hover:bg-opacity-20"
                href="/proker"
              >
                Proker
              </a>
            </li>
            <li>
              <a
                className="font-serif hover:bg-slate-50 hover:bg-opacity-20"
                href="/contact"
              >
                Contact
              </a>
            </li>
            <li>
              <details>
                <summary>Lainnya</summary>
                <ul className="font-serif hover:bg-slate-50 hover:bg-opacity-20 bg-opacity-20 w-40 relative right-0">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                  <li>
                    <a>Link 3</a>
                  </li>
                  <li>
                    <a>Link 4</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div className="main md:h-full flex-1 md:px-24 px-12 flex mt-10 md:m-0 md:items-center">
        {props.contact}
        <div className="max-w-lg" data-aos="fade-right" data-aos-duration="800">
          <h1 className="text-7xl text-white font-bold -mt-14">
            {props.judul}
          </h1>
          <h4 className="text-xl text-white font-normal mt-10">
            {props.subjudul}
          </h4>

          {props.button}
        </div>
      </div>
    </div>
  );
}
