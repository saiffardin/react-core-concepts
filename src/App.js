import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const products = [
        { name: "Photoshop", price: "$90.99" },
        { name: "Illustrator", price: "$100.99" },
        { name: "Premier Pro", price: "$130.99" },
        { name: "Premier Pro", price: "$130.99" },
    ];

    return (
        <div className="App">
            <header className="App-header">
                {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product> */}

                <Users></Users>

                <Counter></Counter>

                <ul>
                    {products.map((pd) => (
                        <Product name={pd.name} price={pd.price}></Product>
                    ))}
                </ul>

                <Person></Person>
                <Person></Person>
                <Person></Person>
            </header>
        </div>
    );
}

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    });

    return (
        <div>
            <h3>Dynamic Users: {users.length}</h3>

            <ul>
                {
                    users.map((obj) =>
                        (
                            <li>{obj.name}</li>
                        )
                    )
                }
            </ul>
        </div>
    );
}

function Counter(props) {
    const [count, setCount] = useState(10);
    const handleIncrease = () => setCount(count+1);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
}

function Product(props) {
    //   console.log(props);

    const productStyle = {
        margin: "10px",
        border: "1px solid gray",
        borderRadius: "5px",
        backgroundColor: "lightgray",
        height: "200px",
        width: "200px",
        float: "left",

        color: "black",
    };

    return (
        <div style={productStyle}>
            <h5>Name: {props.name}</h5>
            <h4>{props.price}</h4>
            <button>Buy Now</button>
        </div>
    );
}

function Person() {
    const personStyle = {
        border: "1px solid yellow",
        margin: "10px",
        padding: "10px",
    };

    return (
        <div style={personStyle}>
            <h1>Life is not that bad</h1>
            <h3>Relax</h3>
        </div>
    );
}

export default App;
