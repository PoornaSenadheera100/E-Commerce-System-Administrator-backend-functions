import axios from "axios";
import { useEffect, useState } from "react";

function Category1All(){
    const [categories, setCategories] = useState([]);
    
    useEffect(()=>{
        function getCategories(){
            axios.get("http://localhost:8070/category1/").then((res)=>{
                console.log(res.data);
                setCategories(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getCategories();
    }, [])

    return(
        <div>
            <br></br>
            
            <div>
                <div style={{width:"90%", margin:"auto"}}>

                    <div style={{marginRight:"0px", marginLeft:"auto", width:"30%"}}>
                        
                        <form class="d-flex" role="search">
                            <a style={{marginRight:"0px", marginLeft:"auto"}} href="/categories/add" className="btn btn-primary" >Add New Category <i class="fa fa-plus"></i></a>
                        </form>
                    </div>

                    <br></br>
                    <h1>Main Categories</h1>
                    <br></br>
                    <table className="table table-borderless">
                        <tr>
                            <th><center>Category Name</center></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>

                        <tbody>
                            {
                                categories.map((category)=>(
                                    <tr>
                                        <td><center>{category.name}</center></td>
                                        <td>
                                            <button className="btn btn-warning" onClick={()=>{
                                                window.location.replace(`http://localhost:3000/category/update/${category._id}`);
                                            }}>View <i class="fa fa-pencil"></i></button>
                                        </td>
                                        <td>
                                            <button className="btn btn-success" onClick={()=>{
                                                window.location.replace(`http://localhost:3000/category/update/${category._id}`);
                                            }}>Update <i class="fa fa-pencil"></i></button>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={()=>{
                                                window.location.replace(`http://localhost:3000/category/delete/${category._id}`);
                                            }}>Delete <i class="fa fa-trash-o fa-lg"></i></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default Category1All;