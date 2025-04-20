import Orders from "./Orders"; // Assuming OrdersData is the correct file exporting an array of orders
import { useParams } from "react-router-dom";

function OrderDetail() {
    const { id } = useParams<{ id: string }>();
    const order = Orders.find((o) => o._id === parseInt(id as string, 10)); // Added radix for parseInt

    return (
        <div>
            <h3>order name: {order?.user.name}</h3>
        </div>
    );
}

export default OrderDetail;
