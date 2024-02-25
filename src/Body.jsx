import React from "react";

export default function About(){ 
    return (
        <div className="flex flex-col justify-center items-center h-50 ">
            <h1 className="text-2xl font-bold text-white">About</h1>
            <p className="flex-grow text-gray-300 ">I am a frontend developer with a particular interest in making things simple and automating 
                tasks. I try to keep up with security and best practices and am always looking for a new things
                to learn.
            </p>
            <h1 className="text-2xl font-bold text-white p-2">Interests</h1>
            <p className="text-gray-300" >
                Food expert.Love to listen music.Internet is amazing.
                Rap.
            </p>
        </div>
    )
}