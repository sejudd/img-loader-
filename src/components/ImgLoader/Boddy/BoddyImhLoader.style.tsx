import styled from "styled-components";

export const ContentBoddy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: solid 1px #8395a750;
  border-radius: 5px;
  height: 100%;
`;
export const Boddy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  min-width: 460px;
`;

export const AreaImg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;

  background-color: #f5846f1f;
  border-radius: 100%;
  width: 180px;
  height: 180px;

  .fill {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;
export const Line = styled.div`
  background-color: #f5846f;
  border-radius: 5px;
  width: 28px;
  height: 4px;
`;

export const AreaAddImg = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  gap: 10px;
  min-width: 100%;

  p {
    font-size: 10px;
  }
`;

export const AddImg = styled.div`
  position: relative;
  z-index: 20;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  height: 126px;

  background-color: #f5f7f7;
  border: dashed 1px #8395a7;
  border-radius: 3px;

 

  .input-file {
    z-index: 1;
    opacity: 0;
    width: 100%;
    height: 100%;
    background-color: #8395a7;
    cursor: pointer;
  }
  p {
    font-size: 16px;
  }
`;

export const InfoImg = styled.div`

  display: flex;
  align-items: center;
  

  background-color: #fff;
  border-radius: 3px;
  width: 420px;
  height: 40px;

  z-index: 0;
  p{
    font-size: 13px;
    margin-left: 15px;
  }
`;

export const ContainDataImg = styled.div`
  position: absolute;
  z-index: 0;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ActionImg = styled.p`
  z-index: 10;
`;
