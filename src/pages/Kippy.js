import React from 'react'

export const Kippy = ({ fun, colorChanger }) => {
    return (
        <div className="flex flex-col justify-center w-full max-w-screen-md items-center min-h-nav-screen-fun pb-16">
            <h2 className='text-2xl mt-6'>Hey {colorChanger('Kippy')}!</h2>
            <p className='mt-10 px-6 text-lg'>I'm putting this on here temporarily while I work on a side project for you. I'll update this page every so often to keep it {colorChanger('engaging')}!</p>
            <img className="h-68 mt-6" src={fun ? process.env.PUBLIC_URL + "/imgs/kippy_fun.png" : process.env.PUBLIC_URL + "/imgs/kippy.png"} alt="#" />
            <p className='mt-10 px-6 text-lg'>The idea is to combine two of the most important things to me right now, which are my tech work and my kippy.</p>
            <p className='mt-3 px-6 text-lg'>You mean so much to me and I hope you remember that I'm always thinking of you.</p>
            <p className='mt-10 px-6 text-lg'>Te amo, mi amor.</p>
            <p className='mt-3 px-6 text-lg'>Happy Valentines Day</p>
        </div>
    );
};
