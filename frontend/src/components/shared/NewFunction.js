import { Card, MessageBox } from "../../Imports";

export default function newFunction(order) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Shipping</Card.Title>
        <Card.Text>
          <strong>Name: </strong> {order.shippingAddress.fullName} <br />
          <strong>Address: </strong> {order.shippingAddress.address},
          {order.shippingAddress.city} ,{order.shippingAddress.country}
        </Card.Text>
        {order.isDelivered ? (
          <MessageBox variant="success">
            Delivered at {order.deliveredAt}
          </MessageBox>
        ) : (
          <MessageBox variant="danger">Not Delivered</MessageBox>
        )}
      </Card.Body>
    </Card>
  );
}
