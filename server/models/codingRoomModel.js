import mongoose from "mongoose";
const codingRoomScheme = new mongoose.Schema({
  name: String,
  description: String,
  currentCode: String,
  solution: String,
});

codingRoomScheme.methods.toJSON = function () {
  let roomObj = this.toObject();
  delete roomObj.solution;
  return roomObj;
};
export default mongoose.model("CodingRoom", codingRoomScheme);
