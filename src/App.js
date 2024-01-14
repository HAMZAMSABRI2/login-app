
import './App.css';
import {useState} from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';


function App() {
    const [form , setForm]= useState({
        name:"",
        email:"",
        password:"",
        filiere:""
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }


    const handleSubmit = async (e) =>{
        e.preventDefault();

    
    try{
        const response = await axios.post("http://127.0.0.1:8000/api/register",form)
        setForm({
            name: "",
            email: "",
            password: "",
            filiere: ""
        });
        toast.success('Successfully toasted!')
    }catch (e) {
        console.error('Registration error:', e);
        toast.error("This didn't work.")

    }
    }
  return (
    <div className="App">
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
        <div className="container">
            <div className="image">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/008/040/410/non_2x/school-logo-design-template-free-vector.jpg"
                    alt="" width={130}/>
            </div>
            <form onSubmit={handleSubmit}>


                <div className="content">
                    <input type="text" name="name" value={form.name} placeholder="saisie votre nom" onChange={handleChange}/>
                </div>
                <div className="content">
                    <input type="email" name="email" value={form.email} placeholder="saisie votre email" onChange={handleChange}/>
                </div>
                <div className="content">
                    <input type="password" name="password" value={form.password} placeholder="saisie votre password" onChange={handleChange}/>
                </div>
                <div className="content">
                    <input type="text" name="filiere" value={form.filiere} placeholder="saisie votre filiere" onChange={handleChange}/>
                </div>


                <button type="submit">Envoyer</button>
            </form>
        </div>
    </div>
  );
}

export default App;
