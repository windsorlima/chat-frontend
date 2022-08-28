import { useEffect } from "react";
import { useNavigate } from "react-router";
import {
  disconnectSocket,
  initiateSocketConnection,
} from "../../socket/config";
import { Message as MessageText } from "../../types/chatTypes";
import { Message } from "../message";
import { Container, MessagesBox, MessageSendBox } from "./styles";

interface ChatProps {
  messages: MessageText[];
  currentMessage: string;
  onWrite(event: any): void;
  sendMessage(): void;
  room: string;
  user: string;
}

export const Chat = ({
  messages,
  onWrite,
  sendMessage,
  currentMessage,
  room,
  user,
}: ChatProps) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!user || !room) {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      <p>
        Olá <strong>{user}</strong>, seja bem vindo a sala {room} ☕
      </p>

      <MessagesBox>
        {messages.map((message) => (
          <Message message={message} />
        ))}
      </MessagesBox>
      <MessageSendBox>
        <input
          type={"text"}
          value={currentMessage}
          onChange={(event) => onWrite(event)}
          placeholder="Escreva sua mensagem"
        />
        <button onClick={sendMessage}>Enviar</button>
      </MessageSendBox>
    </Container>
  );
};
