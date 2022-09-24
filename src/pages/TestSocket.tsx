import io from "socket.io-client";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

const socket = io("http://localhost:3030");

export default function TestSocket() {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [lastPong, setLastPong] = useState<string>("");
  const [string, setString] = useState<string>("");
  const handleOnChange = (event: any) => {
    setString(event.target.value);
  };
  const sendPing = () => {
    console.log("this function called");
    socket.emit("message", string);
  };

  const disconnect = () => {
    socket.disconnect();
  };

  const connect = () => {
    socket.connect();
  };

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("receive_message", (data) => {
      setLastPong(data);
    });

    return () => {
      socket.removeAllListeners();
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
      <button onClick={disconnect} type="button">
        disconnect
      </button>
      <button onClick={connect} type="button">
        connect
      </button>
    </div>
  );
}
