import { useEffect } from "react";
import { Container } from "./styles";

interface LoginProps {
  user: string;
  onWrite(event: any): void;
  login(): void;
}

export const Login = ({ user, onWrite, login }: LoginProps) => {
  useEffect(() => {
    if (user) {
      onWrite("");
    }
  }, []);

  return (
    <Container>
      <span>Bem vindo ao nosso chat</span>
      <input
        placeholder="Digite seu nome"
        value={user}
        onChange={(event) => onWrite(event.target.value)}
      />
      <button onClick={() => login()}>Entrar</button>
    </Container>
  );
};
