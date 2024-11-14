import React from "react";
import Link from "next/link";

function Header() {
    return (
        <header className="w-full sticky top-0 z-50">
            <div className="bg-[#38394f]">
                <ul className="flex flex-row justify-end px-10 py-2 space-x-8 text-[#c3c4c9]">
                    <li>
                        Francais
                    </li>
                    <li>
                        $ Dollar
                    </li>
                </ul>
            </div>
           <nav className="flex flex-row w-full bg-white shadow-sm">
                <div className="flex flex-row items-center space-x-14 pl-7">
                    <img src="/images/motionseed-logo.png" className="py-3 w-35 h-auto"/>
                    <a
                    className="mt-2.6 text-custom-sm text-[#5a5b75] font-medium hover:text-[#a3c756]"
                    href=""
                    >
                        Modules Prestashop
                    </a>
                    <Link href="/blog" className="mt-2.6 text-custom-sm text-[#5a5b75] font-medium hover:text-[#a3c756]">
                        Blog
                    </Link>
                </div>
                <div className="flex flex-row items-center ml-100 space-x-8">
                    <a href="">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="w-5 h-auto fill-current text-[#5a5b75] hover:text-[#a3c756] transition-colors duration-300">
                            <path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z"/>
                        </svg>
                    </a>
                    <a href="">
                        <svg fill="#c3c4c9" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-auto fill-current text-[#5a5b75] hover:text-[#a3c756] transition-colors duration-300">
                            <path d="M16.0724 4.02447C15.1063 3.04182 13.7429 2.5 12.152 2.5C10.5611 2.5 9.19773 3.04182 8.23167 4.02447C7.26636 5.00636 6.73644 6.38891 6.73644 8C6.73644 10.169 7.68081 11.567 8.8496 12.4062C9.07675 12.5692 9.3115 12.7107 9.54832 12.8327C8.24215 13.1916 7.18158 13.8173 6.31809 14.5934C4.95272 15.8205 4.10647 17.3993 3.53633 18.813C3.43305 19.0691 3.55693 19.3604 3.81304 19.4637C4.06914 19.567 4.36047 19.4431 4.46375 19.187C5.00642 17.8414 5.78146 16.4202 6.98653 15.3371C8.1795 14.265 9.82009 13.5 12.152 13.5C14.332 13.5 15.9058 14.1685 17.074 15.1279C18.252 16.0953 19.0453 17.3816 19.6137 18.6532C19.9929 19.5016 19.3274 20.5 18.2827 20.5H6.74488C6.46874 20.5 6.24488 20.7239 6.24488 21C6.24488 21.2761 6.46874 21.5 6.74488 21.5H18.2827C19.9348 21.5 21.2479 19.8588 20.5267 18.2452C19.9232 16.8952 19.0504 15.4569 17.7087 14.3551C16.9123 13.7011 15.9603 13.1737 14.8203 12.8507C15.43 12.5136 15.9312 12.0662 16.33 11.5591C17.1929 10.462 17.5676 9.10016 17.5676 8C17.5676 6.38891 17.0377 5.00636 16.0724 4.02447ZM15.3593 4.72553C16.1144 5.49364 16.5676 6.61109 16.5676 8C16.5676 8.89984 16.2541 10.038 15.544 10.9409C14.8475 11.8265 13.7607 12.5 12.152 12.5C11.5014 12.5 10.3789 12.2731 9.43284 11.5938C8.51251 10.933 7.73644 9.83102 7.73644 8C7.73644 6.61109 8.18963 5.49364 8.94477 4.72553C9.69916 3.95818 10.7935 3.5 12.152 3.5C13.5105 3.5 14.6049 3.95818 15.3593 4.72553Z"/>
                        </svg>
                    </a>
                    <svg fill="#c3c4c9" viewBox="0 0 30 27" xmlns="http://www.w3.org/2000/svg" className="w-6 h-auto">
                        <path d="M1.39999 1.70001H6.60001" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M6.60001 1.70001L11 18.9" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M11.8 18.9H28.3" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M13.8 25.7C15.4569 25.7 16.8 24.3569 16.8 22.7C16.8 21.0432 15.4569 19.7 13.8 19.7C12.1431 19.7 10.8 21.0432 10.8 22.7C10.8 24.3569 12.1431 25.7 13.8 25.7Z" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M25.3 25.7C26.9568 25.7 28.3 24.3569 28.3 22.7C28.3 21.0432 26.9568 19.7 25.3 19.7C23.6431 19.7 22.3 21.0432 22.3 22.7C22.3 24.3569 23.6431 25.7 25.3 25.7Z" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M25.7 14.6H11.3C10.7 14.6 10.1 14.2 10 13.6L8.1 6.90001C7.9 6.00001 8.49999 5.20001 9.39999 5.20001H27.5C28.4 5.20001 29.1 6.10001 28.8 6.90001L26.9 13.6C26.9 14.2 26.4 14.6 25.7 14.6Z" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
                    </svg>
                </div>
           </nav>
        </header>
    );
}
export default Header;