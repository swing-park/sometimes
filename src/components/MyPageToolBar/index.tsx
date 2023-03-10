import { useCookies } from "react-cookie";
import styled from "styled-components";
import { Button, Avatar } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

interface Props {
  isLogin: boolean;
}

const MyPageToolBar = ({ isLogin }: Props) => {
  const [_, __, removeCookie] = useCookies(["Access-Token"]);

  const handleOnClickLogOutBtn = () => {
    removeCookie("Access-Token");
    sessionStorage.removeItem("nickname");
    window.location.replace("/signin");
  };

  return (
    <StMyPageToolBar>
      <Avatar sx={{ width: 20, height: 20 }}>
        <AccountCircle />
      </Avatar>
      <div>
        {isLogin ? sessionStorage.getItem("nickname") : "로그인이 필요합니다"}
      </div>
      {isLogin ? (
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={handleOnClickLogOutBtn}
        >
          로그아웃
        </Button>
      ) : (
        <Button
          variant="outlined"
          size="small"
          onClick={() => window.location.replace("/signin")}
        >
          로그인
        </Button>
      )}
    </StMyPageToolBar>
  );
};

export default MyPageToolBar;

const StMyPageToolBar = styled.div`
  color: #e24429;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  height: 10px;

  border-radius: 50px;
`;
