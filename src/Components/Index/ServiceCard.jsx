import React from 'react';
import { FaTruck, FaClock, FaCreditCard, FaShoppingCart } from 'react-icons/fa';

const services = [
  {
    title: 'Fast Delivery',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.',
    icon: <FaTruck className="h-6 w-6 text-[#102249] inline-block mr-2" />,
  },
  {
    title: 'Open 24 Hour',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.',
    icon: <FaClock className="h-6 w-6 text-[#102249] inline-block mr-2" />,
  },
  {
    title: 'Online Payment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.',
    icon: <FaCreditCard className="h-6 w-6 text-[#102249] inline-block mr-2" />,
  },
  {
    title: 'Online Order',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.',
    icon: <FaShoppingCart className="h-6 w-6 text-[#102249] inline-block mr-2" />,
  },
];

const ServiceCards = () => {
  return (
    <div className="flex justify-center py-16">
      <div className="w-[1300px]  px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6  rounded-lg shadow-md text-start bg-white">
            {service.icon}
            <h3 className="flex mt-2 text-lg font-semibold text-gray-900">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;