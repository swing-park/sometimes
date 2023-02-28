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
      <form onSubmit={onSubmitHandler}>
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
      </form>
    </>
  );
};

export default NewCard;

const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #eee;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 100px;
  font-size: 14px;
  margin-bottom: 20px;
`;
