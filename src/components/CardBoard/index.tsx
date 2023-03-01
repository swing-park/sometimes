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
    <StContainer>
      <StHeader>ㄴr는 ㄱr 끔 눈물을 흘린ㄷr</StHeader>
      <StContent>
        {state.cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            // imgSrc={state.imgs[randomNum(40) - 1]}
          />
        ))}
      </StContent>
      <StButton>
        <StCreateBtn onClick={handleOnClickCreateBtn}>
          <Add />
        </StCreateBtn>
      </StButton>
    </StContainer>
  );
};

export default CardBoard;

const StButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  width: 40%;

  background: #ffffff;
  border: 3px solid #333333;
  border-radius: 8px;
`;

const StCreateBtn = styled(IconButton)`
  /* position: absolute;
  bottom: 0;
  right: 0; */
`;

const StContainer = styled.div`
  width: 67%;
  max-height: 500px;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* left: calc(50% - 675px / 2 + 10.5px);
  top: calc(50% - 785px / 2 + 94.5px); */

  background: #f5f5f5;
`;

const StHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;

  width: 100%;
  height: 3vw;

  background: #94c8b4;
  border-radius: 16px 16px 0px 0px;
`;

const StContent = styled.div`
  padding: 50px;
`;
