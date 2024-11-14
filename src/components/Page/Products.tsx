import React from "react";

function Header() {
    return (
        <section className="mt-11">
            <div className="flex flex-row items-center justify-center py-6 space-x-2">
                <h1 className="text-center text-custom-xl text-[#4a4b66] font-semibold">
                    Modules Prestashop pour développer votre commerce
                </h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fe fe-trending-up text-info w-12 h-auto" viewBox="0 0 24 24" fill="none" stroke="#2caadb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 17 9 11 13 15 21 7"></polyline><polyline points="14 7 21 7 21 14"></polyline>
                </svg>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 mb-16">
                <button className="bg-white hover:shadow-lg hover:border-[#a3c756] rounded-2xl p-4 flex flex-col items-center border border-solid">
                    <img src="/images/Options et frais.png" className="w-full h-auto object-cover rounded-md mb-4"/>
                    <h2 className="text-lg font-medium text-[#787994] text-center mt-4">Options et frais avancé</h2>
                    <p className="text-gray-600 mt-2">$89.99</p>
                    <a className="w-full flex items-center space-x-2 mt-12">
                        <svg fill="#a3c756" viewBox="0 0 30 27" xmlns="http://www.w3.org/2000/svg" className="w-7 py-4 ml-48 h-auto">
                            <path d="M1.39999 1.70001H6.60001" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M6.60001 1.70001L11 18.9" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M11.8 18.9H28.3" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M13.8 25.7C15.4569 25.7 16.8 24.3569 16.8 22.7C16.8 21.0432 15.4569 19.7 13.8 19.7C12.1431 19.7 10.8 21.0432 10.8 22.7C10.8 24.3569 12.1431 25.7 13.8 25.7Z" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M25.3 25.7C26.9568 25.7 28.3 24.3569 28.3 22.7C28.3 21.0432 26.9568 19.7 25.3 19.7C23.6431 19.7 22.3 21.0432 22.3 22.7C22.3 24.3569 23.6431 25.7 25.3 25.7Z" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M25.7 14.6H11.3C10.7 14.6 10.1 14.2 10 13.6L8.1 6.90001C7.9 6.00001 8.49999 5.20001 9.39999 5.20001H27.5C28.4 5.20001 29.1 6.10001 28.8 6.90001L26.9 13.6C26.9 14.2 26.4 14.6 25.7 14.6Z" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
                        </svg>
                        <svg fill="#a3c756" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 45.402 45.402" className="w-3 ml-56 h-auto">
                            <g>
                                <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
                                    c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
                                    c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
                                    c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                            </g>
                        </svg>   
                    </a>
                </button>

                <button className="bg-white hover:shadow-lg hover:border-[#a3c756] rounded-2xl p-4 flex flex-col items-center border border-solid">
                    <img src="/images/Options et frais.png" className="w-full h-auto object-cover rounded-md mb-4"/>
                    <h2 className="text-lg font-medium text-[#787994] text-center mt-4">Swish för handel</h2>
                    <p className="text-gray-600 mt-2">$159.99</p>
                    <a className="w-full flex items-center space-x-2 mt-12">
                        <svg fill="#a3c756" viewBox="0 0 30 27" xmlns="http://www.w3.org/2000/svg" className="w-7 py-4 ml-48 h-auto">
                            <path d="M1.39999 1.70001H6.60001" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M6.60001 1.70001L11 18.9" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M11.8 18.9H28.3" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M13.8 25.7C15.4569 25.7 16.8 24.3569 16.8 22.7C16.8 21.0432 15.4569 19.7 13.8 19.7C12.1431 19.7 10.8 21.0432 10.8 22.7C10.8 24.3569 12.1431 25.7 13.8 25.7Z" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M25.3 25.7C26.9568 25.7 28.3 24.3569 28.3 22.7C28.3 21.0432 26.9568 19.7 25.3 19.7C23.6431 19.7 22.3 21.0432 22.3 22.7C22.3 24.3569 23.6431 25.7 25.3 25.7Z" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M25.7 14.6H11.3C10.7 14.6 10.1 14.2 10 13.6L8.1 6.90001C7.9 6.00001 8.49999 5.20001 9.39999 5.20001H27.5C28.4 5.20001 29.1 6.10001 28.8 6.90001L26.9 13.6C26.9 14.2 26.4 14.6 25.7 14.6Z" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
                        </svg>
                        <svg fill="#a3c756" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 45.402 45.402" className="w-3 ml-56 h-auto">
                            <g>
                                <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
                                    c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
                                    c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
                                    c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                            </g>
                        </svg>   
                    </a>
                </button>

                <button className="bg-white hover:shadow-lg hover:border-[#a3c756] rounded-2xl p-4 flex flex-col items-center border border-solid">
                    <img src="/images/Options et frais.png" className="w-96 h-auto object-cover rounded-md mb-4" />
                    <h2 className="text-lg font-medium text-[#787994] text-center mt-4">Numéro facture, Numéro commande + Edition</h2>
                    <p className="text-gray-600 text-center mt-2">$59.99</p>
                    <a className="w-full flex items-center space-x-2 mt-6">
                        <svg fill="#a3c756" viewBox="0 0 30 27" xmlns="http://www.w3.org/2000/svg" className="w-7 py-4 ml-48 h-auto">
                            <path d="M1.39999 1.70001H6.60001" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M6.60001 1.70001L11 18.9" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M11.8 18.9H28.3" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M13.8 25.7C15.4569 25.7 16.8 24.3569 16.8 22.7C16.8 21.0432 15.4569 19.7 13.8 19.7C12.1431 19.7 10.8 21.0432 10.8 22.7C10.8 24.3569 12.1431 25.7 13.8 25.7Z" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M25.3 25.7C26.9568 25.7 28.3 24.3569 28.3 22.7C28.3 21.0432 26.9568 19.7 25.3 19.7C23.6431 19.7 22.3 21.0432 22.3 22.7C22.3 24.3569 23.6431 25.7 25.3 25.7Z" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M25.7 14.6H11.3C10.7 14.6 10.1 14.2 10 13.6L8.1 6.90001C7.9 6.00001 8.49999 5.20001 9.39999 5.20001H27.5C28.4 5.20001 29.1 6.10001 28.8 6.90001L26.9 13.6C26.9 14.2 26.4 14.6 25.7 14.6Z" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
                        </svg>
                        <svg fill="#a3c756" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 45.402 45.402" className="w-3 ml-56 h-auto">
                            <g>
                                <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
                                    c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
                                    c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
                                    c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                            </g>
                        </svg>   
                    </a>
                </button>

                <button className="bg-white hover:shadow-lg hover:border-[#a3c756] rounded-2xl p-4 flex flex-col items-center border border-solid">
                    <img src="/images/Options et frais.png" className="w-full h-auto object-cover rounded-md mb-4"/>
                    <h2 className="text-lg font-medium text-[#787994] text-center mt-4">Frais de port Avancé Plus</h2>
                    <p className="text-gray-600 mt-2">$79.99</p>
                    <a href="Ajouter" className="w-full flex items-center space-x-2 mt-12">
                        <svg fill="#a3c756" viewBox="0 0 30 27" xmlns="http://www.w3.org/2000/svg" className="w-7 py-4 ml-48 h-auto">
                            <path d="M1.39999 1.70001H6.60001" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M6.60001 1.70001L11 18.9" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M11.8 18.9H28.3" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M13.8 25.7C15.4569 25.7 16.8 24.3569 16.8 22.7C16.8 21.0432 15.4569 19.7 13.8 19.7C12.1431 19.7 10.8 21.0432 10.8 22.7C10.8 24.3569 12.1431 25.7 13.8 25.7Z" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M25.3 25.7C26.9568 25.7 28.3 24.3569 28.3 22.7C28.3 21.0432 26.9568 19.7 25.3 19.7C23.6431 19.7 22.3 21.0432 22.3 22.7C22.3 24.3569 23.6431 25.7 25.3 25.7Z" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M25.7 14.6H11.3C10.7 14.6 10.1 14.2 10 13.6L8.1 6.90001C7.9 6.00001 8.49999 5.20001 9.39999 5.20001H27.5C28.4 5.20001 29.1 6.10001 28.8 6.90001L26.9 13.6C26.9 14.2 26.4 14.6 25.7 14.6Z" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
                        </svg>
                        <svg fill="#a3c756" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 45.402 45.402" className="w-3 ml-56 h-auto">
                            <g>
                                <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
                                    c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
                                    c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
                                    c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                            </g>
                        </svg>   
                    </a>
                </button>
            </div>
        </section>
       
    );
}
export default Header;