import styled from "styled-components";
import MyPageToolBar from "../MyPageToolBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <StBodyWrapper>
      <StLogo>ㄱr끔...⭐️</StLogo>
      <MyPageToolBar isLogin />
      <StContainer>{children}</StContainer>
    </StBodyWrapper>
  );
};

export default Layout;

const StLogo = styled.div`
  margin-top: 30px;
  margin-left: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 24px;

  color: #e24429;
  opacity: 0.5;
  font-family: PFStarDust, sans-serif, Arial;
  font-size: 2rem;
`;

const StBodyWrapper = styled.div`
  box-sizing: border-box;
  margin: 0px;

  width: 100%;
  height: 100vh;
  overflow: hidden;

  border: 20px solid #e24429;
`;

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
