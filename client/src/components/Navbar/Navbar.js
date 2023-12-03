import React from "react";
import { useRoomContext } from "../../pages/Room/Room";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const { isMentor, onLeaveRoom } = useRoomContext();
  const title = isMentor ? "Mentor" : "Student";
  return (
    <nav>
      <div className="nav-center">
        <h1 className="nav-title">{`</> ${title} Room`}</h1>
        <Link to={"../"} className="icon-container" onClick={onLeaveRoom}>
          <RiArrowGoBackFill
            className="go-back-icon"
            title="Go back to lobby"
          />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
