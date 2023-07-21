

// eslint-disable-next-line react/prop-types
const SectionSideInfo = ({ heading, infoOne, infoTwo }) => {
  return (
  <div className="left flex w-2/4 flex-col">
    <h2 className="left-heading mb-4 pt-[33px] mt-[56px] w-full text-left text-[30px] relative">
      {heading}
    </h2>
    <div className="text-left text-lg text-[#26211d] leading-9 mb-[5px] pt-[22px] pr-[68px] pb-0 pl-0">
      {infoOne}
    </div>
    <div className="text-base text-[#595959] leading-[30px] pt-[22px] pr-[68px]">
      {infoTwo}
    </div>
  </div>
  );
};

export default SectionSideInfo;
