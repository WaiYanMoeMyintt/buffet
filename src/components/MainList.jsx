import React, { useState } from "react";
import list from "../assets/list.svg";
import door from "../assets/door.svg";
import create_btn from "../assets/plus.svg";
import { Button, Tooltip, Alert, Toast, Modal } from "flowbite-react";
import cancel from "../assets/cancel.svg";
import send from "../assets/send.svg";
import trash from "../assets/trash.svg";
import { create, deleteTask } from "../features/Task";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const MainList = () => {
  const date = new Date().getDate();
  const day = new Date().toString();
  const splitDay = day.split(" ")[0];

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toast, setToast] = useState(false);
  const tasks = useSelector((state) => state.mainTask.value);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const createTask = (event) => {
    event.preventDefault();
    if (title && description) {
      dispatch(
        create({
          id: Date.now(),
          name: title,
          description: description,
          complete: false,
        })
      );
      setTitle("");
      setDescription("");
    } else {
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 2500);
    }
  };
  const deleteTaskList = (taskId) => {
    dispatch(deleteTask({ id: taskId }));
  };
  return (
    <div className="list_content mt-6 py-0 px-4">
      <div className="list_content_header mb-6">
        <div className="list_menu flex justify-between items-center flex-1">
          <div className="door_menu cursor-pointer">
            <img src={door} alt="door" width={25} height={25} />
          </div>
          <div className="list_menu cursor-pointer">
            <img src={list} alt="list" width={25} height={25} />
          </div>
        </div>
      </div>
      <div className="list_content_date mt-4">
        <h3 className="text-white text-2xl mb-4">Today</h3>
        <div className="schedule_list flex gap-8">
          <div className="date flex gap-5 text-white">
            <p>
              {splitDay} {date}{" "}
            </p>
          </div>
          <div className="task_checker flex  gap-5 text-white">
            <div className="overTask">
              <p>
                Created <span> {tasks.length}</span>
              </p>
            </div>
            <div className="completeTask">
              <p>
                Complete <span> 0</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={createTask} className={!show ? "hidden" : "block"}>
        <div className="task_name">
          <input
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Task name"
            className="text-white"
          />
          <input
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            placeholder="Description"
            className="text-slate-300"
          />
        </div>
        <hr />
        <div className="task_btn flex justify-between items-center gap-4 flex-1 py-4 px-0">
          <Tooltip content="cancel">
            <img
              src={cancel}
              alt="cancel"
              className="cursor-pointer cancel"
              width={30}
              height={30}
              onClick={() => setShow(false)}
            />
          </Tooltip>
          <Tooltip content="create">
            <img
              src={send}
              alt="send"
              className="cursor-pointer create"
              width={30}
              height={30}
              onClick={createTask}
            />
          </Tooltip>
        </div>
      </form>
      <div className="main_task_container mt-4 ">
        {tasks.map((items, index) =>
          tasks.length === 0 ? (
            <div></div>
          ) : (
            <Link
              to={`/${items.id}`}
              key={index}
              className="main_task_content flex"
              onClick={() => setOpenModal(true)}
            >
              <div className="task_title">
                <h3>{items.name}</h3>
                <p>{items.description}</p>
              </div>
            </Link>
          )
        )}
      </div>
      <div onClick={() => setShow(true)} className="create_btn cursor-pointer">
        <Tooltip content="Create">
          <img src={create_btn} alt="create" width={40} height={40} />
        </Tooltip>
      </div>
      {toast ? (
        <Toast className="toast">
          <div className="text-sm font-normal text-white">
            Task input are required.
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <a
              href="#"
              className="rounded-lg p-1.5 text-sm font-medium text-cyan-600  dark:hover:bg-gray-700"
            >
              Undo
            </a>
            <Toast.Toggle />
          </div>
        </Toast>
      ) : (
        <div></div>
      )}
      <Modal className="" show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="modal_header">
          <span className="text-white">Edit Task</span>
        </Modal.Header>
        <Modal.Body className="modal_body ">
          <div className="space-y-6">
            <div className="bg_logo flex w-full justify-center items-center "></div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="update_title w-full flex gap-4 border-none outline-none bg-transparent"
            >
              <div className="update_title_input flex flex-col gap-6">
                <div className="update_task_name">
                  <label className="mb-4 text-white">
                    Update Task Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    className="text-white mt-4 "
                    placeholder="Plan"
                    type="text"
                  />
                </div>
                <div className="update_task_description">
                  <label className="mb-4 text-white">
                    Update Task Description{" "}
                    <span className="text-rose-600">*</span>
                  </label>
                  <input
                    className="text-white mt-4"
                    placeholder="eg- Read a book"
                    type="text"
                  />
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal_footer ">
          <Button className="board_create">Update</Button>
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
  );
};

export default MainList;
