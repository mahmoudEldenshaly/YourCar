const Title = ({ title, ghostTitle, titleColor }) => {
  return (
    <div className='text-center pb-8 font-[lora]'>
      <span
        className='ghost-title text-[40px] font-extrabold text-ghost
        md:text-7xl xl:text-8xl 
        '
      >
        {ghostTitle}
      </span>
      <h3
        className={`'${titleColor} relative -top-8 font-bold text-3xl lg:text-5xl xl:text-6xl`}
      >
        {title}
      </h3>
    </div>
  );
};
export default Title;
