import React from 'react'
import "./SonuContact.css"
const SonuContact = () => {
    let sonuLink="https://sonu-kumar-yadav-portfolio-website.vercel.app/"
  return (
    <div className='sonu'>
      <p className="mb-0 d-flex align-items-center gap-2"> © Sonu Kumar Yadav, Email:- skumaryada.man@gmail.com
                <i class="ri-phone-line"></i> +91 9117357082,Visit My :-
                <a href={sonuLink}>website</a>
              </p>
    </div>
  )
}

export default SonuContact
