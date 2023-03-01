import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { CardBoard } from "components";
import { getCards } from "api";
import cardModule from "redux/modules/card";

const Main = () => {
  const { data } = useQuery("getCards", getCards);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(cardModule.actions.setCards(data.data));
    }
  }, [dispatch, data]);

  return <>{data ? <CardBoard /> : null}</>;
};

export default Main;
