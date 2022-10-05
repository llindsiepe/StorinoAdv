import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Jaqueline from "../../images/Jaqueline.png";
import LineTitle from "../../images/LineTitle.png";
import Add from "../../images/add.png";

import { Title, HeaderModal, TextModal, CloseModal } from "./styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 8,
};

export default function ModalAbout({ open, setOpen, information }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseModal>
            <button
              onClick={() => {
                setOpen(false);
              }}
            >
              <img src={Add} width="40rem" />
            </button>
          </CloseModal>
          <HeaderModal>
            <div>
              <img src={information.src} />
            </div>
            <Title>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={LineTitle} height="60rem" />
                <div style={{ marginLeft: "1rem" }}>
                  <h3>{information.name}</h3>
                  <h5>{information.text}</h5>
                </div>
              </div>
            </Title>
          </HeaderModal>
          <TextModal>
            <h6>{information.oab}</h6>
            <h6>{information.about}</h6>
            <h6>
              <b>Email:</b>
              {information.email}
            </h6>
          </TextModal>
        </Box>
      </Modal>
    </div>
  );
}
