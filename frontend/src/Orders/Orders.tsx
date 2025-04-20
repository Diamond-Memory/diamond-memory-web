import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

type Order = {
    _id: string;
    id: number;
    date: string;
    createdAt: string;
    total: number;
    totalPrice: number;
    user: { name: string };
    paid: boolean;
    paidAt: string;
    delivered: boolean;
    deliveredAt: string;
    actions: string;
}

const emptyOrder: Order[] = [];


function Orders() {
    const [orders, setOrders]: [Order[], (orders: Order[]) => void] = useState(emptyOrder);
    useEffect(() => {
        axios.get<Order[]>("https://localhost:7250/orders", {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => setOrders(response.data))
        .catch((error) => console.log(error));
    }, []);
    return (
        <div className="content content-margined">
            <div className="order-header">
                <h3>Orders</h3>
            </div>
            <div className="order-list">
                <table className="table">
< tbody>
    {orders.map((order) => (
        <tr key = {order._id}>
        <td>{order._id}</td>
        <td>{order.createdAt}</td>
        <td>{order.totalPrice}</td>
        <td>{order.user.name}</td>
        <td>{order.paid.toString()}</td>
        <td>{order.paidAt}</td>
        <td>{order.delivered.toString()}</td>
       <td>{order.deliveredAt}</td>
        <td>
            <Link to={"/order/" + order._id} className="button secondary">
            Details
            </ Link>
            </ td>
        </tr>
    ))}
</ tbody>
                </table>
                    
            </div>
        </div>);
        
};
export default Orders;

