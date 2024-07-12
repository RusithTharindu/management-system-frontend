"use client";
import { useState } from "react";
import axios from "axios";

const AddClients = () => {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newClient = {
            name,
            company,
            email
        }
        axios.post("http://localhost:8070/client/add", newClient).then(() => {
            alert(`Client ${name} added successfully to the Database`);
        }).catch((err) => {
            alert(err.message);
        })
    }
    
    return ( 
        <div className="container">
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <p className="text-[25px] font-medium my-2">Enter your client information</p>
                <form action="" className="w-full" onSubmit={handleSubmit}>
                    <label htmlFor="name">Client's Name</label>
                    <input type="text" name="name" id="name" className="w-full p-2 my-2 border border-gray-300 rounded-md" onChange={(e) => {setName(e.target.value)}}/>
                    <label htmlFor="company">Client's Company Name</label>
                    <input type="text" name="company" id="company" className="w-full p-2 my-2 border border-gray-300 rounded-md" onChange={(e) => {setCompany(e.target.value)}}/>
                    <label htmlFor="email">Client's Email</label>
                    <input type="text" name="email" id="email" className="w-full p-2 my-2 border border-gray-300 rounded-md" onChange={(e) => {setEmail(e.target.value)}}/>
                    <button type="submit" className="bg-blue-500 rounded-md p-3 text-white">Submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddClients;