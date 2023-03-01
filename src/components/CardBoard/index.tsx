import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import { RootState } from "redux/config";
import Card from "./Card";
import Button from "components/Elem/Button";

const CardBoard = () => {
  const state = useSelector((state: RootState) => state.cardReducer);
  const navigate = useNavigate();
  const handleOnClickCreateBtn = () => navigate("/cards/create");
  const randomNum = (max: number) => Math.floor(Math.random() * max + 1);

  return (
    <StContainer>
      <StContent>
        {state.cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            // imgSrc={state.imgs[randomNum(40) - 1]}
          />
        ))}
      </StContent>
      <StBtn onClick={handleOnClickCreateBtn}>
        <Add />
      </StBtn>
    </StContainer>
  );
};

export default CardBoard;

const StContainer = styled.div`
  width: 67%;
  max-height: 500px;
  min-height: 700px;
  display: flex;
  flex-direction: row;
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
