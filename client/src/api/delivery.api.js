import axios from 'axios'

const deliveryApi = axios.create({
    baseURL: 'http://localhost:8000/delivery/api/v1/delivery/'
})

export const getAllDeliverys = () => deliveryApi.get("/");

export const createDeliverys = (deliverys) => deliveryApi.post("/", deliverys);

export const getDelivery = (id) => deliveryApi.get(`/${id}`)

export const deleteDeliverys = (id) => deliveryApi.delete(`/${id}`)

export const updateDeliverys = (id, delivery) => deliveryApi.put(`/${id}/ `,
delivery)