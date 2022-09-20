import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailPage() {
  let {id} = useParams();
  const [data, setdata] = useState({});
  useEffect(() => {
    getById(id);
  }, [id]);
   function getById(id) {
    axios.get(`https://northwind.vercel.app/api/products/${id}`).then((res) => {
      setdata(res.data);
    });
  }

  return (
    <div>
    {console.log(data)}
      <Navbar />
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">id : {data.id}</h5>
          <h5 className="card-title">name : {data.name}</h5>
          <div className="card-text">
            <p>quantityPerUnit : {data.quantityPerUnit}</p>
            <p>unitPrice : {data.unitPrice}</p>
            <p>unitsInStock : {data.unitsInStock}</p>
            <p>reorderLevel : {data.reorderLevel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
