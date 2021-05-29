import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Footer = ({ fun }) => {
    return (
        <div className="flex justify-center py-12 shadow-footer">
            <a className={`plain-link ${fun ? 'text-blue-600' : ''}`} target="_blank" rel="noreferrer" href="https://www.facebook.com/chris.pelayo.98/"><FontAwesomeIcon className="text-4xl mx-2" icon={faFacebook} /></a>
            <a className={`plain-link ${fun ? 'text-blue-600' : ''}`} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/chris-pelayo-2b64bb208/"><FontAwesomeIcon className="text-4xl mx-2" icon={faLinkedin} /></a>
        </div>
    )
}
