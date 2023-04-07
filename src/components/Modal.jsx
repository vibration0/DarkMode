import React from 'react'

 function Modal(props) {
    const {modal, closeModal } = props;
  return (
    <div className = {modal ? 'modal show':'modals'}>
        <h1>Modal</h1>
        <p>공지사항 입니다</p>
    <button onClick={closeModal}>닫기</button>
  </div>
  )
}
export default Modal;