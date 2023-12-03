import CodingRoom from "../models/codingRoomModel.js";

export const createRoom = async (data) => {
  const { name, description, currentCode, solution } = data;
  const room = await CodingRoom.create({
    name,
    description,
    currentCode,
    solution,
  });
  return room;
};
export const updateRoom = async (roomId, code) => {
  // Find the room by its ID and update currentCode field
  const updatedRoom = await CodingRoom.findOneAndUpdate(
    { _id: roomId },
    { $set: { currentCode: code } },
    { new: true } // Return the updated document
  );
  return updatedRoom;
};

export const getRoomById = async (roomId) => {
  const room = await CodingRoom.findById(roomId);
  return room;
};
export const getAllRooms = async () => {
  const roomsList = await CodingRoom.find({}, "id name");
  return roomsList;
};
