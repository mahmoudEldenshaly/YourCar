import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const CartDeleteBtn = ({ removeAll }) => {
  return (
    <button
      onClick={removeAll}
      className='bg-secondary text-white mt-auto mb-8
     text-xl rounded-md py-3 px-12'
    >
      Delete All {<FontAwesomeIcon icon={faTrashCan} className='ml-2' />}
    </button>
  );
};
export default CartDeleteBtn;
