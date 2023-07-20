import { BsMouse } from "react-icons/bs";

const FeatureCard = () => {
  return (
    <div className="feature block w-[30.7%] py-0 px-[15px]">
      <div className="feature-inner flex flex-col justify-start items-center pt-[18px] px-0 pb-[30px] mb-[23px] rounded-[7px]">
        <div className="icon-wrap flex relative min-h-[80px] items-start">
          <BsMouse size={"48px"} className="feature-icon text-[#f2c902]" />
          {/* <span className="block absolute top-[-4px] left-[79%] bg-[#0048a8] text-white text-[12px] py-1 px-[10px] rounded-[10px]">
            included
          </span> */}
        </div>
        <h4 className="text-white text-lg mt-3 mb-5">Virtual Coin Widgets</h4>
        <div className="feature-desc text-[#808080] max-w-[80%] leading-6 mb-0 text-[15px] block overflow-hidden text-center my-0 mx-auto">
          Virtual Coin Widgets included into Crypterio for free and offers 10
          widgets for your crypto-project with 1000+ cryptocurrencies. Exchange
          Rates are updated every 10 minutes.
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
