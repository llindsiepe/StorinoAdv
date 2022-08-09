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
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 8,
};

export default function ModalAbout({ open, setOpen }) {
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
              <img src={Jaqueline} />
            </div>
            <Title>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={LineTitle} height="60rem" />
                <div style={{ marginLeft: "1rem" }}>
                  <h3>Jaqueline de Souza Henrique</h3>
                  <h5>Sócia</h5>
                </div>
              </div>
            </Title>
          </HeaderModal>
          <TextModal>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
              egestas diam commodo vel eget placerat nisl.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Et egestas diam commodo vel
              eget placerat nisl.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Et egestas diam commodo vel eget placerat
              nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
              egestas diam commodo vel eget placerat nisl.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Et egestas diam commodo vel
              eget placerat nisl.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Et egestas diam commodo vel eget placerat
              nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
              egestas diam commodo vel eget placerat nisl.
            </h6>
          </TextModal>
        </Box>
      </Modal>
    </div>
  );
}
