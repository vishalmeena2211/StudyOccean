import React from "react";
import { Link, useLocation } from "react-router-dom";

const Links = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((path) => path);

    return (
        <nav className="py-2 px-4">
            <ol className="list-none p-0 inline-flex md:text-2xl text-md">
                <li className="flex items-center ">
                    <Link to="/" className="text-gray-800 hover:text-gray-200">
                        HOME
                    </Link>
                    <span className="mx-2 text-gray-800">/</span>
                </li>
                {pathnames.map((path, index) => {
                    const url = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <li className="flex items-center" key={index}>
                            {isLast ? (
                                <span className="text-gray-700">{path.toUpperCase()}</span>
                            ) : (
                                <>
                                    <Link to={url} className="text-gray-800 hover:text-gray-200">
                                        {path.toUpperCase()}
                                    </Link>
                                    <span className="mx-2 text-gray-800">/</span>
                                </>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Links;
