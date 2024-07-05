import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
    const initialFormData = {
        email: '',
        password: '',
    };

    // Create state variables htmlFor form data and error messages
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
        // Handle form submission here
        console.log(formData); // For now, just log the form data
    };

    return (
        <div className='m-5'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8  m-auto">
                <h2 className="mb-10 text-3xl font-semibold text-center">Login to your account</h2>

                <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="space-y-4">
                        <div className="space-y-3">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="vishal@gmail.com"
                                value={formData.email}
                                onChange={handleChange} // Add onChange event handler
                                required
                                className="w-full px-3 py-3.5 border rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:border-violet-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a href="/" className="text-xs hover:underline text-gray-400 hover:text-blue-600">Forgot password?</a>
                            </div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="*****"
                                value={formData.password}
                                onChange={handleChange} // Add onChange event handler
                                required
                                className="w-full px-3 py-3.5 border rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:border-violet-400"
                            />
                        </div>
                    </div>

                
                    <button type="submit" className="w-full px-8 py-3 my-10 font-semibold rounded-md bg-yellow-600 text-gray-100">Sign in</button>

                    <div className="flex items-center w-full ">
                        <hr className="w-full text-gray-800" />
                        <p className="px-3 text-gray-800">OR</p>
                        <hr className="w-full text-gray-800" />
                    </div>

                    <p className="text-sm text-center text-gray-800">Don't have an account?
                        <NavLink to="/signup" className="focus:underline text-yellow-500 hover:underline">Sign up here</NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
