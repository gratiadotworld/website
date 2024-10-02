import Image from "next/image";
import React from "react";

const BuiltOn = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <h2 className="text-2xl md:text-5xl font-semibold">#OnlyOn</h2>
          <Image
            src="/images/solana.svg"
            alt="Solana"
            width="280"
            height="10"
          />
        </div>
      </div>
    </div>
  );
};

export default BuiltOn;
