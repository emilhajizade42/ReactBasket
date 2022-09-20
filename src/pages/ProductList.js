import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { basketContext } from '../App';
import Navbar from '../layouts/Navbar';

let URL = "https://northwind.vercel.app/api/products";
function ProductList() {
    const {basket,setbasket} = useContext(basketContext)
    let [data, setdata] = useState([])
    useEffect(() => {
        getAll()
    },[])
    function getAll() {
        axios.get(URL)
        .then(res=>setdata(res.data))
    }
    function addBasket(id) {
        console.log(data[id]);
        console.log(id);
        setbasket([...basket, data.find(d => d.id === id)])
        console.log(basket); 
    }
    data.sort((a, b) => (a.id - b.id))
  return (
    <>
        <Navbar/>
        <table className="table table-dark mt-5 container">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">quantityPerUnit</th>
                        <th scope="col">unitPrice</th>
                        <th scope="col">unitsInStock</th>
                        <th scope="col">name</th>
                        <th scope="col">reorderLevel</th>
                        <th scope="col">CARD</th>
                        <th scope="col">DETAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.quantityPerUnit}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.unitsInStock}</td>
                            <td>{item.name}</td>
                            <td>{item.reorderLevel}</td>
                            <td><button className='btn btn-success' onClick={()=>{addBasket(item.id)}}>ADD BASKET</button></td>
                            <td><Link className='btn btn-primary' to={`detail/${item.id}`} >GO DETAIL</Link ></td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </>
  )
}

export default ProductList