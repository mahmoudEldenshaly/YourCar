const Logo = ({ logo }) => {
  return (
    <img
      src={logo}
      alt='logo'
      className='w-[40px] md:w-[80px] h-[40px] md:h-[80px] '
    />
  );
};
export default Logo;
