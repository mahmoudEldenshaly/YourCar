const NavLinks = ({ isSticky, navLinksState }) => {
  return (
    <ul
      className={`${
        navLinksState || 'hidden'
      } md:flex bg-primary z-[10000] text-white ${
        isSticky && 'md:text-primary'
      }  opacity-95 text-xl absolute flex flex-col w-[80%] items-center
       top-[88px] right-0 
      h-[calc(100vh-88px)]
        md:static  md:h-auto md:bg-inherit md:flex-row md:w-auto md:gap-11 md:text-2xl `}
    >
      <li
        className=' hover:bg-secondary  p-3 pl-10 w-full mt-56 md:mt-0
      md:hover:text-white md:py-2 md:px-3 md:w-auto md:rounded-lg'
      >
        Home
      </li>
      <li
        className=' hover:bg-secondary  p-3 pl-10 w-full
      md:hover:text-white md:py-2 md:px-3 md:w-auto md:rounded-lg  '
      >
        About
      </li>
      <li
        className=' hover:bg-secondary  p-3 pl-10 w-full
      md:hover:text-white md:py-2 md:px-3 md:w-auto md:rounded-lg'
      >
        Services
      </li>
      <li
        className=' hover:bg-secondary  p-3 pl-10 w-full 
       md:hover:text-white md:py-2 md:px-3 md:w-auto md:rounded-lg'
      >
        Contact
      </li>
    </ul>
  );
};
export default NavLinks;
