import styled from "styled-components";

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    .content {
      opacity: 0.9;
    }
    .background-image {
      transform: scale(1.1);
      transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }
  &.large {
    height: 380px;
    
    @media screen and (max-width: 800px){
        height: 300px;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    /* margin-left: 7.5px; */
  }

  @media screen and (max-width: 800px){
    height: 300px;
  }
`;
export const MenuItemImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const MenuItemContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const MenuItemTitleText = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const MenuItemSubtitleText = styled.label`
  font-weight: lighter;
  font-size: 16px;
`;
