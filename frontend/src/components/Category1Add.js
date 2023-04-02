import { useState } from "react";
import axios from "axios";

export default function Category1Add(){

    const [name, setName] = useState("");

    function sendData(e){
        e.preventDefault();

        const newCategory = {name}

        axios.post("http://localhost:8070/category1/add", newCategory).then(()=>{
            alert("Category Added !");
            window.location.replace("https://6428f31db9346d21afc59301--stunning-pegasus-128f89.netlify.app/categories");
        }).catch((err)=>{
            alert(err);
        })

    }

    return(
        <div className="container">
            <br></br>
            <div className="row">
                <div className="col">
                <h1>Add a New Category</h1>
                </div>
            </div>
            <hr></hr>
            <br></br>
            <form onSubmit={sendData}>
                <div className="row">
                    <div className="col">
                        <label for="name" class="form-label">Category Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Eg: Men" required onChange={(e)=>{
                            setName(e.target.value);
                        }}/>
                    </div>
                    <div className="col">

                    </div>
                </div>
                <br></br>
                <br></br>
                <a href="/categories" className="btn btn-secondary">Back <i class="fa fa-reply"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button type="submit" className="btn btn-success">Submit <i class="fa fa-check"></i></button>
                <br></br>
                <br></br>
            </form>
        </div>
    )
}