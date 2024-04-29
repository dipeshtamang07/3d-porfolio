import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-10 h-10 border-2 border-opacity-50 border-blue-500 border-t-500 rounded-xl animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;
