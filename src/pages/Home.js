import React from 'react'

export const Home = ({ fun, setFun, colorChanger }) => {

    return (
        <div className="flex flex-col justify-center items-center min-h-nav-screen-fun">
            <div className="flex items-end">
                <img className="w-24" src={fun ? process.env.PUBLIC_URL + "./imgs/guy_head_fun_cropped.png" : process.env.PUBLIC_URL + "./imgs/guy_head_cropped.png"} alt="guy" />
                <img className="h-8 welcome" src="./imgs/guy_hand.png" alt="guy_hand" />
            </div>
            <h1 className="text-2xl">{colorChanger('Welcome!')}</h1>
        </div>
    )
}
