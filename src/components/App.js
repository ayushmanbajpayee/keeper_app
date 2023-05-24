import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setNotes]=useState([]);
  function addNote(note){
    //  console.log(note);
    setNotes(prevNotes=> {
      return [...prevNotes,note];
    });
  }
  function deleteNode(id){
    // console.log("Delete was trigried");  
    setNotes(prevNotes =>{
      return prevNotes.filter((nodeItem,index) =>{
            return index!=id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes && notes.map((noteItem,index )=> (
    <Note key={index} id={index} title={noteItem.title} content={noteItem.content}  onDelete={deleteNode}/>
  ))}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
