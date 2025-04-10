"use client";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faRightFromBracket, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";

type LoginModalProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export function LoginModal({ isOpen = false, setIsOpen }: LoginModalProps) {
    //Handling closing of model
    // function closeModal() {
    //     setIsOpen(false);
    // }
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
    
        if (code) {
          // Store code in localStorage
          localStorage.setItem('google_auth_code', code);
    
          // Clean the URL (remove ?code=...&scope=...)
          const cleanUrl = window.location.origin + window.location.pathname;
          window.history.replaceState({}, document.title, cleanUrl);
        }
      }, []);

    //Writing login function for google
    const loginWithGoogle = () => {
        const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
        const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
        const scope = encodeURIComponent("openid profile email");
        const responseType = "code";
        const accessType = "offline"; // Optional: For refresh token
        const prompt = "consent"; // Optional: Forces consent screen
    
        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&access_type=${accessType}&prompt=${prompt}`;
    
        // Redirect to Google login
        window.location.href = authUrl;
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
                    {/* Backdrop */}
                    <div className="fixed inset-0 bg-black/70" />

                    {/* Modal Container */}
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Panel className="w-full max-w-md bg-white p-6 rounded-lg shadow-xl relative">
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-5 right-5 cursor-pointer  text-gray-600 hover:text-gray-900"
                                >
                                    <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
                                </button>

                                {/* Modal Title */}
                                <Dialog.Title className="text-xl font-semibold text-center mb-4">
                                    Login to Your Account
                                </Dialog.Title>

                                {/* Email & Password Form */}
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-gray-700 text-sm font-medium mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-sm font-medium mb-1">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                                            placeholder="Enter your password"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 theme-button-color text-white py-2 cursor-pointer rounded-md hover:bg-blue-700 transition"
                                    >
                                        <FontAwesomeIcon icon={faRightFromBracket} className="w-5 h-5" /> Login
                                    </button>
                                </form>

                                {/* Divider */}
                                <div className="my-4 flex items-center">
                                    <hr className="flex-grow border-gray-300" />
                                    <span className="px-3 text-gray-500 text-sm">OR</span>
                                    <hr className="flex-grow border-gray-300" />
                                </div>

                                {/* Social Login Buttons */}
                                <div className="space-y-3">
                                    <button className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition cursor-pointer" onClick={() => { loginWithGoogle() }}>
                                        <FontAwesomeIcon icon={faGoogle} />
                                        Continue with Google
                                    </button>

                                    <button className="w-full flex items-center justify-center gap-2 bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 transition">
                                        <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                                        Continue with Facebook
                                    </button>
                                </div>

                                {/* Footer */}
                                <p className="text-center text-gray-600 text-sm mt-4">
                                    Don&apos;t have an account?{" "}
                                    <a href="#" className="text-blue-600 hover:underline">
                                        Sign up
                                    </a>
                                </p>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}