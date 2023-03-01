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
    if (likeCardData) {
      const { msg } = likeCardData.data;
      alert(msg);
    }
  }, [likeCardData]);

  useEffect(() => {
    if (deleteCardData) {
      const { msg } = deleteCardData.data;
      alert(msg);
    }
  }, [deleteCardData]);

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
        <StContent>{clickedCard.content}</StContent>
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
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const StCardBox = styled(motion.div)<{ imgsrc: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid red;
  border-radius: 10px;
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
  padding: 10px 5px;
  border: 1px solid red;
  z-index: 999;
`;

const StLikesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
