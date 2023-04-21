import React from 'react';
import Logo from '../assets/logo_white.svg'

const Navbar = () => {
    return (
        <nav className='bg-[#2F311B]'>
            <div className='w-screen flex justify-between items-center py-4 px-6'>
                <img src={Logo}/>
                <div>
                    <div>
                        <div className='text-white font-roboto'>
                            About Us
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;