import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

export const CheckoutPageHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const CheckoutPageHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 18%;

  &:last-child {
    width: 10%;
  }
`;

export const TestWarningText = styled.label`
  color: red;
  text-align: center;
`;

export const TotalText = styled.label`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
