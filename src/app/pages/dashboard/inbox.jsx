import React from "react";
import Image from "next/image";

export const Inbox = () => {
  return (
    <div className="fixed bottom-3 w-60 h-54 rounded-2xl border border-gray-300 mx-2 mt-5 justify-end ">
      <Image
        src="/assets/dashboard.png"
        alt="Dashboard hero image"
        width={500}
        height={500}
        className=""
      />
    </div>
  );
};

export default Inbox;
