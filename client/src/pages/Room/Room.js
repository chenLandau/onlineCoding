import React, { useContext, createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  Navbar,
  CodeEditor,
  SmileyCard,
  CheckButton,
} from "../../components/index";
import "./room.css";
import {
  connectSocket,
  joinRoom,
  leaveRoom,
  sendCode,
  receiveCode,
} from "../../services/socketService";

const RoomContext = createContext();
const Room = () => {
  const { codingRoom } = useLoaderData();
  const { _id, name, description, currentCode } = codingRoom;
  const [editorContent, setEditorContent] = useState(currentCode);
  const [isMentor, setIsMentor] = useState(null);
  const [isCodeCorrect, setIsCodeCorrect] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      await connectSocket();
      joinRoom(_id, (isFirst) => {
        setIsMentor(!isMentor ? isFirst : isMentor);
      });
    };
    fetchData();
  }, [_id]);

  const onEditorChange = (newValue, event) => {
    sendCode(_id, newValue);
    setEditorContent(newValue);
  };
  const onLeaveRoom = () => {
    leaveRoom(_id);
  };
  receiveCode((code) => {
    setEditorContent(code);
  });

  return (
    <RoomContext.Provider
      value={{
        onEditorChange,
        onLeaveRoom,
        setIsCodeCorrect,
        isMentor,
        editorContent,
        _id,
      }}
    >
      <section className="room-section">
        <Navbar />
        {isCodeCorrect && <SmileyCard />}
        <div className="room-header">
          <h2 className="room-title">{name}</h2>
          <p className="room-description">{description}</p>
        </div>
        <CodeEditor />
        {!isMentor && <CheckButton />}
      </section>
    </RoomContext.Provider>
  );
};

export const useRoomContext = () => useContext(RoomContext);
export default Room;
