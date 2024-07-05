import React, { useState } from "react";
import {NavLink} from 'react-router-dom'

const Signup = () => {
    const initialFormData = {
        fullName: '',
        email: '',
        password: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div className='m-5'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 m-auto">
                <h2 className="mb-10 text-3xl font-semibold text-center">Signup to your account</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-3">
                            <label htmlFor="fullName" className="block text-sm">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                placeholder="John Doe"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-3.5 border rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:border-violet-400"
                            />
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="vishal@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-3.5 border rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:border-violet-400"
                            />
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="password" className="block text-sm">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="********"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-3.5 border rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:border-violet-400"
                            />
                        </div>
                    </div>

                    <button type="submit" className="w-full px-8 py-3 my-10 font-semibold rounded-md bg-yellow-500 text-white"><NavLink to='/OTP'>Sign up</NavLink>
                    </button>

                    <div className="flex items-center w-full">
                        <hr className="w-full text-gray-800" />
                        <p className="px-3 text-gray-800">OR</p>
                        <hr className="w-full text-gray-800" />
                    </div>

                    <p className="text-sm text-center text-gray-800">Already have an account?
                        <a href="/" className="focus:underline text-yellow-500 hover:underline">Sign in here</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
