import { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { createCard, editCard } from "api";
import { NewCard as INewCard } from "types";
import { Button } from "components";

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
      <StContainer>
        <StForm onSubmit={onSubmitHandler}>
          <StTextarea
            name="content"
            value={card.content}
            onChange={onChangeHandler}
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

const StTextarea = styled.textarea`
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
