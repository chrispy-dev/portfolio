import React from 'react'
import emailjs, { init } from 'emailjs-com';

init("user_yBn8wIqgL92r8B5YHWQrt");

export const EmailForm = ({ formValues, setFormValues, onInputChange, onFormSubmit, fun, emailSent, setEmailSent }) => {
    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_nqrpiyk', 'template_phwqqvx', event.target, 'user_yBn8wIqgL92r8B5YHWQrt')
            .then(result => {
                console.log(result.text);
                setFormValues({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
                setEmailSent(true);
            }, error => {
                console.log(error.text);
            });
    }

    return (
        <>
            {
                !emailSent
                ? <form onSubmit={sendEmail} className="flex flex-col justify-center mt-8 md:ml-12 w-full pb-10 font-roboto-slab">
                    <div className="flex flex-col md:flex-row">
                        <input className="form-input mr-2" onChange={onInputChange} value={formValues.name} placeholder="Name" name="name" type="text" />
                        <input className="form-input" onChange={onInputChange} value={formValues.email} placeholder="Email"  name="email" type="email" />
                    </div>
                    <input className="form-input" onChange={onInputChange} value={formValues.phone} placeholder="Phone #"  name="phone" type="text" />
                    <textarea className="form-input h-36" onChange={onInputChange} value={formValues.message} placeholder="Write to me here..."  name="message" />
                    <button className={`rounded-md p-4 text-white ${fun ? 'bg-green-900' : 'bg-black'}`} type="submit" value="Send it over!">Send it over!</button>
                </form>
                : <h1 className="text-3xl py-20 md:ml-12">Thank you!</h1>
            }
        </>
    )
}
