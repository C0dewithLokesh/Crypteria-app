// eslint-disable-next-line react/prop-types
const SupportCard = ({ icon, heading, description }) => {
  return (
    <a href="#" className="block w-[30.5%] relative min-w-[463px]">
              <div className="stm_flipbox relative p-0 border-0">

                <div className="stm_flipbox__front">
                  <div className="inner">
                    <div className="inner-flex">
                      <div className="stm_iconbox__icon mt-[-10px] mb-[2px]">
                        {icon}
                      </div>
                      <div className="ib-title mt-6 text-lg font-normal">
                        {heading}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="stm_flipbox__back">
                  <div className="inner mbc">
                    <div className="inner-flex">
                      <div className="ib-title text-lg font-normal mt-[-5px] text-[#1d1e20]">
                        {heading}
                      </div>
                      <div className="ib-desc block max-w-[64%] text-[14px] font-light text-[#1d1e20] text-center mt-[28px] leading-[26px]">
                        {description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
  )
}

export default SupportCard