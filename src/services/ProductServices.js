import axios from 'axios';


const baseURL = 'localhost:27017/'; //mongodb chưa biết là đường dẫn nó như nào

//Rest full api
//post, get, put, path, delete
//post: thêm,
//get là lấy nhiều hoặc lấy 1,
//put là sửa hết các trường
//path là sửa 1 hoặc 2 trường
//delete là xóa

const addProduct = (product) => {
    return axios.post(`${baseURL}`, { data : product });

}

//lấy danh sách sản phẩm (get all)
const getAllProduct = () => {
    return axios.get(`${baseURL}`);
}
//lấy sản phẩm theo id (dùng cho edit) lấy 1 sản phẩm
const getProductById = (productId) => {
    //localhost:27017/productId = '' 
    return axios.get(`${baseURL}/${productId}`);
}

//lấy sản phẩm theo loại lấy nhiều sản phẩm
const getProductByCategory = (categoryOfPlant) => {
    //localhost:27017/productId = 'loại' 
    return axios.get(`${baseURL}/${categoryOfPlant}`);
}

// lấy sản phẩm theo id (dùng cho update) update cho 1 sản phẩm
const updateProduct = (productId, newProduct) => {
    //localhost:27017/productId = ''
    return axios.put(`${baseURL}/${productId}`, { data : newProduct });
} 



// //xóa theo id
// const deleteProductById = (productId) => {
//     return axios.delete(`${baseURL}/${productId}`);
// }
// //xóa tất cả
// const deleteAll = () => {
//     return axios.delete(`${baseURL}`);
// }

export{
    addProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    getProductByCategory
    // deleteProductById,
    // deleteAll
}