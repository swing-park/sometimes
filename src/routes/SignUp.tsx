import styled from "styled-components";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { signup } from "api";
import { NewUser } from "types";

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

  const { mutate } = useMutation(signup, {
    onSuccess: (response) => {
      if (response) {
        setUser({ username: "", nickname: "", password: "" });
        alert("회원가입 성공!");
        navigate("/signin");
      }
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
        <StForm onSubmit={onSubmitHandler}>
          <StMain>
            <div>
              <div>nickname</div>
            </div>
            <input
              type="text"
              onChange={onChangeHandler}
              name="nickname"
              value={user.nickname}
            />
            <div>
              <div>{nicknameInput}</div>
            </div>

            <div>
              <div>id</div>
            </div>
            <input
              type="text"
              onChange={onChangeHandler}
              name="username"
              value={user.username}
            />
            <div>
              <div>{usernameInput}</div>
            </div>

            <div>
              <div>password</div>
            </div>
            <input
              type="password"
              onChange={onChangeHandler}
              name="password"
              value={user.password}
            />
            <div>
              <div>{passwordInput}</div>
            </div>
          </StMain>
          <button>회원가입</button>
        </StForm>
      </StContainer>
    </>
  );
};

export default SignUp;

const StContainer = styled.div`
  height: 100%;
  border: 1px solid black;
  padding: 50px;
`;

const StMain = styled.div`
  width: 100%;
`;

const StForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;
