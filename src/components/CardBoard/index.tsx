import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IconButton } from "@mui/material";
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
    <>
      <StCardBoard>
        {state.cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            setClickedCard={setClickedCard}
            setClickedCardId={setClickedCardId}
          />
        ))}
        <StCreateBtn onClick={handleOnClickCreateBtn}>
          <Add />
        </StCreateBtn>
      </StCardBoard>
      <AnimatePresence>
        {clickedCardId && clickedCard && (
          <Modal
            setClickedCardId={setClickedCardId}
            clickedCard={clickedCard}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CardBoard;

const StCardBoard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  gap: 30px;
`;

const StCreateBtn = styled(IconButton)`
  position: absolute;
  bottom: 0;
  right: 0;
`;
