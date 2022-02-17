import React from "react";
import { coachList } from "./component/coachList";


function Coaches() {      
    let cardsArray = coachList;
    const mappedCard = cardsArray.map(cardMapper);
    function cardMapper (aCoach) {
        let results = (            
            <div className="col row-col-xl-4">
                <div className="card">
                    <div className="card h-100">
                        <img src={aCoach.img} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Coach {aCoach.name}</h5>
                        <p className="card-text">{aCoach.Location}
                        <br></br>
                        {aCoach.Sports}
                        </p>
                        <div>
                        <a class="btn btn-outline-light btn-floating m-1" href={aCoach.Twitter} role="button" >
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a class="btn btn-outline-light btn-floating m-1" href={aCoach.Instagram} role="button" >
                            <i class="fa fa-instagram"></i>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div> 
    )
    return results;
    };
  
    return (
        <div class="container-fluid justify-center">
            <h1>Our Amazing Coaches</h1>
            <div class="row">
                {mappedCard}
            </div>
        </div>
    );
  };
  export default Coaches;