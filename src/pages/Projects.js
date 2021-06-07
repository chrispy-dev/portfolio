import React from 'react'

export const Projects = ({ fun, colorChanger }) => {
    const projects = [
        {
            name: 'Mobalytics Replica',
            href: 'https://nostalgic-yonath-730297.netlify.app',
            src: fun ? process.env.PUBLIC_URL + '/imgs/mobalytics_drawing_fun.png' : process.env.PUBLIC_URL + '/imgs/mobalytics_drawing.png',
            description: "My attempt at replicating Mobalytics' beautiful look.",
            disclaimer: "(Currently desktop only)",
            color: 'border-purple-700'
        },
        {
            name: 'Xtreme Fitness',
            href: 'http://xtremefitnessmadera.com',
            src: fun ? process.env.PUBLIC_URL + '/imgs/xtreme_drawing_fun.png' : process.env.PUBLIC_URL + '/imgs/xtreme_drawing.png',
            description: "Recent website I enjoyed working on for a client.",
            disclaimer: "_",
            color: 'border-yellow-400'
        },
        {
            name: 'My Github',
            href: 'https://github.com/onetrckchris',
            src: fun ? process.env.PUBLIC_URL + '/imgs/github_drawing_fun.png' : process.env.PUBLIC_URL + '/imgs/github_drawing.png',
            description: "Some of my other projects, personal and for school!",
            disclaimer: "_",
            color: 'border-green-700'
        }
    ]

    return (
        <div className="flex flex-col justify-center w-full max-w-screen-md items-center min-h-nav-screen-fun pb-12">
            <h1 className="text-lg pt-4">Take a look at some of my stuff!</h1>
            <h3 className="text-sm pb-4">Click on them to open up the project</h3>
            <div className="lg:flex">
            {
                projects.map(project => {
                    return (
                        <div key={project.name} className="border-2 border-gray-900 w-64 rounded-md shadow-lg my-6 lg:mx-6">
                            <a href={project.href} target='_blank' rel="noreferrer"><img className="border-b-2 rounded border-gray-900" src={project.src} alt={project.name} /></a>
                            <h2 className="text-xl text-center pt-3">{colorChanger(project.name)}</h2>
                            <h5 className="text-center text-xs">{project.disclaimer}</h5>
                            <p className="text-sm p-3 text-center">{project.description}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
