import { useState } from "react";
import type { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";
interface OrdersBoardProps {
  title: string;
  icon: string;
  orders: Order[];
}
export function OrdersBoard({icon, title, orders}: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenModal() {
    setIsModalVisible(true);
  }
  return (
    <Board>
      <OrderModal visible={isModalVisible}/>

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      <OrdersContainer>
        {orders.length > 0 ? (
          orders.map(order => (
            <button type="button" key={order._id} onClick={handleOpenModal}>
              <strong>Mesa {order.table}</strong>
              <span>
                {order.products.length} produto(s)
              </span>
            </button>
          ))
        ) : (
          <p>Nenhum pedido</p>
        )}
      </OrdersContainer>
    </Board>
  );
}
