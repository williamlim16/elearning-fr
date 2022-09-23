import io from "socket.io-client";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

export default function TestSocket() {
  const socket = io("http://localhost:3030");
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState<string>("");
  const [string, setString] = useState<string>("");
  const handleOnChange = (event: any) => {
    setString(event.target.value);
  };

  const sendPing = () => {
    console.log("this function called");
    socket.emit("message", string);
  };

  useEffect(() => {
    socket.on("connection", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("message", (data) => {
      setLastPong(data);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, [socket]);
  return (
    <div>
      <TextField
        label="password"
        variant="outlined"
        type="text"
        onChange={handleOnChange}
        value={string}
      />
      <p>Connected: {`${isConnected}`}</p>
      <p>Last pong: {lastPong || "-"}</p>
      <button onClick={sendPing} type="button">
        Send ping
      </button>
    </div>
  );
}
