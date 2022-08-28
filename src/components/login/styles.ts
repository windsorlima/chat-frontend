import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > input {
    width: 300px;
    height: 30px;
    padding-left: 5px;
  }

  > button {
    width: 300px;
    height: 30px;
  }
`