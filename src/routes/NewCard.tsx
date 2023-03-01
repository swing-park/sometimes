import { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { createCard, editCard } from "api";
import { NewCard as INewCard } from "types";

const NewCard = () => {
  const [card, setCard] = useState<INewCard>({
    content: "",
  });
  const navigate = useNavigate();
  const { mode } = useParams();
  const location = useLocation();
  const [cookies] = useCookies(["Access-Token"]);

  const queryClient = useQueryClient();

  const { mutate: createCardMutate } = useMutation(
    () => createCard(card, cookies["Access-Token"]),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getCards");
      },
    }
  );
  const { mutate: editCardMutate } = useMutation(
    () => editCard(location.state.id, card, cookies["Access-Token"]),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getCards");
      },
    }
  );

  const onSubmitHandler = () => {
    if (card.content.trim() === "") {
      alert("게시글 작성을 완료해주세요.");
      return;
    }
    if (mode === "create") {
      createCardMutate();
    }
    if (mode === "edit") {
      editCardMutate();
    }
    navigate("/");
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCard({
      ...card,
      [name]: value,
    });
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <Textarea
          name="content"
          value={card.content}
          onChange={onChangeHandler}
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
