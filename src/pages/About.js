import React from 'react'

export const About = ({ fun, setFun, colorChanger }) => {
    return (
        <div className="flex flex-col justify-center items-center min-h-nav-screen max-w-screen-md">
            <div className="py-8 text-center">
                <p className="text-lg">Some stuff to know about me.</p>
                <h6 className="text-xs">Not actually me pictured below.</h6>
            </div>
            <img className="py-8" src={fun ? process.env.PUBLIC_URL + "./imgs/chris_fun.png" : process.env.PUBLIC_URL + "./imgs/chris.png"} alt="#" />
            <div className="px-8 py-8 leading-5">
                <p className="text-lg">My actual name is Christian Pelayo, but everyone has called me Chris for as long as I could remember.</p><br />
                <p className="text-lg">I started programming right out of high school, mostly interested in game developement. I studied C++ and C# within Unity and the Unreal Engine on my own using whatever resources I could find online. <span className="text-xs">Thank you Udemy.</span> I enjoyed that very much and worked on personal projects here and there until I discovered...</p><br />
                <h1 className="text-4xl font-pacifico text-center py-8">{colorChanger('Game Analytics')}</h1><br />
                <p className="text-lg">Websites like <a target="_blank" rel="noreferrer" href="https://mobalytics.gg/" className="underline">Mobalytics.gg</a>, <a target="_blank" rel="noreferrer" href="https://u.gg/" className="underline">U.gg</a>, or <a target="_blank" rel="noreferrer" href="https://www.wowhead.com/" className="underline">Wowhead.com</a> changed the way I saw the internet forever. I realized that there is beauty in data, and by association, how you display that data amongst other information.</p><br />
                <p className="text-lg">Since then I've been studying and working with HTML, CSS, and JavaScript (including several of its libraries such as NodeJS and React) and haven't looked back since.</p><br />
                <p className="text-lg pb-8">Lets build something.</p>
            </div>
        </div>
    )
}
