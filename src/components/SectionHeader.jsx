// eslint-disable-next-line react/prop-types
const SectionHeader = ({ heading, info, infoStyle }) => {
  return (
    <>
      <h2 className="text-center text-[32px] leading-[42px] mb-10">
        {heading}
      </h2>
      <div className={`${infoStyle} info-desc block overflow-hidden text-center my-0 mx-auto max-w-[66%] text-lg text-[#26211d] leading-9`}>
        {info}
      </div>
    </>
  );
};

export default SectionHeader;
