export const getRoomId = (requestUrl) => {
  const url = new URL(requestUrl);
  const roomId = url.pathname.split("/").pop();
  return roomId;
};
