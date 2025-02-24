import React from 'react';

const fullfillments = [
    {
        _id: 1,
        orderNumber: 1001,
        name: "Fullfillment 1",
        address: "1234 Apple St",
        city: "New York",
        state: "NY",
        postalCode: "94123",
        country: "USA",
        status: "Shipped"
    },
    {
        _id: 2,
        orderNumber: 1002,
        name: "Fullfillment 2",
        address: "1234 Main St",
        city: "Columbus",
        state: "OH",
        postalCode: "12548",
        country: "USA",
        status: "Unshipped"
    },
];

const Fullfillment = () => {
    return (
        <div className='fullfillment'>
            <h2>Order Fullfillments</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Postal Code</th>
                        <th>Country</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {fullfillments.map((fullfillment) => (
                        <tr key={fullfillment._id}>
                            <td>{fullfillment.orderNumber}</td>
                            <td>{fullfillment.name}</td>
                            <td>{fullfillment.address}</td>
                            <td>{fullfillment.city}</td>
                            <td>{fullfillment.state}</td>
                            <td>{fullfillment.postalCode}</td>
                            <td>{fullfillment.country}</td>
                            <td>{fullfillment.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Fullfillment;