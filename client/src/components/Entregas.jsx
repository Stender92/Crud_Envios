import { useEffect, useState } from "react"
import { getAllDeliverys } from "../api/delivery.api"
import { EntregasTarjeta } from "./EntregasTarjeta";

export function Entregas(){
  const [deliverys, setDeliverys] = useState([])

  useEffect(() => {
    async function loadDelivery(){
      const res = await getAllDeliverys();
      setDeliverys(res.data);
    }
    loadDelivery();
  }, []);

  return <div className="grid grid-cols-1 gap-1">
    {deliverys.map(deliverys => (
        <EntregasTarjeta key={deliverys.id} deliverys={deliverys}/>
    ))}
  </div>;
}