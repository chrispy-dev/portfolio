import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faNodeJs, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

export const About = ({ fun, setFun, colorChanger }) => {
    const techs = [
        { name: 'HTML 5', color: 'text-orange-600', icon: faHtml5  },
        { name: 'CSS 3', color: 'text-blue-600', icon: faCss3Alt  },
        { name: 'JavaScript', color: 'text-yellow-400', icon: faJsSquare  },
        { name: 'NodeJS', color: 'text-green-600', icon: faNodeJs  },
        { name: 'ReactJS', color: 'text-blue-400', icon: faReact, wide: true }
    ];

    return (
        <div className="flex flex-col justify-center items-center min-h-nav-screen max-w-screen-md">
            <div className="py-8 text-center">
                <p className="text-2xl">Some stuff {colorChanger('about me')}</p>
                <h6 className="text-xs">Not actually me pictured below</h6>
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-around">
                <img className="h-68 md:-mt-6" src={fun ? process.env.PUBLIC_URL + "/imgs/chris_fun.png" : process.env.PUBLIC_URL + "/imgs/chris.png"} alt="#" />
                <div className="px-8 py-8 leading-5 md:w-1/2 md:px-0">
                    <p className="text-lg">My actual name is Christian Pelayo, but everyone has called me Chris for as long as I could remember.</p><br />
                    <p className="text-lg">I'm a web developer with a particular interest in {colorChanger('game analytics')}. I've discovered over the years working in this field that there is beauty in data, and by association in the way we display it to the masses.</p>
                </div>
            </div>
            <div className="w-full pt-4 pb-10">
                <h2 className="text-2xl text-center pb-8">Some {colorChanger('techs')} I work with</h2>
                <div className="flex justify-around w-full flex-wrap px-3">
                    {techs.map(tech => {
                        return <div className={`flex flex-col items-center p-3 ${tech.wide ? 'w-11/12' : 'w-2/5'} md:w-32 mb-4 border-2 border-gray-900 rounded shadow`} key={tech.name}>
                                <h2 className="pb-3">{tech.name}</h2>
                                <FontAwesomeIcon className={`text-5xl ${fun ? tech.color : ''}`} icon={tech.icon} />
                            </div>
                    })}
                </div>
            </div>
            <div className="px-4 pb-20 flex flex-col w-full md:flex-row-reverse md:justify-around md:items-center">
                <img className="phone-shake md:h-64" src={fun ? process.env.PUBLIC_URL + "/imgs/phone_fun.png" : process.env.PUBLIC_URL + "/imgs/phone.png"} alt="phone" />
                <Link className="plain-link text-2xl mt-8 md:mt-0 border-3 border-black rounded text-center p-3" to="/contact#top">{colorChanger('Get in contact!')}</Link>
            </div>
            {/* <div className="px-8 py-8 leading-5">
                <p className="text-lg">My actual name is Christian Pelayo, but everyone has called me Chris for as long as I could remember.</p><br />
                <p className="text-lg">I started programming right out of high school, mostly interested in game development. I studied C++ and C# within Unity and the Unreal Engine on my own using whatever resources I could find online. <span className="text-xs">Thank you Udemy.</span> I enjoyed that very much and worked on personal projects here and there until I discovered...</p><br />
                <h1 className="text-4xl font-pacifico text-center py-8">{colorChanger('Game Analytics')}</h1><br />
                <p className="text-lg">Websites like <a target="_blank" rel="noreferrer" href="https://mobalytics.gg/" className="underline">Mobalytics.gg</a>, <a target="_blank" rel="noreferrer" href="https://u.gg/" className="underline">U.gg</a>, or <a target="_blank" rel="noreferrer" href="https://www.wowhead.com/" className="underline">Wowhead.com</a> changed the way I saw the internet forever. I realized that there is beauty in data, and by association, how you display that data amongst other information.</p><br />
                <p className="text-lg">Since then I've been studying and working with HTML, CSS, and JavaScript (including several of its libraries such as NodeJS and React) and haven't looked back since.</p><br />
                <p className="text-lg pb-8">Let's build something.</p>
            </div> */}
        </div>
    )
}
