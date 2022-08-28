import { Message as MessageText } from "../../types/chatTypes";
import { Container, Text } from "./styles";

interface MessageProps {
  message: MessageText;
}

export const Message = ({ message }: MessageProps) => {
  return (
    <Container>
      <Text>
        <strong>{message.username}:</strong> {message.text}
      </Text>
    </Container>
  );
};
