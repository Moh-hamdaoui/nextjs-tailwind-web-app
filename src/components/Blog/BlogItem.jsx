import Image from "next/image";
import React from "react";

function BlogItem ({title, date, iconSrc}) {
  return (
    <div className="flex items-center border border-solid hover:border-[#a3c756] hover:shadow-lg bg-white rounded-2xl mb-4 shadow-sm w-full h-36 justify-between">
      <button className="w-72 h-36 bg-[#e6e6e6] rounded-l-2xl overflow-hidden flex items-center justify-center">
        <Image src={iconSrc} alt={title} width={64} height={64} />
      </button>
      <button className="ml-4 flex-1">
        <a href="" className="text-xl font-semibold text-[#4a4b66] hover:text-[#a3c756] text-left block">{title}</a>
      </button>
      <button className="flex items-center text-[#737491] text-sm ml-2 mt-16 mr-4">
        <span className="hover:text-black">{date}</span>
      </button>
    </div>
  );
}

export default BlogItem;
