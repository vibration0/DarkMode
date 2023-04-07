import './App.css';
import { useState } from 'react';
import Modal from './components/Modal';

function App() {

  const [modal, setModal] = useState(true);
  const closeModal = () => {
    //닫는 상태 만들기
    setModal(false);
    }
  
  return (
    <div className="App">
     <Modal modal={modal}
     closeModal={closeModal}/>
    </div>
  );
}

export default App;
