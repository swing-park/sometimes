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
  width: 350px;
  height: 250px;
  padding: 20px;

  background: #ffffff;
  border: 3px solid #ffffff;
  border-radius: 24px;
`;

const StContent = styled.div``;

const StCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
