import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import { RootState } from "redux/config";
import Card from "./Card";

const CardBoard = () => {
  const state = useSelector((state: RootState) => state.cardReducer);
  const navigate = useNavigate();
  const handleOnClickCreateBtn = () => navigate("/cards/create");
  const randomNum = (max: number) => Math.floor(Math.random() * max + 1);

  return (
    <StCardBoard>
      {state.cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          imgSrc={state.imgs[randomNum(40) - 1]}
        />
      ))}
      <StCreateBtn onClick={handleOnClickCreateBtn}>
        <Add />
      </StCreateBtn>
    </StCardBoard>
  );
};

export default CardBoard;

const StCardBoard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 30px;
`;

const StCreateBtn = styled(IconButton)`
  position: absolute;
  bottom: 0;
  right: 0;
`;
