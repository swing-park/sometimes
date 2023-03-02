import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { signin } from "api";
import { User } from "types";
import { Wrapper, Text, Input } from "components";
import Button from "@mui/material/Button";

const SignIn = () => {
  const navigate = useNavigate();
  const [_, setCookie] = useCookies(["Access-Token"]);
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });

  const { mutate } = useMutation(signin, {
    onSuccess: (response) => {
      if (response) {
        sessionStorage.setItem("nickname", response.data.nickname);
        setCookie("Access-Token", response?.headers.authorization.substr(7));
        alert("로그인 성공!");
        navigate("/");
      }
    },
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user.username.trim() === "" || user.password.trim() === "") {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    mutate(user);
    setUser({ username: "", password: "" });
  };

  return (
    <>
      <StContainer>
        <StHeader>Sign In</StHeader>
        <StForm onSubmit={onSubmitHandler}>
          <StInputs>
            <Wrapper mg="10px 0">
              <Text size="16">id</Text>
            </Wrapper>
            <Input
              type="text"
              onChange={onChangeHandler}
              name="username"
              value={user.username || ""}
            />
            <Wrapper mg="10px 0">
              <Text size="16">password</Text>
            </Wrapper>
            <Input
              type="password"
              onChange={onChangeHandler}
              name="password"
              value={user.password || ""}
            />
          </StInputs>
          <Button type="submit" variant="outlined" size="large">
            로그인
          </Button>
          <Wrapper mg="20px 0px">
            회원이 아니신가요?
            <Link to={"/signup"}>
              <Text color="blue">회원가입</Text>
            </Link>
          </Wrapper>
        </StForm>
      </StContainer>
    </>
  );
};

export default SignIn;

const StContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  max-width: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: rgb(0 0 0 / 25%) 0px 14px 28px, rgb(0 0 0 / 22%) 0px 10px 10px;
  position: relative;
  overflow: hidden;
  border: none;

  margin: 20px;
  padding: 0;
`;

const StHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;
  color: white;

  width: 100%;
  height: 30px;
  background: #084bac;
  border-radius: 16px 16px 0px 0px;
`;

const StForm = styled.form`
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;

  flex-direction: column;
`;

const StInputs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  flex-direction: column;
  margin-bottom: 20px;
`;
