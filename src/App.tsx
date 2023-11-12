import React from 'react';
import './App.scss';
import {Container} from "react-bootstrap";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <Container fluid className={`App p-0`}>
        <UserList />
    </Container>
  );
}

export default App;
