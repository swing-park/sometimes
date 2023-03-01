import { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { createCard } from "api";
import { NewCard as INewCard } from "types";
import Button from "components/Elem/Button";

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
        <StForm onSubmit={onSubmitHandler}>
          <Textarea
            name="content"
            value={card.content}
            onChange={onChangeHandler}
            onKeyDown={onKeyPressHandler}
          />
          {mode === "create" ? (
            <Button>등록하기</Button>
          ) : (
            <Button>수정하기</Button>
          )}
        </StForm>
      </StContainer>
    </>
  );
};

export default NewCard;

const StContainer = styled.div`
  margin: 0px 52px;
  max-height: 300px;
  min-height: 650px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StForm = styled.form`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 500px;
  height: 350px;

  background: #ffffff;
  border: 1px solid lightgray;
  border-radius: 24px;

  padding: 30px;
  font-size: 30px;
  margin-bottom: 20px;
`;
