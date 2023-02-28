import axios from "axios";
import { NewCard, NewUser, User } from "types";

const headers = { Authorization: `Bearer abcdefg` };

export const signup = async (newUser: NewUser) => {
  const data = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/signup`,
    newUser
  );
  return data;
};

export const signin = async (user: User) => {
  const data = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/login`,
    user
  );
  return data;
};

export const getCards = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/cards`
  );
  return data;
};

export const getCard = async (id: string) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/cards/${id}`
  );
  return data;
};

export const getImgs = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/image`
  );
  return data;
};

export const createCard = async (newCard: NewCard) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/cards`,
    newCard,
    { headers }
  );
  return data;
};

export const editCard = async (id: string, modifyCard: NewCard) => {
  const { data } = await axios.put(
    `${process.env.REACT_APP_SERVER_URL}/api/cards/${id}`,
    modifyCard,
    { headers }
  );
  return data;
};

export const deleteCard = async (id: string) => {
  const { data } = await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/api/cards/${id}`,
    { headers }
  );
  return data;
};

export const likeCard = async (id: string) => {
  const { data } = await axios.put(
    `${process.env.REACT_APP_SERVER_URL}/api/cards/likes/${id}`,
    {},
    { headers }
  );
  return data;
};
