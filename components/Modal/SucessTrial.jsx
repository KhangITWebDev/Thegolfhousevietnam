import React from "react";
import { Loader, Modal } from "rsuite";

function SucessTrial({ handleClose5, handleOpen4 }) {
  const [rows, setRows] = React.useState(0);
  const handleEntered = () => {
    setTimeout(() => setRows(80), 2000);
  };
  return (
    <Modal
      open={true}
      onClose={handleClose5}
      onEntered={handleEntered}
      onExited={() => {
        setRows(0);
      }}
      id="modal-notify"
    >
      <Modal.Header>
        <Modal.Title></Modal.Title>
        <button onClick={handleClose5}>
          <i className="fa-light fa-times"></i>
        </button>
      </Modal.Header>
      {rows ? (
        <Modal.Body>
          <i className="fa-regular fa-circle-check"></i>
          <h5>Đăng ký thành công</h5>
          <h6>
            Cảm ơn anh/chị đã quan tâm tới dịch vụ của The Golf House Vietnam.
            Chuyên viên tư vấn của chúng tôi sẽ liên hệ tới anh/chị trong thời
            gian sớm nhất.
          </h6>
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

export default SucessTrial;
