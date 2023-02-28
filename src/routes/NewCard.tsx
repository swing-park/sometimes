import { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { createCard } from "api";
import { NewCard as INewCard } from "types";

const NewCard = () => {
  const [card, setCard] = useState<INewCard>({
    content: "",
  });
  const navigate = useNavigate();
  const { mode } = useParams();

  const queryClient = useQueryClient();

  const { mutate } = useMutation(createCard, {
    onSuccess: () => {
      queryClient.invalidateQueries("cards");
    },
  });

  const onSubmitHandler = () => {
    if (card.content.trim() === "") {
      alert("게시글 작성을 완료해주세요.");
      return;
    }

    mutate(card);
    navigate("/");
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCard({
      ...card,
      [name]: value,
    });
  };

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== "Enter") return;
    onSubmitHandler();
  };

  return (
    <>
      <StContainer>
        <StHeader>게시글</StHeader>
        <StForm onSubmit={onSubmitHandler}>
          <Textarea
            name="content"
            value={card.content}
            onChange={onChangeHandler}
            onKeyDown={onKeyPressHandler}
          />
          {mode === "create" ? (
            <button>등록하기</button>
          ) : (
            <button>수정하기</button>
          )}
        </StForm>
      </StContainer>
    </>
  );
};

export default NewCard;

const StContainer = styled.div`
  width: 67%;
  max-height: 500px;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;

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

const StForm = styled.form`
  padding: 50px;
`;

const Textarea = styled.textarea`
  width: 100%;
  background: #ffffff;
  border: 3px solid #333333;
  border-radius: 8px;
  box-sizing: border-box;

  padding: 100px;
  font-size: 30px;
  margin-bottom: 20px;
`;
