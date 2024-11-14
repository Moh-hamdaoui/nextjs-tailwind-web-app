import React from "react";

function Clients() {
    return (
      <section className="bg-[#f7f7fc] flex flex-col items-center">
            <div className="flex flex-row justify-center text-4xl pt-20">
                <p className="font-medium text-[#4a4b66] mt-2 mr-2">
                    Vous êtes en 
                </p>
                <div className=" bg-[#eff2eb] border border-solid rounded-xl">
                    <p className="font-medium ml-1 text-[#a3c756] p-2">bonne compagnie</p>
                </div>
            </div>
            <div>
                <p className="text-14sm text-[#9fa0b5] pt-3">
                    Ils nous font confiance pour booster leurs ventes en ligne.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-7 mt-9 mb-11">
                <div className="text-center">
                    <div className="border border-solid w-96 rounded-2xl bg-white flex justify-center">
                        <img src="/images/logo-companies.png" className="w-50 p-4"/>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-9lg text-[#4a4b66] font-semibold">Skolyx</h3>
                        <p className="text-[#737491]">Suède</p>
                        <p className="text-[#737491]">Chaussures</p>
                    </div>
                </div>
                <div className="text-center mb-28">
                    <div className="border border-solid w-96 rounded-2xl bg-white flex justify-center">
                        <img src="/images/logo-companies.png" className="w-50 p-4"/>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-xl text-[#4a4b66] font-semibold">Jia Xiang Foods</h3>
                        <p className="text-[#737491]">Canada</p>
                        <p className="text-[#737491]">Alimentaire</p>
                    </div>
                </div>
                <div className="text-center">
                    <div className="border border-solid w-96 rounded-2xl bg-white flex justify-center">
                        <img src="/images/logo-companies.png" className="w-50 p-4"/>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-xl text-[#4a4b66] font-semibold">Swedron</h3>
                        <p className="text-[#737491]">Suède</p>
                        <p className="text-[#737491]">Drones</p>
                    </div>
                </div>
            </div>

      </section>
    );
}
export default Clients;