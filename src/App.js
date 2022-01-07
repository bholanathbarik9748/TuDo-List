import React from "react";
import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react';
import { db } from "./firebase_con";
import firebase from "firebase/compat/app";
import './App.css';
import './tudo.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');


  //using useEffect we are adding data from firebase to setTodos
  useEffect(() => {
    db.collection('todos').orderBy("timestamp", "desc").onSnapshot(
      snapshot => {
        console.log(snapshot);
        setTodos(snapshot.docs.map(doc => ({
          id: doc.id,
          todo: doc.data().todo,
          timestamp: doc.data().timestamp
        })))
      }
    )
  }, [])
  console.log(todos);

  // function for add TOdo in database
  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // after value added setInput value we be empty
    setInput('');
  }
  return (
    <div className="App">
      <Navbar />
      <div className="card">
        <h1 class="head-line" >TuDo-LIST</h1>
        <form>
          <input type="text" placeholder="Add your TUDO.." onChange={e => setInput(e.target.value)} value={input} />
          <input type="submit" value="Submit" onClick={addTodo} disabled={!input} />
        </form>
      </div>
      <div className="card-list">
        <table>
          <tr>
            <th>ID</th>
            <th>TUDO</th>
            <th></th>
            <th></th>
          </tr>
          <tbody>
            {
              todos.map(todo => {
                return <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.todo}</td>
                  <td><button class="favorite styled sec"
                    type="button"
                    onClick={() => {
                      db.collection('todos').doc(todo.id).set(
                        {
                          todo: input,
                        },
                        {
                          merge: true
                        }
                      );
                      setInput('')
                    }}
                    disabled={!input}
                  >Update</button></td>
                  <td><button class="favorite styled"
                    type="button"
                    onClick={(e) => db.collection('todos').doc(todo.id).delete()}
                  >Delete</button></td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div >
  );
}

export default App;
