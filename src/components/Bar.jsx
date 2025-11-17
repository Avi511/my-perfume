import React from 'react';

function Bar() {
  const websiteName = "ParfumÉlégant";

  return (
    <div className="w-full h-40 overflow-hidden py-15  bg-linear-to-r from-black via-[#001F2A] to-[#004359]">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="font-serif text-5xl font-bold tracking-wider text-white">
                {websiteName}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Bar;