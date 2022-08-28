import { useEffect } from "react";
import { Container, Text } from "./styles";

interface RoomProps {
  name: string;
  selected: boolean;
  onClick(): void;
}

export const Room = ({ name, selected, onClick }: RoomProps) => {
  return (
    <Container selected={selected} onClick={() => onClick()}>
      <Text> {name} </Text>
    </Container>
  );
};
