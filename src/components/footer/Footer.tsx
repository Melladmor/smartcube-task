const Footer = () => {
  return (
    <div className="lg:px-[112px] md:px-[20px] sm:px-[20px] xs:px-[20px] fixed bottom-0 left-0 lg:h-[96px] md:h-[86px] sm:h-[70px] xs:h-[70px] w-full bg-white flex lg:justify-end md:justify-center sm:justify-center xs:justify-center items-center">
      <button
        className="bg-purple text-white redouned-[28px] lg:h-[56px] md:h-[46px] sm:h-[36px] xs:h-[26px] py-[19px] flex items-center justify-center gap-[12px] lg:w-[407px] md:w-[300px] sm:w-[250px] xs:w-[200px] 
      lg:rounded-[28px] md:rounded-[20px] sm:rounded-[16px] xs:rounded-[10px]
      ">
        <p>Payment</p>
        <i className="fi fi-rr-arrow-right text-white w-[40px] h-[19px] lg:text-[19px] md:lg:text-[16px] sm:lg:text-[14px] xs:lg:text-[14px]"></i>
      </button>
    </div>
  );
};

export default Footer;
