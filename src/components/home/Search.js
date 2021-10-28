import './Home.css';
import React, { useState } from 'react';

function Search() {

    let [timkiem, setTimKiem] = useState('');

   
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(timkiem);
    }
    return(
        <div>
            
            
            <form onSubmit={handleSubmit}>
                <table className="table table-hover" >
                    <thead>
                        <tr>
                            <td><input type="search" 
                                    name="search" 
                                    id="input" 
                                    className="form-control" 
                                    value={timkiem} 
                                    required="required" 
                                    placeholder="Nhập từ khóa....."
                                    onChange={(event) => {setTimKiem(event.target.value)}}
                                />
                            </td>
                            <td>
                                <button type="submit" value="Submit" className="btn btn-primary" >Tìm Kiếm</button>
                            </td>
                        </tr>
                    </thead>
                </table>
            </form>
            
            
            
            
            
            
            
            
            
        </div>
    );
}



export default Search;