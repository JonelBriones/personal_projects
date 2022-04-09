
import React, {useState} from'react';
import Form from './Components/Form';
import Display from './Components/Display';
import styles from './style.module.css';
function App() {
  //pass in state from form
  const [userList,setUserList] = useState([]);
  return (
  <div className="App">
    <Form
    userList={userList}
    setUserList={setUserList}
    />
  </div>   
  );
}

export default App;
