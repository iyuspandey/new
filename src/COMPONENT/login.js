import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png'; 

function Log() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignupRedirect = () => {
        navigate('/signup');
    };

    return (
        <div className="flex min-h-full w-100 justify-center px-6 py-12 lg:px-8 bg-white bg-opacity-10 backdrop-blur-md self-center my-36">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-12 w-auto"
                    src={logo}
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="/submit-form" method="POST">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                value={username} onChange={e => setUsername(e.target.value)}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-white"
                            >
                                Password
                            </label>
                            <div className="text-sm">
                                <a
                                    href="https://example.com/forgot-password"
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                                >
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                value={password} onChange={e => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <button
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        onClick={handleSignupRedirect}
                    >
                        Join Now!!
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Log;
