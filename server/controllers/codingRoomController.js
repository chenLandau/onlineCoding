import {
  createRoom,
  getRoomById,
  getAllRooms,
} from "../services/dataService.js";
import { StatusCodes } from "http-status-codes";

export const createCodingRoom = async (req, res) => {
  try {
    const room = await createRoom(req.body);
    res.status(StatusCodes.CREATED).json({ room });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: error });
  }
};

export const getCodingRoomById = async (req, res) => {
  try {
    const codingRoom = await getRoomById(req.params.id);
    if (codingRoom) {
      codingRoom.toJSON();
      res.status(StatusCodes.OK).json({ codingRoom: codingRoom });
    }
  } catch (error) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "Coding room not found" });
  }
};

export const getRoomsList = async (req, res) => {
  try {
    const codingRoomsList = await getAllRooms();
    res.status(StatusCodes.OK).json({ codingRoomsList });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
  }
};

export const checkIfSolved = async (req, res) => {
  try {
    const codingRoom = await getRoomById(req.params.id);
    if (codingRoom) {
      const isCodeEqual =
        codingRoom.currentCode.trim() === codingRoom.solution.trim();
      res.status(StatusCodes.ACCEPTED).json({ isSolved: isCodeEqual });
    }
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error });
  }
};
