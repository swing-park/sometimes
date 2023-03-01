import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useCookies } from "react-cookie";

interface Props {
  isLogin: boolean;
}

const MyPageToolBar = ({ isLogin }: Props) => {
  const [_, __, removeCookie] = useCookies(["Access-Token"]);

  const handleOnClickLogOutBtn = () => {
    removeCookie("Access-Token");
    window.location.replace("/signin");
  };

  return (
    <StMyPageToolBar>
      <Avatar sx={{ width: 20, height: 20 }}>
        <AccountCircle />
      </Avatar>
      <div>{isLogin ? "username" : "로그인이 필요합니다"}</div>
      {isLogin ? (
        <button onClick={handleOnClickLogOutBtn}>로그아웃</button>
      ) : (
        <button onClick={() => window.location.replace("/signin")}>
          로그인
        </button>
      )}
    </StMyPageToolBar>
  );
};

export default MyPageToolBar;

const StMyPageToolBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 10px;

  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.white};
`;
