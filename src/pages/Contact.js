import React from 'react'

import { EmailForm } from '../components/EmailForm';

export const Contact = ({ formValues, setFormValues, onInputChange, onFormSubmit, fun, colorChanger, emailSent, setEmailSent }) => {
    return (
        <div className="flex flex-col justify-center items-center min-h-nav-screen-fun">
            <h2 className="text-center pb-8 text-2xl px-4">Get in contact with me!<br /> Lets {colorChanger('create')} something.</h2>
            <div className="flex flex-col justify-center items-center md:flex-row md:pb-10">
                <img className="w-60" src={fun ? process.env.PUBLIC_URL + './imgs/contact_guy_fun.png' : process.env.PUBLIC_URL + './imgs/contact_guy.png'} alt="contact_guy" />
                <EmailForm 
                    formValues={formValues}
                    setFormValues={setFormValues}
                    onInputChange={onInputChange}
                    onFormSubmit={onFormSubmit}
                    emailSent={emailSent}
                    setEmailSent={setEmailSent}
                    fun={fun}
                />
            </div>
        </div>
    )
}
