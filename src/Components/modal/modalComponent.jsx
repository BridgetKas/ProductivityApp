
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
      <div className="modal-content" style={{borderLeft:` 8px solid ${colorBar[status]}`}}>
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;