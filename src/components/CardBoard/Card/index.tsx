import styled from "styled-components";
import { IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Card as ICard } from "types";
import { getYYYYMMDD } from "utils";

interface Props {
  card: ICard;
  setClickedCard: (card: ICard) => void;
  setClickedCardId: (id: string) => void;
}

const Card = ({ card, setClickedCard, setClickedCardId }: Props) => {
  const handleOnClickCardBox = () => {
    setClickedCard(card);
    setClickedCardId(card.id);
  };

  return (
    <StCardBox
      imgsrc={card.image}
      layoutId={card.id}
      onClick={handleOnClickCardBox}
    >
      <StContent>{card.content}</StContent>
      <StCardFooter>
        <div>{getYYYYMMDD(card.modifiedAt)}</div>
        <StLikesWrapper>
          <IconButton color="error">
            <Favorite />
          </IconButton>
          <div>{card.likes}</div>
        </StLikesWrapper>
      </StCardFooter>
    </StCardBox>
  );
};

export default Card;

const StCardBox = styled(motion.div)<{ imgsrc: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 350px;
  height: 250px;
  border: 1px solid red;
  border-radius: 24px;
  padding: 20px;
  cursor: pointer;

  &::after {
    width: 100%;
    height: 100%;
    content: "";
    background-image: ${(props) => `url(${props.imgsrc})`};
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
  }
`;

const StContent = styled.div``;

const StCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px 5px;
  border: 1px solid red;
  z-index: 999;
`;

const StLikesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
