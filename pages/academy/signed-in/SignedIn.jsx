import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";
import { Button, Loader, Modal } from "rsuite";
import Swal from "sweetalert2";

function SignedIn(props) {
  const router = useRouter();
  const [rows, setRows] = React.useState(0);
  const handleEntered = () => {
    setTimeout(() => setRows(80), 2000);
  };
  const onLogout = () => {
    let timerInterval;
    Swal.fire({
      title: "",
      html: "Signing out! Plase await <span></span>s",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("span");
        timerInterval = setInterval(() => {
          b.textContent = Math.floor(Swal.getTimerLeft() / 1000);
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
        Cookies.set("user-login", JSON.stringify([]));
        Swal.fire({
          title: "Success",
          icon: "success",
          title: "Sign out success",
          showConfirmButton: false,
          timer: 1000,
          willClose: () => {
            router.push("/academy/sign-in");
          },
        });
      },
    });
  };
  return (
    <div className="container">
      <div
        style={{
          padding: "200px 0px",
        }}
      >
        <Modal
          open={true}
          onClose={() => router.push("/")}
          onEntered={handleEntered}
          onExited={() => {
            setRows(0);
          }}
        >
          <Modal.Header>
            <Modal.Title>{rows ? "Signed in" : "Plase wait..."}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {rows ? (
              <>
                <h5>You are signed in</h5>
                <div className="rs-custom-button d-flex justify-content-center">
                  <Button
                    onClick={() => router.push("/profile")}
                    appearance="primary"
                  >
                    View Profile
                  </Button>
                  <Button onClick={onLogout}>sign out</Button>
                </div>
              </>
            ) : (
              <div style={{ textAlign: "center" }}>
                <Loader size="md" />
              </div>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default SignedIn;
