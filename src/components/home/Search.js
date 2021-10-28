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


// class Search extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//                         tim_kiem: ''
//                     };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
      
//     handleChange(event) {
//         var  target = event.target;
//         var  name = target.name;
//         var  value = target.type === 'checkbox' ? target.checked : target.value;
//         this.setState({
//             [name] : value
//         }

//         );


//     }


    
//     handleSubmit(event) {
//         event.preventDefault();
//         console.log(this.state);
//     }
//     render(){
//         // var {tim_kiem} = this.state;
//         return(
//             <div>
                
                
//                 <form onSubmit={this.handleSubmit}>
//                     <table className="table table-hover" >
//                         <thead>
//                             <tr>
//                                 <td><input type="search" 
//                                         name="tim_kiem" 
//                                         id="input" 
//                                         className="form-control" 
//                                         // value="tim_kiem" 
//                                         required="required" 
//                                         placeholder="Nhập từ khóa....."
//                                         onChange={this.handleChange}
//                                     />
//                                 </td>
//                                 <td>
//                                     <button type="submit" value="Submit" className="btn btn-primary" >Tìm Kiếm</button>
//                                 </td>
//                             </tr>
//                         </thead>
//                     </table>
//                 </form>
                
                
                
                
                
                
                
                
                
//             </div>
//         );
//     }
// }
export default Search;