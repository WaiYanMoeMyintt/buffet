import React, { useState } from "react";
import { sidebarLinks } from "../data/links.js";
import board from "../assets/plus.svg";
import { Button, Tooltip, Modal } from "flowbite-react";
import bg from "../assets/bg.avif";
import { createBoard } from "../features/Board.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Board = () => {
  const boardSlices = useSelector((state) => state.board.value);
  console.log(boardSlices);
  const [openModal, setOpenModal] = useState(false);
  const [boardName, setBoardName] = useState("");
  const [boardSrc, setBoardSrc] = useState("");
  const dispatch = useDispatch();

  const createBoards = (e) => {
    if(boardName !== "" && boardSrc !== ""){
      dispatch(createBoard({ id: Date.now(), name: boardName, src: boardSrc }));
      setOpenModal(false);
    }
  };

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
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="board_title w-full flex gap-4"
                >
                  <div className="board_title_input">
                    <label className="mb-8">
                      Board Title <span>*</span>
                    </label>
                    <input
                      className="text-white"
                      onChange={(e) => setBoardName(e.target.value)}
                      placeholder="eg- Read a book"
                      type="text"
                    />
                    <p className="mt-2">🏆Board title is required</p>
                  </div>
                  <div className="board_image_input">
                    <label className="mb-8">
                      Board Image SRC <span>*</span>
                    </label>
                    <input
                      className="text-white"
                      onChange={(s) => setBoardSrc(s.target.value)}
                      placeholder="eg-www.example.com"
                      type="text"
                    />
                    <p className="mt-2">🏆Board image is required</p>
                  </div>
                </form>
              </div>
            </Modal.Body>
            <Modal.Footer className="modal_footer ">
              <Button className="board_create" onClick={createBoards}>
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
        <div className="board_items  gap-4 ">
          {sidebarLinks.map((items) => (
            <div className="cursor-pointer board_items_content" key={items}>
              <div className="w-full flex items-center board_items_list  gap-2">
                <img
                  className="rounded mb-4"
                  src={items.src}
                  width={60}
                  height={60}
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
