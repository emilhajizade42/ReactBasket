import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { basketContext } from '../App'
import Navbar from '../layouts/Navbar'

let fakeData = [{id: 4,
  supplierId: 2,
  categoryId: 3,
  quantityPerUnit: "48 - 6 oz jars",
  unitPrice: 22,
  unitsInStock: 53,
  unitsOnOrder: 0,
  reorderLevel: 0,
  discontinued: true,
  name: "Chef Anton's Cajun Seasoning",
  },
  {id: 5,
    supplierId: 12,
    categoryId: 2223,
    quantityPerUnit: "2 - 6 oz a",
    unitPrice: 222,
    unitsInStock: 513,
    unitsOnOrder: 0,
    reorderLevel: 0,
    discontinued: true,
    name: "Chef  AAA",
    },]

function CartPage() {
  const {basket,setbasket} = useContext(basketContext)
    let [data, setdata] = useState(fakeData)
    useEffect(() => {
    },[])
    function removeItem(id) {
      setbasket(basket.filter(item=>item.id !== id))
    }
    
    data.sort((a, b) => (a.id - b.id))
  return (
    <div>
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
                        <tr key={item.id+"s"}>
                            <td >{item.id}</td>
                            <td >{item.quantityPerUnit}</td>
                            <td >{item.unitPrice}</td>
                            <td >{item.unitsInStock}</td>
                            <td >{item.name}</td>
                            <td >{item.reorderLevel}</td>
                            <td ><button className='btn btn-danger' onClick={()=>{removeItem(item.id)}}>REMOVE BASKET</button></td>
                            <td ><Link className='btn btn-primary' to={`detail/${item.id}`} >GO DETAIL</Link ></td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}

export default CartPage