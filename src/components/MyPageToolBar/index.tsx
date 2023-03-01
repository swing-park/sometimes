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
  color: #e24429;
  letter-spacing: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 10px;

  border-radius: 50px;
`;
