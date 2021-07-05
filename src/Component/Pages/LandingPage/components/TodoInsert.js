import React, { useState, useCallback } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./TodoInsert.css";
import Modal from "./Modal";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <div onClick={openModal} className="Plus">
        <div>
          <AiOutlinePlus />
        </div>
      </div>
      <Modal
        open={modalOpen}
        close={closeModal}
        header="스케줄 추가"
        onChange={onChange}
      ></Modal>
    </form>
  );
};

export default TodoInsert;
