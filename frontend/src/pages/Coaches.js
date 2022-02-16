import React from "react";

function coaches(){
    return (
        <div className="row row-cols-1 row-cols-3 g-2">
        <div className="col">
        <div className="card h-100">
         <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
            className="card-img-top"
            alt="Skyscrapers"/>
      <div className="card-body">
        <h5 className="card-title">Coach Clay</h5>
        <p className="card-text">
          Location: Daytona, FL 
          <br></br>
          Sports: Basketball, Soccer, Tennis, Boxing
        </p>
      </div>
      {/* //start progress bar for coach clay */}
      <div className="progress" style={{ height: 20 }}>
    <div className="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow={25} aria-valuemin={0}
    aria-valuemax={100} > Basketball: 95% </div>
    </div>
    <div className="progress" style={{ height: 20 }}>
         <div className="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow={25} aria-valuemin={0}
            aria-valuemax={100} > Soccer: 85% </div>
         </div>
         <div className="progress" style={{ height: 20 }}>
            <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow={25} aria-valuemin={0}
                aria-valuemax={100} > Tennis: 75% </div>
            </div>
            <div className="progress" style={{ height: 20 }}>
                <div className="progress-bar" role="progressbar" style={{ width: "65%" }} aria-valuenow={25} aria-valuemin={0}
                    aria-valuemax={100} > Boxing: 65% </div>
            </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Mike_Tyson_2019_by_Glenn_Francis.jpg"
        className="card-img-top"
        alt="Mike Tyson"
      />
      <div className="card-body">
        <h5 className="card-title">Coach Tyson</h5>
        <p className="card-text">
          Location: Los Angeles, CA 
          <br></br>
          Sports: Boxing, Football, Soccer, Baseball
        </p>
      </div>
      <div className="progress" style={{ height: 20 }}>
  <div
    className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow={25} aria-valuemin={0}
    aria-valuemax={100} > Boxing: 100% </div>
</div>
<div className="progress" style={{ height: 20 }}>
  <div
    className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow={25} aria-valuemin={0}
    aria-valuemax={100} > Football: 60% </div>
</div>
<div className="progress" style={{ height: 20 }}>
  <div
    className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0}
    aria-valuemax={100} > Soccer: 25% </div>
</div>
<div className="progress" style={{ height: 20 }}>
  <div
    className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow={25} aria-valuemin={0}
    aria-valuemax={100} > Baseball: 70% </div>
</div>
    
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img
        src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2016%2F06%2F04005032%2Fskyword-image-293478.jpg"
        className="card-img-top"
        alt="Jillian Michaels"
      />
      <div className="card-body">
        <h5 className="card-title">Coach Jillian</h5>
        <p className="card-text">
          Location: Dallas, TX 
          <br></br>
          Training areas: agility, endurance, strength
        </p>
        <div className="progress" style={{ height: 20 }}>
  <div
    className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow={25} aria-valuemin={0}
    aria-valuemax={100} > Agility: 90% </div>
</div>
<div className="progress" style={{ height: 20 }}>
  <div
    className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow={25} aria-valuemin={0}
    aria-valuemax={100} > Endurance: 90% </div>
</div>
<div className="progress" style={{ height: 20 }}>
  <div
    className="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow={25} aria-valuemin={0}
    aria-valuemax={100} > Strength: 95% </div>
</div>
    </div>
  </div>
</div>
</div>
    )
}
export default coaches;