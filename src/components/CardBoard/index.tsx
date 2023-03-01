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

const CardBoard = () => {
  const [clickedCard, setClickedCard] = useState<ICard>();
  const [clickedCardId, setClickedCardId] = useState<null | string>(null);
  const state = useSelector((state: RootState) => state.cardReducer);
  const navigate = useNavigate();
  const handleOnClickCreateBtn = () => navigate("/cards/create");

  return (
    <StContainer>
      <StContent>
        <StBtn onClick={handleOnClickCreateBtn}>
          <Add sx={{ fontSize: 100, color: "white" }} />
        </StBtn>
        {state.cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            setClickedCard={setClickedCard}
            setClickedCardId={setClickedCardId}
          />
        ))}
      </StContent>
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
  width: 100%;
  max-height: 500px;
  min-height: 700px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px auto;
`;

const StContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
`;

const StBtn = styled.div`
  width: 350px;
  height: 250px;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 3px solid #ffffff;
  border-radius: 24px;
`;
