import React from 'react';

const CardComponent = ({ title, description, instructor, rating, price, originalPrice, imageUrl }) => {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden border">
            <img className="w-full h-auto" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
                <p className="text-gray-500 text-base mt-2">Instructor: {instructor}</p>
                <p className="text-gray-500 text-base">Rating: {rating} out of 5</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <p className="text-gray-900 text-lg">Price: ₹{price}</p>
                <p className="text-gray-500 text-base">Original Price: ₹{originalPrice}</p>
            </div>
        </div>
    );
};


const Card = () => {
    return (
        <div className="app">
            <CardComponent
                title="The Complete 2024 Web Development Bootcamp"
                description="Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps"
                instructor="Dr. Angela Yu"
                rating={4.7}
                price={449}
                originalPrice={3099}
                imageUrl="https://res.cloudinary.com/do6j2zknr/image/upload/f_auto,q_auto/v1/web%20design/rviykzvfrncsgs9gmdrx"
            />

        </div>
    );
};

export default Card;