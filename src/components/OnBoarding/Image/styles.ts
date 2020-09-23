import styled from 'styled-components/native';

interface IContainerProps {
  positionImage: string;
}

export const Container = styled.View<IContainerProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) =>
    props.positionImage ? 'center' : 'space-between'};
  padding: 0 12px;
`;
