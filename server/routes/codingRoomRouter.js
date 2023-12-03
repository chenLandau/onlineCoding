import { Router } from "express";

import {
  createCodingRoom,
  getRoomsList,
  getCodingRoomById,
  checkIfSolved,
} from "../controllers/codingRoomController.js";
const router = Router();

router.route("/createCodingRoom").post(createCodingRoom);
router.route("/").get(getRoomsList);
router.route("/:id").get(getCodingRoomById);
router.route("/checkSolution/:id").get(checkIfSolved);

export default router;
