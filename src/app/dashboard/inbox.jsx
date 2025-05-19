import React from "react";
import Image from "next/image";

const Inbox = () => {
  return (
    <div className="fixed bottom-3 right-3 w-60 h-54 rounded-2xl border border-gray-300 bg-white shadow-lg p-2 hidden sm:block">
      <Image
        src="/assets/dashboard.png"
        alt="Dashboard inbox image"
        width={500}
        height={500}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Inbox;
