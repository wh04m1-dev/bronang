import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const CardMember = ({
  imageUrl,
  name,
  role,
  facebookLink,
  linkedinLink,
}) => {
  return (
    <a href="#" className="block rounded-lg p-4 shadow-sm mb-5 shadow-slate-300">
      <img
        alt="Profile"
        src={imageUrl}
        className=" w-72 h-72 rounded-md object-cover"
      />

      <div className="mt-2 text-center  ">
        {/* Name and Role */}
        <div>
          <dd className="font-medium pt-9">{name}</dd>
        </div>

        <div>
          <dd className="font-medium pt-2">{role}</dd>
          <dd className="font-medium pt-2">
            Student of Royal University of Phnom Penh, Faculty Of Engineering
          </dd>
        </div>

        {/* Social Icons */}
        <div className="mt-4 flex justify-center space-x-4">
          {/* Facebook */}
          <a
            href={facebookLink}
            className="text-black hover:text-[#102249]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>

          {/* LinkedIn */}
          <a
            href={linkedinLink}
            className="text-black hover:text-[#102249]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
      </div>
    </a>
  );
};

export default CardMember;
