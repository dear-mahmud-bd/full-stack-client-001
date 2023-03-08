import React from 'react';
import Logo from '../../assetes/navLogo.webp';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className=" px-10 pt-10 pb-2 bg-base-200 text-base-content">
                <div className='footer-center md:footer md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto'>
                    <div className="px-5">
                        <h6 className="uppercase font-semibold mb-1 flex justify-center md:justify-start">
                            Products
                        </h6>
                        <p className="mb-4 text-gray-600"><span className='link link-hover'>Augers & Plungers</span></p>
                        <p className="mb-4 text-gray-600"><span className='link link-hover'>Drain Cleaners</span></p>
                        <p className="mb-4 text-gray-600"><span className='link link-hover'>Garbage Disposals</span></p>
                        <p className="mb-4 text-gray-600"><span className='link link-hover'>Plumbing Hardware</span></p>
                    </div>
                    <div className="px-5">
                        <h6 className="uppercase font-semibold mb-1 flex justify-center md:justify-start">
                            Useful links
                        </h6>
                        <p className="mb-4 text-gray-600"><span className='link link-hover'>Pricing</span></p>
                        <p className="mb-4 text-gray-600"><span className='link link-hover'>Settings</span></p>
                        <p className="mb-4 text-gray-600"><span className='link link-hover'>Orders</span></p>
                        <p className="mb-4 text-gray-600"><span className='link link-hover'>Help</span></p>
                    </div>
                    <div className="px-5">
                        <h6 className="uppercase font-semibold mb-1 flex justify-center md:justify-start">
                            Contact
                        </h6>
                        <p className="flex items-center justify-center md:justify-start mb-4">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                                className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path fill="currentColor"
                                    d="M202.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                            </svg>
                            New York, NY 10012, US
                        </p>
                        <p className="flex items-center justify-center md:justify-start mb-4">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                                className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                                </path>
                            </svg>
                            info@example.com
                        </p>
                        <p className="flex items-center justify-center md:justify-start mb-4">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
                                className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                                </path>
                            </svg>
                            + 01 234 567 88
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="print"
                                className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z">
                                </path>
                            </svg>
                            + 01 234 567 89
                        </p>
                    </div>
                </div>
            </footer>
            <footer className=" px-10 py-4 border-t bg-gray-200 text-base-content border-base-300">
                <div className='footer md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto flex items-center justify-center md:justify-start'>
                    <div className="items-center grid-flow-col">
                        <img src={Logo} className='w-24 mr-3 object-cover' alt="Logo" />
                        <p>PARTS Industries Ltd. <br /><span>© {year} <span className="text-gray-600 font-semibold"> All rights reserved.</span></span></p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;