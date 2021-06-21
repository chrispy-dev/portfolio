import React from 'react'
import { Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus } from '@fortawesome/pro-duotone-svg-icons'; 

export const Navbar = ({ isOpen, setIsOpen, fun, setFun, colorChanger }) => {
    return (
        <div className="absolute w-full">
            <div className="flex justify-between px-4 items-center">
                <div className="flex">
                    <Link to="/" className={`text-3xl py-4 plain-link`} onClick={() => setIsOpen(false)}>{colorChanger('Chris P.')}</Link>
                    <div className={`cursor-pointer border-3 flex ${fun ? "justify-end" : "justify-start"} transform scale-50 border-gray-800 rounded-full w-16 h-10 p-0.5 mt-4`} onClick={() => setFun(!fun)}>
                        <div className="h-full w-8 bg-gray-900 rounded-full"></div>
                    </div>
                </div>
                <FontAwesomeIcon className={`text-2xl cursor-pointer ${fun ? 'text-red-600' : ''} ${isOpen ? "transform rotate-45" : ""}`} icon={isOpen ? faPlus : faBars} onClick={() => setIsOpen(!isOpen)} />
            </div>
            <Collapse className="flex flex-col shadow-nav relative items-center md:items-end md:pr-12 z-10 bg-white" isOpen={isOpen}>
                <Link className="plain-link nav-link-mobile select-none" to="/about" onClick={() => setIsOpen(false)}>{colorChanger('About')}</Link>
                <Link className="plain-link nav-link-mobile select-none" to="/projects" onClick={() => setIsOpen(false)}>{colorChanger('Projects')}</Link>
                <Link className="plain-link nav-link-mobile select-none pb-12" to="/contact" onClick={() => setIsOpen(false)}>{colorChanger('Contact')}</Link>
            </Collapse>
        </div>
    )
}
