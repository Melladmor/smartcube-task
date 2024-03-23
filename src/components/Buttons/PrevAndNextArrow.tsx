type Props = {
  type: "next" | "prev";
  onClick?: () => void;
  className?: string;
};

const PrevAndNextArrow = (props: Props) => {
  return (
    <button
      className={`w-[41px] h-[41px] rounded-full px-[13px] py-[12px]  bg-white ${props.className}`}
      style={{
        boxShadow: "0px 3px 6px #00000029",
      }}
      onClick={props.onClick}>
      {props.type === "next" ? (
        <i className="fi fi-rr-angle-small-right font-bold text-black"></i>
      ) : (
        <i className="fi fi-rr-angle-small-left text-black"></i>
      )}
    </button>
  );
};

export default PrevAndNextArrow;
