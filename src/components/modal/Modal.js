import { useRef } from "react";
import "./modal.scss";
export const Modal = ({ title, modalState, setModal, children }) => {
  const modalRef = useRef(null);
  const buttonRef = useRef(null);
  const HandleEdit = (e) => {
    if (e.target === modalRef.current) {
      setModal(false);
    }
  };
  const HandleEditBtn = (e) => {
    if (e.target === buttonRef.current) {
      setModal(false);
    }
  };
  return (
    <>
      {modalState && (
        <div ref={modalRef} onClick={HandleEdit} className="modal">
          <div className="modal-inner">
            <div className="modal-end">
              <h3>{title}</h3>
              <button
                ref={buttonRef}
                onClick={HandleEditBtn}
                className=" btn btn-danger"
              >
                Х
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
