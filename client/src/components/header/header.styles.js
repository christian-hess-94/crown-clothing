import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media screen and (max-width: 800px){
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  @media screen and (max-width: 800px){
    width: 50px;
    padding: 0px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px){
    width: 80%;
  }
`;

//Utiliza o CSS em varios objetos
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
  transition: 300ms ease all;

  :hover {
    transform: scale(1.1);
  }
`;
