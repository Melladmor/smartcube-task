import React from "react";

type Props = {
  type: "next" | "prev";
  onClick: () => void;
  className?: string;
};

const NextAndPrevButton = (props: Props) => {
  return (
    <button
      className={`w-[48px] h-[48px] rounded-full px-[13px] py-[15px]  bg-white ${props.className}`}
      style={{
        boxShadow: "0px 3px 6px #00000029",
      }}
      onClick={props.onClick}>
      {props.type === "next" ? (
        <i className="fi fi-rr-arrow-right text-purple"></i>
      ) : (
        <i className="fi fi-rr-arrow-left text-purple"></i>
      )}
    </button>
  );
};

export default NextAndPrevButton;
