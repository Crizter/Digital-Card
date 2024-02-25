import React from "react";
import profileImage from "./assets/profile.jpg";

export default function Header() { 
    return(
        <header classname="flex">
            <img src={profileImage} alt="profile-image" width ="400px"></img>
            <div className="flex flex-col  items-center">   
            <h1 className="text-5xl font-bold text-white p-2 m-8 ">Harsh Sharma </h1>
            <p  className="text-orange-400 p-2" >Junior Front End Developer</p>
            </div>
            <div className="flex justify-between">
            <button type="email" className="transition ease-in duration-300 border p-3 rounded-lg pl-8 pr-8 bg-white">
                <a href="mailto:harshsharma@gmail.com">
               <span>Email</span> 
                </a>
                </button>
                <button type="button" className="border p-3 rounded-lg pl-8 pr-8 bg-blue-500" > 
                <a href="https://www.linkedin.com/in/harsh-sharma-90b416179/" target="_blank">
               <span className="text-white">LinkedIn</span> 
                </a>
                 </button>
                
            </div>
           
        </header>
    )
} 