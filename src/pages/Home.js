import React from 'react'

export const Home = ({ fun, setFun, colorChanger }) => {

    return (
        <div className="flex flex-col justify-center items-center min-h-nav-screen-fun">
            <div className="-mt-16">
                <div className="flex items-end">
                    <img className="w-24 md:w-36 lg:w-60" src={fun ? process.env.PUBLIC_URL + "/imgs/guy_head_fun_cropped.png" : process.env.PUBLIC_URL + "/imgs/guy_head_cropped.png"} alt="guy" />
                    <img className="h-8 md:h-10 lg:h-20 welcome" src={process.env.PUBLIC_URL + `/imgs/guy_hand.png`} alt="guy_hand" />
                </div>
                <h1 className="text-2xl md:text-4xl lg:text-6xl">{colorChanger('Welcome!')}</h1>
            </div>
        </div>
    )
}
