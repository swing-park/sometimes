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
    <StContainer>
      <input type="text" onChange={debounce} />
    </StContainer>
  );
};

export default Filter;

const StContainer = styled.div`
  border: 1px solid red;
`;
