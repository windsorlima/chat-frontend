import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1%;

  > p {
    margin-bottom: 10px;
  }
`

export const Rooms = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1%;
`

export const Button = styled.button`
  width: 96%;
  height: 30px;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 10px;
`