import React from 'react'
import { Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus } from '@fortawesome/pro-duotone-svg-icons'; 

export const Navbar = ({ isOpen, setIsOpen }) => {
    return (
        <div className="absolute w-full">
            <div className="flex justify-between px-4 items-center">
                <Link to="/" className="text-3xl py-4 plain-link" onClick={() => setIsOpen(false)}>Chris P.</Link>
                <FontAwesomeIcon className={`text-2xl ${isOpen ? "transform rotate-45" : ""}`} icon={isOpen ? faPlus : faBars} onClick={() => setIsOpen(!isOpen)} />
            </div>
            <Collapse className="flex flex-col shadow-nav" isOpen={isOpen}>
                <Link className="plain-link nav-link-mobile bg-white" to="/about" onClick={() => setIsOpen(false)}>About</Link>
                <Link className="plain-link nav-link-mobile pb-10 bg-white" to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            </Collapse>
        </div>
    )
}
