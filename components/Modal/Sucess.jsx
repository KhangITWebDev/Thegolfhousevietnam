import React from "react";
import { Loader, Modal } from "rsuite";

function Sucess({ handleClose3, handleOpen4 }) {
  const [rows, setRows] = React.useState(0);
  const handleEntered = () => {
    setTimeout(() => setRows(80), 2000);
  };
  return (
    <Modal
      open={true}
      onClose={handleClose3}
      onEntered={handleEntered}
      onExited={() => {
        setRows(0);
      }}
      id="modal-notify"
    >
      <Modal.Header>
        <Modal.Title></Modal.Title>
        <button onClick={handleClose3}>
          <i className="fa-light fa-times"></i>
        </button>
      </Modal.Header>
      {rows ? (
        <Modal.Body>
          <i className="fa-regular fa-circle-check"></i>
          <h5>Chúc mừng bạn đã đặt lịch thành công</h5>
          <h6>Vui lòng kiểm tra lại thông tin của bạn!</h6>
          <div className="button" onClick={handleOpen4}>
            <button>Kiểm tra</button>
          </div>
        </Modal.Body>
      ) : (
        <div style={{ textAlign: "center" }}>
          <Loader size="md" />
        </div>
      )}
    </Modal>
  );
}

export default Sucess;
