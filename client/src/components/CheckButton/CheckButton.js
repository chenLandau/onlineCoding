import React from "react";
import { checkSolution } from "../../services/codingRoomService";
import { toast } from "react-toastify";
import { useRoomContext } from "../../pages/Room/Room";
import "./checkButton.css";
const CheckButton = () => {
  const { _id, setIsCodeCorrect } = useRoomContext();
  const onCheckSolution = async () => {
    try {
      const { isSolved } = await checkSolution(_id);
      if (isSolved) setIsCodeCorrect(true);
      else {
        setIsCodeCorrect(false);
        toast.error("code incorrect.... try again");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <button onClick={onCheckSolution} className="btn">
      check me!
    </button>
  );
};

export default CheckButton;
