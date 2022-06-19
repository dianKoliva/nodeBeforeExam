import React from "react";
import "../App.css"
import { Nav } from "../components/Nav";
import study from "../images/study.png"
function Home(){

    return(
        <div >
<Nav></Nav>
<div className="container">
    <div className="row gy-4 gx-4 homeb">
        <div className="col my-4  pt-4">
            <h1>Become a KS member</h1>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit cupiditate quod, ratione animi, voluptatum maiores nulla molestias voluptatibus repellendus laborum blanditiis nostrum quae itaque vero assumenda recusandae repudiandae natus totam expedita mollitia incidunt quia eos voluptates. Quisquam quo, iste nihil delectus illo commodi veniam vitae quis explicabo dolor sed eum qui consequatur, repudiandae similique itaque optio quas quasi illum nisi error dolore perferendis libero labore. Enim architecto soluta totam! Exercitationem quas quo earum sequi odio laborum unde quasi nostrum totam. Earum, quisquam? Nesciunt autem asperiores ea pariatur consequuntur deserunt incidunt laudantium corporis sunt odit nulla, quisquam, assumenda molestiae quis omnis?

            </p>
<div className="row">
<div className="col-6">
<button className="btn btn-primary btn-md enW mt-4">Enroll</button>

</div>

</div>

        </div>
        <div className="col">
            
<img src={study} className="img-fluid mt-4 ms-auto " alt="" />
        </div>

    </div>
   
</div>
        </div>
    )
}
export default Home;