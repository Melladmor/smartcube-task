import React from "react";

type Props = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Drawer({ children, isOpen, onClose, title }: Props) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }>
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " -translate-x-full ")
        }>
        <div
          className="h-[50px] py-[12px] px-6 flex justify-between border-b border-border-main relative cursor-pointer"
          onClick={onClose}>
          <h2 className="text-[16px] font-bold text-black">{title}</h2>
          <i className="fi fi-ss-circle-xmark text-2xl text-icons-light"></i>
        </div>

        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          {children}
        </article>
      </section>
    </main>
  );
}
