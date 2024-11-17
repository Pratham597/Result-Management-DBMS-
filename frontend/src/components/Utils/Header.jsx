import React from "react";

const header = () => {
  return (
    <>
      <div className="header bg-slate-800 ">
        <div className="container mx-auto sm:h-14 flex flex-col sm:flex-row justify-between  items-center text-white">
          <a className="title text-xl font-bold text-slate-300" href="/">
            <span className="text-green-400">&lt; </span>
            Maheshwari <span className="text-green-400">Vidyapeeth /&gt;</span>
          </a>
          <div className="actions flex space-x-4">
            <a href="/">Home</a>
            <a href="/contact">Contact Us</a>
            <a href="/author">Developer</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
