import { useNavigate } from 'react-router-dom';

export function EntregasTarjeta({deliverys}){
    const navigate = useNavigate()
    return(
        <div className='bg-zinc-800 p-3 hover:bgzinc-700 hover:cursor-pointer'
            onClick={() => {
                navigate(`/delivery/${deliverys.id}`)
            }}
        >
            <h3 className='font-bold uppercase'><p>Producto: {deliverys.item}</p></h3>
            <h3>Direccion: {deliverys.direction}</h3>
            <h3>Transportista: {deliverys.transportist}</h3>
            <hr></hr>
        </div> 
    )
}