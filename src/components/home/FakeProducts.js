import React, { Component } from 'react';
class FakeProducts extends Component{

    render(){
        return (
            <div>
                <a href="/home/xemchitiet">
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <div className="thumbnail">
                            
                            <img className="imgTree" src={this.props.image}  alt = {this.props.children}/>
                            <div className="caption">
                                <center>
                                    <h4 className = "name_price">{this.props.children}</h4>
                                    <h4 className = "name_price">{this.props.price}</h4>
                                </center>
                                
                                
                            </div>
                        </div>
                    </div>
                </a>
                


                
                {/* <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    <a href="/#" className="thumbnail"/>
                    <img className="imgTree" src={this.props.image} alt = {this.props.children}/>
                    <h3>{this.props.children}</h3>
                    <h3>{this.props.price}</h3>
                    
                </div> */}
                




            </div>
        );
    }
}
export default FakeProducts;