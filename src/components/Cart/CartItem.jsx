import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({
  name,
  carType,
  img,
  amount,
  onAdd,
  onRemove,
  onRemoveAllAmount,
}) => {
  return (
    <div className='bg-white w-full flex justify-between p-3'>
      <div className='flex flex-col gap-4'>
        <div className='title'>
          <p className='font-bold text-xl text-secondary'>{carType}</p>
          <p className=''>{name}</p>
        </div>

        <div className='text-white text-2xl flex gap-2 items-center'>
          <button
            onClick={onRemove}
            className='bg-secondary rounded-l-md w-8 h-7 flex items-center justify-center'
          >
            -
          </button>
          <span className='text-primary'>{amount}</span>
          <button
            onClick={onAdd}
            className='bg-secondary rounded-r-md w-8 h-7 flex items-center justify-center'
          >
            +
          </button>
          <button onClick={onRemoveAllAmount}>
            {<FontAwesomeIcon icon={faTrashCan} className='text-primary' />}
          </button>
        </div>
      </div>
      <div className='w-[150px]'>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};
export default CartItem;
