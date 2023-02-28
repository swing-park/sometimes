import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { CardBoard } from "components";
import { getCards, getImgs } from "api";
import { Card } from "types";
import cardModule from "redux/modules/card";

const temp: Card[] = [
  {
    id: "1",
    content: "내용1",
    nickname: "bin1234",
    createdAt: "2022-12-01T12:52:06.729608",
    modifiedAt: "2022-12-01T12:52:06.729608",
    likes: 0,
  },
];

const Main = () => {
  const { data } = useQuery("getCards", getCards);
  const { data: imgData } = useQuery("getImgs", getImgs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardModule.actions.setCards(temp));
  }, [dispatch, data]);

  useEffect(() => {
    dispatch(cardModule.actions.setImgs(imgData));
  }, [dispatch, imgData]);

  return (
    <>
      <CardBoard />
    </>
  );
};

export default Main;
