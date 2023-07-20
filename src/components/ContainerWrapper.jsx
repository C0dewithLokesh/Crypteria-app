// eslint-disable-next-line react/prop-types
const ContainerWrapper = ({ children, style }) => {
  return (
    <div className={`content-wrapper w-[1110px] max-w-full my-0 mx-auto relative ${style}`}>{children}</div>
  )
}

export default ContainerWrapper;