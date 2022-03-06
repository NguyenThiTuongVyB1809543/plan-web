import axios from 'axios';


const baseURL = 'localhost:27017/'; //mongodb chưa biết là đường dẫn nó như nào

//Rest full api
//post, get, put, path, delete
//post: thêm,
//get là lấy nhiều hoặc lấy 1,
//put là sửa hết các trường
//path là sửa 1 hoặc 2 trường
//delete là xóa

const addOrder = (order) => {
    return axios.post(`${baseURL}`, { data : order });

}

//lấy danh sách các đơn hàng (get all)
const getAllOrder = () => {
    return axios.get(`${baseURL}`);
}
//lấy đơn hàng theo id (dùng cho edit) lấy 1 đơn hàng
const getOrderById = (orderId) => {
    //localhost:27017/orderId = '' 
    return axios.get(`${baseURL}/${orderId}`);
}


// lấy đơn hàng theo id (dùng cho update) update cho 1 đơn hàng
const updateOrder = (orderId, newOrder) => {
    //localhost:27017/productId = ''
    return axios.put(`${baseURL}/${orderId}`, { data : newOrder });
} 



//xóa theo đơn hàng id
const deleteOrderById = (orderId) => {
    return axios.delete(`${baseURL}/${orderId}`);
}
//xóa tất cả
const deleteAll = () => {
    return axios.delete(`${baseURL}`);
}

export{
    addOrder,
    getAllOrder,
    getOrderById,
    updateOrder,
    deleteOrderById,
    deleteAll
}