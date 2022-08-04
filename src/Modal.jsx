import React, { useState, useRef } from "react";
import overlu from "./overlu.png";
import nft from "./nft.jpg";
import DNA from "./DNA.jpg";
import box from "./box.jpg";
import lu from "./lu.jpg";

import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div className="maincontnair">
      <div onClick={onClose} className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
            <img src={overlu} alt="/" />
          </Button>
          <Overlay target={target.current} show={show} placement="right">
            {({ placement, arrowProps, show: _show, popper, ...props }) => (
              <div
                {...props}
                style={{
                  position: "flex",
                  backgroundColor: "rgba(255,165,0)",

                  color: "white",

                  borderRadius: 1,

                  ...props.style
                }}
              >
                <img src={lu} alt="/" />
              </div>
            )}
          </Overlay>

          <img src={DNA} alt="/" />

          <img src={box} alt="/" />

          <img src={nft} alt="/" />
          <div className="modalRight">
            <p className="closeBtn" onClick={onClose}>
              X
            </p>
            <div className="content"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
