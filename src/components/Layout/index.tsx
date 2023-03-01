import styled from "styled-components";
import { useCookies } from "react-cookie";
import MyPageToolBar from "../MyPageToolBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [cookies] = useCookies(["Access-Token"]);

  return (
    <>
      <StHeader>
        <StLogo>ㄱr끔...⭐️</StLogo>
        <MyPageToolBar isLogin={cookies["Access-Token"] ? true : false} />
      </StHeader>
      <StBodyWrapper>
        <StMsg>Tell me</StMsg>
        <StIntro>
          <p>Feel free to write down your thoughts here that you can't say</p>
          <p>anywhere else. All good things sometimes start on the page.</p>
        </StIntro>
        <StContainer>{children}</StContainer>
      </StBodyWrapper>
    </>
  );
};

export default Layout;

const StLogo = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 24px;

  color: #094bac;
  font-weight: bold;
  font-family: PFStarDust, sans-serif, Arial;
  font-size: 2rem;
`;

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 20px;
  padding-bottom: 10px;

  border-bottom: 1px solid #444;
`;

const StMsg = styled.div`
  margin-top: 40px;
  text-align: center;
  letter-spacing: -2.5px;

  color: #094bac;
  font-weight: 800;
  font-size: 8rem;
`;

const StIntro = styled.div`
  text-align: center;
  letter-spacing: -0.6px;

  color: #094bac;
  font-weight: 600;
  font-size: 28px;
  align-self: stretch;
`;

const StBodyWrapper = styled.div`
  margin: 10px auto auto;
  max-width: 1200px;
  min-width: 800px;

  background-color: #ffb7d8;
`;

const StContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
