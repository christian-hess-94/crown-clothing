import styled from "styled-components";

const sectionWidth = "18%";
export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const CheckoutItemImageContainer = styled.div`
  width: ${sectionWidth};
  padding-right: 15px;
`;
export const CheckoutItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const Description = styled.span`
  width: ${sectionWidth};
`;

export const QuantityDescription = styled.span`
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  transition: 300ms ease all;
  width: ${sectionWidth};
`;

export const QuantityArrow = styled.div`
  color: gray;
  cursor: pointer;
  margin: 0 10px;
  transition: 300ms ease all;

  &:hover {
    transform: scale(1.1);
    color: black;
    font-weight: bolder;
  }
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  transition: 300ms ease all;
  font-weight: bolder;

  &:hover {
    transform: scale(1.1);
    color: red;
  }
`;
