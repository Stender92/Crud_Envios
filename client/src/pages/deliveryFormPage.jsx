import { useEffect } from 'react';
import { set, useForm } from 'react-hook-form';
import { createDeliverys, deleteDeliverys, updateDeliverys, getDelivery } from '../api/delivery.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function DeliveryFormPage(){
    const{
      register,
      handleSubmit,
      formState: { errors },
      setValue
    } = useForm();
    const navigate = useNavigate();
    const params = useParams()
    
    const onSubmit = handleSubmit(async data=> {
      if (params.id) {
        updateDeliverys(params.id, data)
        toast.success('Entrega actualizada!', {
          postion : "bottom-right",
          style : {
            background: "#101010",
            color: "#fff"
          }
        })
      } else {
        await createDeliverys(data);
        toast.success('Entrega creada!', {
          postion : "bottom-right",
          style : {
            background: "#101010",
            color: "#fff"
          }
        })
      }
      navigate("/delivery");
  });

  useEffect(() => {
    async function loadDelivery() {
      if(params.id) {
        const {data} = await getDelivery(params.id)
        setValue('id', data.id)
        setValue('item', data.item)
        setValue('direction', data.direction)
        setValue('transportist', data.transportist)
      }
    }
    loadDelivery()
  }, [])

  return (
    <div className='max-w-xl mx-auto'>
      <form onSubmit={onSubmit}>
      <input type="text" placeholder="Id Entrega"
        {...register("id", {required: true})}
        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
      />
      {errors.item && <span>Se necesita un numero de entrega</span>}
      <input type="text" placeholder="Nombre producto"
        {...register("item", {required: true})}
        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
      />
      {errors.item && <span>Se necesita un item</span>}
      <input type="text" placeholder="Dirección"
        {...register("direction", {required: true})}
        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
      />
      {errors.direction && <span>Se necesita la dirección del envio</span>}
      <input type="text" placeholder="Transportista"
        {...register("transportist", {required: true})}
        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
      />
      {errors.transportist && <span>Se necesita un transportista</span>}
        <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Guardar</button>
      </form>

      {params.id && <div className='flex justify-end'>
        <button 
      className='bg-red-500 p-3 rounded-lg w-48 mt-3'
      onClick={async () =>{
        const accepted = window.confirm('¿Estás seguro de eliminar esta entrega?')
        if (accepted) {
          await deleteDeliverys(params.id);
          toast.success('Entrega eliminada!', {
            postion : "bottom-right",
            style : {
              background: "#101010",
              color: "#fff"
            }
          })
          navigate("/delivery");
        }
      }}>Delete</button>
        </div>}
    </div>
    )
  }