import styled from "styled-components";
import { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { signup } from "api";
import { NewUser } from "types";
import Button from "components/Elem/Button";
import Wrapper from "components/Elem/Wrapper";
import Text from "components/Elem/Text";
import Input from "components/Elem/Input";

const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<NewUser>({
    username: "",
    nickname: "",
    password: "",
  });

  //상태관리 위해 초기값 세팅
  const [usernameInput, setUsernameInput] = useState("");
  const [nicknameInput, setNicknameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  //정규식
  const regUsername = /^[a-z0-9]{4,10}$/;
  const regNickname = /^[ㄱ-ㅎ|가-힣A-Za-z0-9]{2,6}$/;
  const regPassword = /^[a-zA-Z0-9\\d`~!@#$%^&()-_=+]{8,24}$/;

  //리액트 쿼리 관련 코드
  const queryClient = useQueryClient();
  const { mutate } = useMutation(signup, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
      setUser({ username: "", nickname: "", password: "" });
      alert("회원가입 성공!");
      navigate("/signin");
    },
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username")
      !regUsername.test(value)
        ? setUsernameInput("아이디는 소문자 4-10자 이내 입니다.")
        : setUsernameInput("");

    if (name === "nickname")
      !regNickname.test(value)
        ? setNicknameInput("닉네임은 2-10자 이내입니다.")
        : setNicknameInput("");

    if (name === "password")
      !regPassword.test(value)
        ? setPasswordInput("비밀번호는 대소문자 8-24자 이내입니다.")
        : setPasswordInput("");

    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      user.nickname.trim() === "" ||
      user.username.trim() === "" ||
      user.password.trim() === ""
    ) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    mutate(user);
  };

  return (
    <>
      <StContainer>
        <StHeader>Sign Up</StHeader>
        <StForm onSubmit={onSubmitHandler}>
          <Wrapper mg="10px 0">
            <Text size="16">nickname</Text>
          </Wrapper>
          <Input
            type="text"
            onChange={onChangeHandler}
            name="nickname"
            value={user.nickname}
          />
          <Wrapper mg="10px 0">
            <Text size="16" color="red">
              {nicknameInput}
            </Text>
          </Wrapper>

          <Wrapper mg="10px 0">
            <Text size="16">id</Text>
          </Wrapper>
          <Input
            type="text"
            onChange={onChangeHandler}
            name="username"
            value={user.username}
          />
          <Wrapper mg="10px 0">
            <Text size="16" color="red">
              {usernameInput}
            </Text>
          </Wrapper>

          <Wrapper mg="10px 0">
            <Text size="16">password</Text>
          </Wrapper>
          <Input
            type="password"
            onChange={onChangeHandler}
            name="password"
            value={user.password}
          />
          <Wrapper mg="10px 0">
            <Text size="16" color="red">
              {passwordInput}
            </Text>
          </Wrapper>
          <Button mg="10px 0">회원가입</Button>
        </StForm>
      </StContainer>
    </>
  );
};

export default SignUp;

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
