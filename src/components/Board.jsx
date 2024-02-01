import React, { useState } from "react";
import { sidebarLinks } from "../data/links.js";
import board from "../assets/plus.svg";
import { Button, Tooltip, Modal } from "flowbite-react";
import bg from "../assets/bg.avif";
import { colorTheme } from "../data/color.js";
import { color } from "framer-motion";
const Board = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="board-container py-4 px-4 ">
      <div className="board_content">
        <div className="board_title mb-4 flex justify-between items-center">
          <h3>Board</h3>
          <Tooltip placement="right" content="create">
            <img
              className="cursor-pointer  create"
              src={board}
              alt="board"
              width={30}
              height={30}
              onClick={() => setOpenModal(true)}
            />
          </Tooltip>
          <Modal
            className=""
            show={openModal}
            onClose={() => setOpenModal(false)}
          >
            <Modal.Header className="modal_header">
              <span className="text-white">Create Board</span>
            </Modal.Header>
            <Modal.Body className="modal_body">
              <div className="space-y-6">
                <div className="bg_logo flex w-full justify-center items-center ">
                  <div className="board_img relative">
                    <img className="rounded-lg" src={bg} alt="bg" />
                    <p>Change Cover</p>
                  </div>
                </div>
                <form className="board_title w-full">
                  <label className="mb-8">Board Title <span>*</span></label>
                  <input type="text" />
                  <p className="mt-2">🏆Board title is required</p>
                </form>
              </div>
            </Modal.Body>
            <Modal.Footer className="modal_footer ">
              <Button
                className="board_create"
                onClick={() => setOpenModal(false)}
              >
                Create
              </Button>
              <Button
                className="cancel"
                color="gray"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <hr />
        <div className="board_items mt-4 gap-4 py-4 px-2.5">
          {sidebarLinks.map((items) => (
            <div className="cursor-pointer" key={items}>
              <div className="w-full flex items-center gap-2">
                <img
                  className="rounded mb-4"
                  src={items.src}
                  width={70}
                  height={70}
                  alt={items.name}
                />
                <p className="text-center text-white">{items.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
