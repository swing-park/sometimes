import styled from "styled-components";
import { Card as ICard } from "types";

interface Props {
  card: ICard;
  imgSrc?: string;
}

const Card = ({ card, imgSrc }: Props) => {
  return (
    <StCardBox>
      <StContent>{JSON.stringify(card)}</StContent>
      <StCardFooter>
        <div>20 may</div>
        <div>좋아요</div>
      </StCardFooter>
    </StCardBox>
  );
};

export default Card;

const StCardBox = styled.div<{ imgSrc?: string }>`
  box-sizing: border-box;
  padding: 70px;

  background: #ffffff;
  border: 3px solid #333333;
  border-radius: 8px;
`;

const StContent = styled.div``;

const StCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
