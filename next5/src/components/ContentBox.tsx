import React from "react";

const ContentBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex items-center bg-cyan-100 border-2 border-blue-500 mx-16 my-10 p-6 justify-center flex-col rounded-xl shadow-lg shadow-blue-300">
        {children}
      </div>
    </>
  );
};

export default ContentBox;
