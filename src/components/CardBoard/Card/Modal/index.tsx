import { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Card } from "types";
import { likeCard, deleteCard } from "api";
import { getYYYYMMDD } from "utils";

interface Props {
  clickedCard: Card;
  setClickedCardId: (id: null) => void;
}

const Modal = ({ clickedCard, setClickedCardId }: Props) => {
  const overlay = {
    hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
    visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
    exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
  };

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [cookies] = useCookies(["Access-Token"]);
  const { mutate: likeCardMutate, data: likeCardData } = useMutation(
    () => likeCard(clickedCard.id, cookies["Access-Token"]),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getCards");
      },
    }
  );
  const { mutate: deleteCardMutate, data: deleteCardData } = useMutation(
    () => deleteCard(clickedCard.id, cookies["Access-Token"]),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getCards");
      },
    }
  );

  useEffect(() => {
    if (deleteCardData) {
      const { msg } = deleteCardData.data;
      alert(msg);
    }
  }, [deleteCardData]);

  useEffect(() => {
    if (likeCardData) {
      const { msg } = likeCardData.data;
      alert(msg);
    }
  }, [likeCardData]);

  const handleOnClickLikeBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    likeCardMutate();
    setClickedCardId(null);
  };
  const handleOnClickEditBtn = () =>
    navigate("/cards/edit", { state: { id: clickedCard.id } });

  const handleOnClickDelBtn = () => deleteCardMutate();

  return (
    <StOverlay
      variants={overlay}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={() => setClickedCardId(null)}
    >
      <StCardBox imgsrc={clickedCard.image} layoutId={clickedCard.id}>
        <StCardHeader>
          {clickedCard.nickname === sessionStorage.getItem("nickname") && (
            <>
              <button style={{ zIndex: "999" }} onClick={handleOnClickEditBtn}>
                수정
              </button>
              <button style={{ zIndex: "999" }} onClick={handleOnClickDelBtn}>
                삭제
              </button>
            </>
          )}
        </StCardHeader>
        <StBody>
          <StContent>{clickedCard.content}</StContent>
        </StBody>
        <StCardFooter>
          <div>{getYYYYMMDD(clickedCard.modifiedAt)}</div>
          <StLikesWrapper>
            <IconButton color="error" onClick={handleOnClickLikeBtn}>
              <Favorite />
            </IconButton>
            <div>{clickedCard.likes}</div>
          </StLikesWrapper>
        </StCardFooter>
      </StCardBox>
    </StOverlay>
  );
};

export default Modal;

const StOverlay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 999;
`;

const StCardHeader = styled.div`
  z-index: 99999;
  display: flex;
  justify-content: flex-end;
`;

const StCardBox = styled(motion.div)<{ imgsrc: string }>`
  text-align: center;
  position: relative;
  margin: auto 0;
  width: 400px;
  height: 400px;
  box-shadow: rgb(0 0 0 / 25%) 0px 14px 28px, rgb(0 0 0 / 22%) 0px 10px 10px;
  padding: 10px;
  cursor: pointer;
  z-index: 9999;

  &::after {
    width: 100%;
    height: 100%;
    content: "";
    background-image: ${(props) => `url(${props.imgsrc})`};
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const StBody = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StContent = styled.div`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  padding: 10px;
  z-index: 999;
`;

const StCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px 5px;
  z-index: 999;
  background-color: white;
`;

const StLikesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
