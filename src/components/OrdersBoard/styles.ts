import styled from "styled-components";

export const Board = styled.div`
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  header {
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  align-items: center;

  button {
    background: #fff;
    border: 1px solid rgba(204, 204, 204, 0.5);
    height: 128px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 14px;
      color: #666;
    }

    & + button {
      margin-top: 16px;
    }
  }
`;
