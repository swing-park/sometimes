import styled from "styled-components";
import { Avatar } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

interface Props {
  isLogin: boolean;
}

const MyPageToolBar = ({ isLogin }: Props) => {
  return (
    <StMyPageToolBar>
      <Avatar sx={{ width: 20, height: 20 }}>
        <AccountCircle />
      </Avatar>
      <div>{isLogin ? "username" : "로그인이 필요합니다"}</div>
      {isLogin ? <button>로그아웃</button> : <button>로그인</button>}
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
