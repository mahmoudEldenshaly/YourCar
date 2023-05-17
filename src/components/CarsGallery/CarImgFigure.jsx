const CarImgFigure = ({ carImg, name }) => {
  return (
    <figure className='relative group '>
      <img src={carImg} alt='name' className='h-full w-full object-cover' />
      <figcaption
        className='group-hover:opacity-100 w-full h-full 
      flex flex-col justify-center items-center gap-4 opacity-0 
       bg-black bg-opacity-80 absolute top-0 left-0'
      >
        <h5 className='md:text-2xl'>{name}</h5>
        <p className='hidden md:block'>
          Disruptive, avant-garde, futuristic,
          <br />
          innovative. Contact
        </p>
        <button className='rounded-sm border border-gray-50 hover:bg-secondary px-2 md:scale-125'>
          Contact
        </button>
      </figcaption>
    </figure>
  );
};

export default CarImgFigure;
