
import './modal.css';

const colorBar = {
  incomplete:'red',
  complete:'green',
  inprogress:'orange',
  reviewing:'blue'
}

/* eslint-disable react/prop-types */
const Modal = ({ show, onClose, children ,status}) => {
  return (
    <div className={`modal ${show ? 'modal-show' : ''}`} >
      <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-white p-[35px] rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.3)]" style={{borderLeft:` 8px solid ${colorBar[status]}`}}>
        <span className="text-black cursor-pointer text-[32px] absolute top-0 right-[15px]" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;