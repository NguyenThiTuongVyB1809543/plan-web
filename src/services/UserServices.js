import axios from 'axios';


const baseURL = 'localhost:27017/'; //mongodb chưa biết là đường dẫn nó như nào

//Rest full api
//post, get, put, path, delete
//post: thêm,
//get là lấy nhiều hoặc lấy 1,
//put là sửa hết các trường
//path là sửa 1 hoặc 2 trường
//delete là xóa

const addUser = (user) => {
    return axios.post(`${baseURL}`, { data : user });

}

//lấy danh sách khách hàng (get all)
const getAllUser = () => {
    return axios.get(`${baseURL}`);
}
//lấy khách hàng theo id (dùng cho edit) lấy 1 khách hàng
const getUserById = (userId) => {
    //localhost:27017/userId = '' 
    return axios.get(`${baseURL}/${userId}`);
}


// lấy khách hàng theo id (dùng cho update) update cho 1 khách hàng
const updateUser = (userId, newUser) => {
    //localhost:27017/userId = ''
    return axios.put(`${baseURL}/${userId}`, { data : newUser });
} 



//xóa theo id
const deleteUserById = (userId) => {
    return axios.delete(`${baseURL}/${userId}`);
}
//xóa tất cả
const deleteAll = () => {
    return axios.delete(`${baseURL}`);
}

export{
    addUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUserById,
    deleteAll
}