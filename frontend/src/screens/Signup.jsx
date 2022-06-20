import React from 'react'
import { Nav } from '../components/Nav'
import log from "../images/log.png"
import { useNavigate} from 'react-router'
import { Link } from 'react-router-dom'
import "../App.css"


const Signup = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("");
  return (
    <div>
    <Nav></Nav>
    <div class='container'>

      <div class="row loginb gx-4">

<div class='col '>
<img src={log} class="img-fluid" alt="" />
</div>

<div class="col ">

<h2 className='lead'>Sig Up to continue</h2>


<div>
<form action="">
                        <div class="mb-3">
                            <label for="first-name" class="col-form-label">
                           Firstname
                        </label>

                            <input onChange={(e)=>setName(e.target.value)} value={name} type="text" class="form-control" id="first-name"/>

                        </div>
                      
                        <div class="mb-3">
                            <label for="last-name" class="col-form-label">
                           Email
                        </label>

                            <input value={email} onChange={(e)=>{
                                setEmail(e.target.value);
                            }} type="text" class="form-control" id=" last-name"/>

                        </div>
                        <div class="mb-3">
                            <label for="last-name" class="col-form-label">
                           Password
                        </label>

                            <input onChange={(e)=>{setpassword(e.target.value)}} value={password} type="text" class="form-control" id=" last-name"/>

                        </div>
                    </form>

                    <div class="">
                    <button type="button" class="btn enW btn-primary">Register</button>
                    </div>
<div className="d-flex flex-row justify-content-between py-4">

<div class="p-2">
    <a href="">Forgot password?</a>
</div>
<Link to="/login">
<div class="p-2">
    <a href="">ALready have an account?sign_in</a>
  </div>

</Link>
  
</div>
                  
</div>

</div>

      </div>


        </div>

   
    </div>
  )
}

export default Signup