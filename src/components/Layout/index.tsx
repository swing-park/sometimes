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
  width: 100%;
  text-align: center;
  font-family: PFStarDust, sans-serif, Arial;
  font-size: 5rem;
`;

const StBodyWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 30px 0px;

  background-color: ${({ theme }) => theme.color.backgroundColor};
`;

const StContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 900px;
  height: 100px;
  padding: 30px;
  margin: 30px 0px;

  border-radius: 50px;

  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
`;
