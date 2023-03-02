import styled from "styled-components";
import { useDebounce } from "hooks";
import { Card } from "types";

interface Props {
  setCards: (cards: Card[]) => void;
  existCards: Card[];
}

const Filter = ({ setCards, existCards }: Props) => {
  const handleOnChangeFilterInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.value === "") return setCards(existCards);
    setCards(existCards.filter((card) => card.nickname === e.target.value));
  };
  const debounce = useDebounce<[React.ChangeEvent<HTMLInputElement>]>(
    handleOnChangeFilterInput,
    1000
  );
  return (
    <>
      <StInput
        type="text"
        onChange={debounce}
        placeholder="유저이름을 검색하세요"
      />
    </>
  );
};

export default Filter;

const StInput = styled.input`
  position: absolute;
  top: -40px;
  left: 15px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid black;
  padding: 5px;
`;
