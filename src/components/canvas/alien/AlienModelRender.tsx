"use client";

import AlienModelView from "./AlienModelView";
import { useRef } from "react";

export const AlienModelRender = () => {
  const modelWrapperRef = useRef();
  const alienModelRef = useRef();

  return (
    <div className="w-full h-screen fixed top-0 left-0 pointer-events-none z-50 flex justify-center items-center">
      <div className="w-100 h-100 relative pointer-events-auto -mt-130">
        <AlienModelView
          modelWrapperRef={modelWrapperRef}
          modelRef={alienModelRef}
        />
      </div>
    </div>
  );
};
