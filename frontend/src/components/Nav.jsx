import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg navbar-light b-ack">
    <div class="container-fluid">
        <a href="#" class="navbar-brand">
<h3 class='text-primary'>Koliva's School</h3>
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mlinks  ps-4 " id="navbarCollapse">
            <div class="navbar-nav  text-light ms-auto">
            
                <a href="/" class="nav-item me-4 text-light nav-link active">Home</a>
               
              
                <a href="#" class="nav-item me-4 text-light nav-link">Profile</a>
                <a href="#" class="nav-item me-4 text-light nav-link">Messages</a>
                <a href="#" class="nav-item me-4 text-light nav-link" tabIndex="-1">Reports</a>
            </div>
           
            <div class="navbar-nav me-4">
                <a href="/login" class="nav-item nav-link text-light">Login</a>
            </div>
         
           
        </div>
    </div>
</nav>
    </div> )
}
