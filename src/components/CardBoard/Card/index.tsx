import styled from "styled-components";
import { Card as ICard } from "types";

interface Props {
  card: ICard;
  imgSrc: string;
}

const Card = ({ card, imgSrc }: Props) => {
  return <StCardBox imgSrc={imgSrc}>{JSON.stringify(card)}</StCardBox>;
};

export default Card;

const StCardBox = styled.div<{ imgSrc: string }>`
  width: 100%;
  border: 1px solid red;
  border-radius: 10px;
  padding: 10px;

  background-image: ${(props) => `url(${props.imgSrc})`};
  background-size: cover;
`;
