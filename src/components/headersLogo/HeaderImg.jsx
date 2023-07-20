// eslint-disable-next-line react/prop-types
const HeaderImg = ({ headerImg}) => {
  return (
    <div className="img block w-[25%] relative overflow-hidden mb-10 float-left">
      <div className="img-wrap block py-0 px-[15px]">
        <img src={headerImg} className='block w-full relative' alt='' />
      </div>
    </div>
  )
}

export default HeaderImg;