import React from "react";
import './index.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen outer-background bg-gray-100 ">
      <div className="border border-slate-600 w-80 shadow-xl shadow-cyan-500/50  ">
        <div className="flex flex-col h-full justify-center items-center border-2 border-black bg-custom-background p-9  ">
          <Header />
          <Body />
          <Footer/>
        </div>
      </div>
    </div>
  );
}
