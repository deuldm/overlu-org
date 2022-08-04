import React, { useState } from "react";
import "./index.css";
import Modal from "./Modal";
import Navbar from "./Navbar";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button onClick={() => setOpenModal(true)} className="modalButton">
        RoadMap
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <Navbar />
    </div>
  );
}

export default App;
