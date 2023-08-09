import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <div>
        <input
          className="create-room"
          value={roomId}
          onChange={handleChange}
          placeholder="Enter room code"
        />
        <button onClick={handleCreateRoom}> Join </button>
      </div>
    </>
  );
}

export default Home;
