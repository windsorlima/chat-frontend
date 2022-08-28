import { useEffect, useState } from "react";
import { Room } from "../room";
import axios from "axios";
import { Container, Rooms, Button } from "./styles";
import { useNavigate } from "react-router";

interface ListRoomsProps {
  user: string;
  selectRoom(room: string): void;
  selectedRoom: string;
  goChat(): void;
}

export const ListRooms = ({
  user,
  selectRoom,
  selectedRoom,
  goChat,
}: ListRoomsProps) => {
  const [rooms, setRooms] = useState<string[]>([]);
  let navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    async function getRooms() {
      const response = await axios.get("http://localhost:3000/rooms");

      setRooms(response.data);
    }

    getRooms().catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <p>Seja bem vindo {user} 🔥</p>
      <Rooms>
        {rooms.map((room) => (
          <Room
            name={room}
            selected={room === selectedRoom}
            onClick={() => selectRoom(room)}
          />
        ))}
      </Rooms>

      <Button onClick={() => goChat()}>Escolha sua sala</Button>
      <Button>Sair</Button>
    </Container>
  );
};
