import React from 'react';

function Header() {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">Japanese Ramblings</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:text-gray-200">Home</a></li>
                        <li><a href="#" className="hover:text-gray-200">About</a></li>
                        <li><a href="#" className="hover:text-gray-200">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
