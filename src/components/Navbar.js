import React from "react";

function Navbar() {
    return (
        <div className="App">
            <nav class="bg-gray-800">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div class="relative flex items-center justify-between h-16">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span class="sr-only">Open main menu</span>
                                <svg
                                    class="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                <svg
                                    class="hidden h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div
                            class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
                        >
                            <div class="flex-shrink-0 flex items-center">
                                <img
                                    class="block lg:hidden h-8 w-auto"
                                    src="https://raw.githubusercontent.com/mustafaynk/todolist/master/appgallery/logo.png"
                                />
                                <img
                                    class="hidden lg:block h-8 w-auto"
                                    src="https://raw.githubusercontent.com/mustafaynk/todolist/master/appgallery/logo.png"
                                />
                            </div>
                            <div class="hidden sm:block sm:ml-6">
                                <div class="flex space-x-4">
                                    <a
                                        href="https://bholanath-barik-portfolio.netlify.app/"
                                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        target="_blank">Portfolio</a
                                    >

                                    <a
                                        href="https://github.com/bholanathbarik9748?tab=repositories"
                                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        target="_blank">Projects</a
                                    >

                                    <a
                                        href="https://drive.google.com/file/d/1tUaObsKpf-9Snv8IkY6Q3w4uMnFwzrBw/view?usp=sharing"
                                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        target="_blank">Resume</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
