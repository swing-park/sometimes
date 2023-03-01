import axios from "axios";
import { NewCard, NewUser, User } from "types";

const makeHeaders = (accessToken: string) => {
  return { Authorization: `Bearer  ${accessToken}` };
};

export const signup = async (newUser: NewUser) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/signup`,
      newUser
    );
    return res;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      alert(`Error : ${err.response?.data.msg}`);
      return;
    }
    console.error("비처리에러 : ", err);
  }
};

export const signin = async (user: User) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/login`,
      user
    );
    return res;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      alert(`Error : ${err.response?.data.msg}`);
      return;
    }
    console.error("비처리에러 : ", err);
  }
};

export const getCards = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/cards`
    );
    return res;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      alert(`Error : ${err.response?.data.msg}`);
      return;
    }
    console.error("비처리에러 : ", err);
  }
};

export const getCard = async (id: string) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/cards/${id}`
    );
    return res;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      alert(`Error : ${err.response?.data.msg}`);
      return;
    }
    console.error("비처리에러 : ", err);
  }
};

export const createCard = async (newCard: NewCard, accessToken: string) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/cards`,
      newCard,
      { headers: makeHeaders(accessToken) }
    );
    return res;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      alert(`Error : ${err.response?.data.msg}`);
      return;
    }
    console.error("비처리에러 : ", err);
  }
};

export const editCard = async (
  id: string,
  modifyCard: NewCard,
  accessToken: string
) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_SERVER_URL}/api/cards/${id}`,
      modifyCard,
      { headers: makeHeaders(accessToken) }
    );
    return res;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      alert(`Error : ${err.response?.data.msg}`);
      return;
    }
    console.error("비처리에러 : ", err);
  }
};

export const deleteCard = async (id: string, accessToken: string) => {
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/api/cards/${id}`,
      { headers: makeHeaders(accessToken) }
    );
    return res;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      alert(`Error : ${err.response?.data.msg}`);
      return;
    }
    console.error("비처리에러 : ", err);
  }
};

export const likeCard = async (id: string, accessToken: string) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_SERVER_URL}/api/cards/likes/${id}`,
      {},
      { headers: makeHeaders(accessToken) }
    );
    return res;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      alert(`Error : ${err.response?.data.msg}`);
      return;
    }
    console.error("비처리에러 : ", err);
  }
};
