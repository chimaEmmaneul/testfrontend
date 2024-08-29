"use client";

const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-[1336px] h-full mx-auto px-2  md:px-6 ">
      {children}
    </main>
  );
};

export default MaxWidthWrapper;
