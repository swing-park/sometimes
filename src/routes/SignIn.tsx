import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { signin } from "api";
import { User } from "types";
import { Wrapper, Button, Text, Input } from "components";

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
          <Button mg="20px 0">로그인</Button>
          <Wrapper>
            회원이 아니신가요?
            <Link to={"/signup"}>회원가입</Link>
          </Wrapper>
        </StForm>
      </StContainer>
    </>
  );
};

export default SignIn;

const StContainer = styled.div`
  width: 67%;
  max-height: 500px;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #f5f5f5;
`;

const StHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;

  width: 100%;
  height: 3vw;
  background: #94c8b4;
  border-radius: 16px 16px 0px 0px;
`;

const StForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
