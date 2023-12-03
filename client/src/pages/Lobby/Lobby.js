import React from "react";
import { CodingRoomLink } from "../../components/index";
import { useLoaderData } from "react-router-dom";
import { getCodingRoomsList } from "../../services/codingRoomService";
import { toast } from "react-toastify";
import "./lobby.css";

export const loader = async () => {
  try {
    const codingRoomsList = await getCodingRoomsList();
    return codingRoomsList;
  } catch (error) {
    toast.error("something went wrong......");
    return null;
  }
};

const Lobby = () => {
  const { codingRoomsList } = useLoaderData();

  return (
    <section className="lobby-section">
      <h1 className="title">choose code block</h1>
      <div className="room-links">
        {codingRoomsList.map((room) => {
          return <CodingRoomLink key={room._id} {...room} />;
        })}
      </div>
    </section>
  );
};

export default Lobby;
