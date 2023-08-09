import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    setRoomId(event.target.value);
  }

  function handleCreateRoom() {
    navigate(`/room/${roomId}`);
  }

  return (
    <>
      <div className="join-form">
        <h1 className="text-heading"> Join room </h1>
        <input
          className="create-room"
          value={roomId}
          onChange={handleChange}
          placeholder="Enter room code"
        />
        <button className="create-room btn" onClick={handleCreateRoom}>
          {" "}
          Join{" "}
        </button>
      </div>
    </>
  );
}

export default Home;
