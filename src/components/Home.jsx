import ContainerWrapper from "./ContainerWrapper";
import logo from "../assets/logo.png";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillPlayFill, BsMouse } from "react-icons/bs";
import { BiPlayCircle } from "react-icons/bi";
import { RiCustomerService2Line } from "react-icons/ri";

import demo1 from "../assets/demo1.jpg";
import countdownBgImg from "../assets/countdown-2.png";
import nftPages from "../assets/nft-pages.png";
import contractOne from "../assets/contract-1.png";
import contractTwo from "../assets/contract-2.png";
import SupportCard from "./SupportCard";
import FeatureCard from "./feature/FeatureCard";
import SectionHeader from "./SectionHeader";
import HeaderImg from "./headersLogo/headerImg";
import headOne from '../assets/head-1.png'
import headTwo from '../assets/head-2.png'
import headFive from '../assets/head-5.png'

const Home = () => {
  return (
    <>
      {/* Header */}
      <div className="header block py-[25px] px-0 bg-[#1d1e20]">
        <ContainerWrapper style={"flex flex-nowrap justify-between"}>
          <div className="logo-wrap">
            <div className="logo">
              <img src={logo} alt="logo" width={"196px"} height={"50px"} />
            </div>
          </div>

          <div className="menu-wrap flex flex-nowrap items-center justify-start mt-[-2px]">
            <ul className="flex flex-nowrap mr-[30px] list-none">
              <li>
                <a
                  href="#demos"
                  className="text-white px-[24px] text-base transition-[all 0.1s ease-in] hover:text-[#f2c902]"
                >
                  Demos
                </a>
              </li>

              <li>
                <a
                  href="#advantages"
                  className="text-white px-[24px] text-base transition-[all 0.1s ease-in] hover:text-[#f2c902]"
                >
                  Advantages
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-white px-[24px] text-base transition-[all 0.1s ease-in] hover:text-[#f2c902]"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-white px-[24px] text-base transition-[all 0.1s ease-in] hover:text-[#f2c902]"
                >
                  Support
                </a>
              </li>
            </ul>

            <div className="btn-buy inline-block bg-[#0048a8] rounded-[30px] transition ease-in delay-[0.1s]">
              <a
                href="#"
                className=" block overflow-hidden py-[17px] px-[47px] text-white text-base"
              >
                Live Preview
              </a>
            </div>
          </div>
        </ContainerWrapper>
      </div>

      {/* Banner */}
      <div className="banner-wrap block overflow-hidden h-[700px] bg-[#ffc40c] px-20 pt-[10px] pb-[50px]">
        <ContainerWrapper style={""}>
          <div className="earth-wrap block w-full text-center bg-transparent">
            <canvas width={"740px"} height={"740px"}></canvas>
          </div>

          <div className="banner-text-wrap flex flex-col flex-nowrap justify-start items-center overflow-hidden w-full h-full absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
            <h1 className="title block relative max-w-[700px] text-[48px] leading-[60px] color-[#1d1e20] text-center mt-[207px] mb-[75px] pt-[28px] tracking-[1.3px]">
              ICO, NFT and Cryptocurrency WordPress Theme for your Crypto
              Business
            </h1>

            <div className="btn-wrap-border heading-font block pt-[50px] w-[300px] pl-4 relative">
              <a href="#">
                <div className="play-youtube">
                  <AiFillPlayCircle
                    color="#0048a8"
                    className="block w-[110px] h-[110px] absolute top-2/4 left-2/4 z-[39] -translate-x-2/4 -translate-y-2/4"
                  />
                  <BsFillPlayFill
                    color="white"
                    size={"74px"}
                    className="absolute top-[-22%] left-[51%] z-[39] -translate-x-2/4 -translate-y-2/"
                  />
                </div>
              </a>
            </div>
          </div>
        </ContainerWrapper>
      </div>

      {/* Demos */}
      <div
        className="demo-wrap block overflow-hidden w-full relative pb-[106px]"
        id="demos"
      >
        <ContainerWrapper style={"pt-[100px]"}>
          <h2 className="mb-10 text-[36px]">Live Demos</h2>

          <div className="desc block overflow-hidden text-center mx-auto max-w-[66%] mb-[48px] text-lg leading-[36px]">
            Crypterio is Cryptocurrency Investments, NFT and ICO Consulting
            WordPress theme, that perfectly fits for any type of
            crypto-consulting project, including ICO Agencies, Bitcoin Traders,
            and private-practice ICO Advisors.
          </div>

          <div className="demo-list -mx-[15px] flex flex-row flex-wrap justify-center items-start">
            <a
              href="#"
              className="demo-container block px-[15px] max-w-[30.7%] mb-10"
            >
              <div className="demo">
                <div className="img block w-full overflow-hidden rounded-[10px] relative top-0 shadow-md">
                  <span className="new heading-font">New!</span>
                  <img
                    src={demo1}
                    alt="demo-1"
                    className="block w-full h-auto"
                  />
                </div>
                <h3 className="overflow-hidden text-center text-lg text-[#26211d] mt-[25px] leading-[22px]">
                  NFT Landing Page
                </h3>
              </div>
            </a>
            <a
              href="#"
              className="demo-container block px-[15px] max-w-[30.7%] mb-10"
            >
              <div className="demo">
                <div className="img block w-full overflow-hidden rounded-[10px] relative top-0 shadow-md">
                  <span className="popular heading-font">Popular</span>
                  <img
                    src={demo1}
                    alt="demo-1"
                    className="block w-full h-auto"
                  />
                </div>
                <h3 className="overflow-hidden text-center text-lg text-[#26211d] mt-[25px] leading-[22px]">
                  NFT Landing Page
                </h3>
              </div>
            </a>
            <a
              href="#"
              className="demo-container block px-[15px] max-w-[30.7%] mb-10"
            >
              <div className="demo">
                <div className="img block w-full overflow-hidden rounded-[10px] relative top-0 shadow-md">
                  <img
                    src={demo1}
                    alt="demo-1"
                    className="block w-full h-auto"
                  />
                </div>
                <h3 className="overflow-hidden text-center text-lg text-[#26211d] mt-[25px] leading-[22px]">
                  NFT Landing Page
                </h3>
              </div>
            </a>
          </div>
        </ContainerWrapper>
      </div>

      {/* Special */}
      <div
        className="specia-wrap block overflow-hidden relative pt-[50px] bg-[#1d1e200d]"
        id="advantages"
      >
        <div className="specials-bg-text top-[137px] tracking-[40px  font-semibold">
          SPECIALS
        </div>

        <ContainerWrapper style={""}>
          <div className="specials mb-[48px]">
            <h2 className="mb-[40px] text-[36px] leading-[42px]">
              Crypterio Specials
            </h2>
            <div className="desc block overflow-hidden text-center mx-auto max-w-[66%] text-lg leading-[36px]">
              Crypterio is Cryptocurrency Investments, NFT and ICO Consulting
              WordPress theme, that perfectly fits for any type of
              crypto-consulting project, including ICO Agencies, Bitcoin
              Traders, and private-practice ICO Advisors.
            </div>
          </div>

          <div className="countdown-wrap mb-[300px] flex flex-nowrap justify-start items-start">
            <div className="left block w-2/4">
              <h2 className="left-heading text-[30px] text-left overflow-hidden relative mt-[74px] mb-10 w-full leading-[36px]">
                Advanced ICO Launching Countdown
              </h2>

              <div className="desc block mb-[28px] pr-[15px] mx-auto text-lg leading-[36px]">
                ICO development agencies and Blockchain technology consulting
                business can utilize tailor-made special features like ICO
                ticker module ready for ICO gateway integration.
              </div>

              <div className="text-[#595959] block mb-[28px] pr-[15px] mx-auto text-base leading-[30px]">
                Now you’re ready to pack your professional website with great
                content that will engage and inspire potential customers. Choose
                how you want to display your services and case studies, for
                maximum impact into your cryptocurrency business.
              </div>
            </div>

            <div className="right w-2/4">
              <div className="img block pl-20 w-full mx-auto relative">
                <img
                  src={countdownBgImg}
                  className="block mx-auto absolute top-10 -right-[75px] z-0"
                  alt="countdownBgImg"
                />
              </div>
            </div>
          </div>
        </ContainerWrapper>

        {/* NFT Pages */}
        <div className="nft-wrap bg-white -mb-[147px]">
          <ContainerWrapper style={""}>
            <div className="nft-wrap-inner overflow-hidden rounded-[40px] bg-[#d3ff5c] flex -translate-y-[200px]">
              <div className="left-side py-[32px] px-[60px] max-w-[610px] w-full box-content">
                <h2 className="nft-heading text-left text-[30px] text-[#26211d]">
                  Collect, run and work with NFT
                </h2>
                <span className="desc text-lg leading-8 text-[#26211d] block my-[10px]">
                  Immerse yourself in the world of non-fungible tokens in an
                  exclusive demo by taking the creative widgets and a designed
                  layout with glossy animations.
                </span>
                <p className="text-base leading-8 text-[#595959]">
                  Crypterio gives you a prime solution for operating with NFT,
                  which, briefly described, are unique cryptographic tokens that
                  cannot be traded or exchanged at equivalency. With NFT demo
                  you will engage more audience and get benefits with ease.
                </p>
                <a href="#" className="stm-btn mt-[30px] inline-block">
                  <span>Live Preview</span>
                </a>
              </div>

              <div className="right-side h-[400px] w-[380px]">
                <img
                  src={nftPages}
                  className="h-full object-contain"
                  alt="nftPages"
                />
              </div>
            </div>
          </ContainerWrapper>
        </div>

        {/* Converter Wrap */}
        <div className="converter-wrap bg-white pt-10 pb-[94px]">
          <ContainerWrapper style={'flex flex-nowrap justify-start items-start flex-row-reverse'}>
            <div className="left block w-2/4 mt-[11px]">
              <h2 className="left-heading text-[30px] text-left overflow-hidden relative mt-[74px] mb-10 w-full leading-[36px]">
                ICO Whitelist Pre-Signup
                <br />
                and Smart Contract Integration
              </h2>

              <div className="desc block mb-[28px] pr-[15px] mx-auto text-lg leading-[36px]">
                Crypterio is ready for a Smart Contract and an ICO Whitelist Pre-Signup integration through CSV/XML compatible standard to manage token distribution.
              </div>

              <div className="text-[#595959] block mb-[28px] pr-[15px] mx-auto text-base leading-[30px]">
                A genuine whitelisting implies that ICO participants can effortlessly and securely register, pass KYC/AML check, get approved, and get listed on a ICO Pre-Signup Whitelist to purchase tokens during the Initial Coin Offering. 
                <br />
                <br />
                Just integrate your Smart Contract with a Whitelist through CSV/XML readable format to automate token distribution to whitelisted ICO applicants.
              </div>

              <div className="btn-wrap pt-[11px] max-w-[200px] pl-4 block">
                <a href="#" className="watch-video">
                  <BiPlayCircle size={'24px'} className="mr-[14px]" /> Watch Video
                </a>
              </div>
            </div>

            <div className="right block w-2/4">
              <div className="img-wrap relative block w-full">
                <div className="img block pl-[13px] pt-[17px] max-w-full -left-[113px] top-[49px] absolute">
                  <img src={contractOne} className="mx-auto" alt="" />
                </div>

                <div className="block w-full pl-[13px] pt-[17px] max-w-full ml-20 mt-[6px] absolute">
                  <img src={contractTwo} alt="" />
                </div>
              </div>
            </div>
          </ContainerWrapper>
        </div>

      </div>

      {/* headers logo */}
      <div className="headers-wrap block overflow-hidden relative pt-[101px] pb-[57px] bg-white" id="headers">
        <div className="specials-bg-text top-[137px] leading-[40px] text-[#1d1e200d] text-[290px]">HEADERS</div>
        <ContainerWrapper style={''}>
          <SectionHeader 
            heading={'8+ Ready Headers'} 
            info={' ... and unlimited Headers with Header Builder.'}
            infoStyle={'mb-[48px]'}
          />

          <div className="bottom block my-0 mx-[-15px]">
            <HeaderImg headerImg={headOne} />
            <HeaderImg headerImg={headTwo} />
            <HeaderImg headerImg={headFive} />
            <HeaderImg headerImg={headOne} />
          </div>
        </ContainerWrapper>
      </div>

      {/* Features */}
      <div className="features-wrap block w-full overflow-hidden bg-[#1d1e20] relative pt-[100px] pb-[58px]" id="features">
        <div className="features-bg-text absolute top-[240px] left-[50%] translate-x-[-50%] text-[290px] text-[#ffffff05] font-semibold leading-[46px]">FEATURES</div>
        <ContainerWrapper style={''}>
          <h2 className="mb-10 text-white text-4xl leading-[42px]">More Features</h2>
          <div className="block overflow-hidden text-center my-0 mx-auto max-w-[66%] mb-[53px] text-white text-[18px] leading-9">
            Crypterio WordPress theme is in tune with all devices, browsers and platforms, retina ready and comes with Visual Composer as page builder for free. All customization options are available on the Front End editor and no coding skill required to create or edit content.
          </div>

          <div className="features flex flex-wrap my-0 mx-[-15px]">

            <div className="feature block w-[30.7%] py-0 px-[15px]">
              <div className="feature-inner flex flex-col justify-start items-center pt-[18px] px-0 pb-[30px] mb-[23px] rounded-[7px]">
                <div className="icon-wrap flex relative min-h-[80px] items-start">
                  <BsMouse size={'48px'} className="feature-icon text-[#f2c902]" />
                  <span className="block absolute top-[-4px] left-[79%] bg-[#0048a8] text-white text-[12px] py-1 px-[10px] rounded-[10px]">included</span>
                </div>
                <h4 className="text-white text-lg mt-3 mb-5">Virtual Coin Widgets</h4>
                <div className="feature-desc text-[#808080] max-w-[80%] leading-6 mb-0 text-[15px] block overflow-hidden text-center my-0 mx-auto">
                  Virtual Coin Widgets included into Crypterio for free and offers 10 widgets for your crypto-project with 1000+ cryptocurrencies. Exchange Rates are updated every 10 minutes.
                </div>
              </div>
            </div>

            <FeatureCard />
            <FeatureCard />
          </div>

         
        </ContainerWrapper>
      </div>

      {/* Support */}
      <div className="info-block block mt-[13px] relative pt-[85px] px-[0] pb-[7px]" id="support">
        <div className="support-bg-text top-[223px] tracking-[40px]">
          SUPPORT
        </div>
        <ContainerWrapper style={''}>
          <SectionHeader heading={'Limitless Support'} info={'We care about our customers and provide free 24/7 support. You can ask your questions using our Live Chat or Ticket System.'} />

          <div className="info-wrap flex justify-around bg-cover pt-12 px-0 pb-[95px] relative z-[2] gap-6">
            <SupportCard
              icon={<RiCustomerService2Line size={'64px'} />}
              heading={'24/7 Elite Support'}
              description={'Our exceptional support team is always on hand and ready to help. You can use Live Chat or our Ticket system to resolve your issues in a flash'}
            />
            <SupportCard
              icon={<RiCustomerService2Line size={'64px'} />}
              heading={'24/7 Elite Support'}
              description={'Our exceptional support team is always on hand and ready to help. You can use Live Chat or our Ticket system to resolve your issues in a flash'}
            />
            <SupportCard
              icon={<RiCustomerService2Line size={'64px'} />}
              heading={'24/7 Elite Support'}
              description={'Our exceptional support team is always on hand and ready to help. You can use Live Chat or our Ticket system to resolve your issues in a flash'}
            />
          </div>
        </ContainerWrapper>

      </div>
    </>
  );
};

export default Home;
