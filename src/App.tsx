import { useEffect, useState } from "react";
import { Container, Box } from "./styles";
import { Chat } from "./components/chat";
import {
  disconnectSocket,
  initiateSocketConnection,
  selectRoom,
  sendMessage,
  subscribeToMessages,
} from "./socket/config";
import { ListRooms } from "./components/listRooms";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "./components/login";
import { Message } from "./types/chatTypes";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [user, setUser] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    initiateSocketConnection();
    subscribeToMessages((err: any, data: any) => {
      setMessages((oldMessages) => [...oldMessages, data]);
    });

    return () => {
      disconnectSocket();
    };
  }, []);

  const submitMessage = () => {
    const data = {
      username: user,
      text: currentMessage,
      room: selectedRoom,
      createdAt: new Date(),
    };
    sendMessage(data, (callback: any) => {
      console.log(callback);
      setMessages((prev) => [...prev, data]);
    });
    setCurrentMessage("");
  };

  return (
    <Container>
      <Box>
        <Routes>
          <Route
            path="/"
            element={
              <Login
                login={() => {
                  if (user !== "") {
                    navigate("/rooms");
                  }
                }}
                user={user}
                onWrite={(event) => setUser(event)}
              />
            }
          />
          <Route
            path="rooms"
            element={
              <ListRooms
                user={user}
                selectRoom={(room) => {
                  selectRoom({ username: user, room }, () => {
                    setSelectedRoom(room);
                  });
                }}
                goChat={() => navigate("/chat")}
                selectedRoom={selectedRoom}
              />
            }
          />
          <Route
            path="chat"
            element={
              <Chat
                messages={messages.filter(
                  (message) => message.room === selectedRoom
                )}
                currentMessage={currentMessage}
                onWrite={(e) => setCurrentMessage(e.target.value)}
                sendMessage={() => submitMessage()}
                room={selectedRoom}
                user={user}
              />
            }
          />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;
