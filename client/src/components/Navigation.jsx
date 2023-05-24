import {Link} from 'react-router-dom'

export function Navigation(){
    return(
        <div className='flex justify-between py-3'>
            <Link to="/delivery"><h1 className='font-bold text-3x1 mb-4'>Delivery App</h1></Link>
            <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
                <Link to="/delivery-create"><h2>Crear Entrega</h2></Link>
            </button>
        </div>
    )
}