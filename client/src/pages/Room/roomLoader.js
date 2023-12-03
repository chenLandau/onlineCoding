import { getRoomId } from "../../utils/utils";
import { getCodingRoomById } from "../../services/codingRoomService";
import { redirect } from "react-router-dom";
export const loader = async ({ request }) => {
  try {
    const roomId = getRoomId(request.url);
    const codingRoom = await getCodingRoomById(roomId);
    return codingRoom;
  } catch {
    return redirect("/"); //redirect to lobby in case of error
  }
};
