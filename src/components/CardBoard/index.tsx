import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Add } from "@mui/icons-material";
import { AnimatePresence } from "framer-motion";
import { RootState } from "redux/config";
import { Card as ICard } from "types";
import Card from "./Card";
import Modal from "./Card/Modal";
import Button from "components/Elem/Button";

const CardBoard = () => {
  const [clickedCard, setClickedCard] = useState<ICard>();
  const [clickedCardId, setClickedCardId] = useState<null | string>(null);
  const state = useSelector((state: RootState) => state.cardReducer);
  const navigate = useNavigate();
  const handleOnClickCreateBtn = () => navigate("/cards/create");

  return (
    <StContainer>
      <StContent>
        {state.cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            setClickedCard={setClickedCard}
            setClickedCardId={setClickedCardId}
          />
        ))}
      </StContent>
      <StBtn onClick={handleOnClickCreateBtn}>
        <Add />
      </StBtn>
      <AnimatePresence>
        {clickedCardId && clickedCard && (
          <Modal
            setClickedCardId={setClickedCardId}
            clickedCard={clickedCard}
          />
        )}
      </AnimatePresence>
    </StContainer>
  );
};

export default CardBoard;

const StContainer = styled.div`
  width: 67%;
  max-height: 500px;
  min-height: 700px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0px auto;
`;

const StContent = styled.div`
  margin: 20px;
`;

const StBtn = styled.div`
  box-sizing: border-box;
  width: 350px;
  height: 250px;
  padding: 20px;

  background: #ffffff;
  border: 3px solid #ffffff;
  border-radius: 24px;
`;
