import customFetch from "../utils/customFetch";

export const getCodingRoomsList = async () => {
  const { data } = await customFetch.get("./codingRoom");
  const { codingRoomsList } = data;
  return { codingRoomsList };
};

export const getCodingRoomById = async (roomId) => {
  const { data } = await customFetch.get(`./codingRoom/${roomId}`);
  const { codingRoom } = data;
  return { codingRoom };
};

export const checkSolution = async (roomId) => {
  const { data } = await customFetch.get(
    `./codingRoom/checkSolution/${roomId}`
  );
  const { isSolved } = data;
  return { isSolved };
};
