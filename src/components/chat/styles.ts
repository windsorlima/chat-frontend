import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  > p {
    margin: 10px 0;
  }
`
export const MessagesBox = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #000;
`
export const MessageSendBox = styled.div`
  width: 500px;
  display: flex;

  > input {
    width: 85%;
    height: 30px;
    padding-left: 5px;
  }

  > button {
    width: 14%;
    margin-left: 1%;
    background-color: transparent;
    border: 1px solid #000;
    cursor: pointer;
  }
`