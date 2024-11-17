const Footer = () => {
  return (
    <footer className="bg-slate-800 font-bold p-4 mt-2">
      <div className="container mx-auto text-center text-slate-300">
        © 2024{"  "}
        <a className="title" href="/">
          <span className="text-green-400">&lt; </span>
          <span className="text-white">Maheshwari</span> <span className="text-green-400">Vidyapeeth /&gt;</span>
        </a> 
         {" "}. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
