import styled from "styled-components";

interface ContainerProps {
  selected: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 23%;
  padding: 20px 0;
  text-align: center;
  border: 1px solid #000;
  border-radius: 10px;
  margin-bottom: 10px;

  cursor: pointer;

  background-color: ${props => props.selected ? "black" : "transparent"};

  > span {
    color: ${props => props.selected ? "#fff" : "#313131"};
  }
`;

export const Text = styled.span`
  font-size: 14px;
`;