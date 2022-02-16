import React from "react";
import soccerimage from "../assets/soccer.jpg";
import footballimage from "../assets/football.jpg";
import tennisimage from "../assets/tennis.jpg";
import baseballimage from "../assets/baseball.jpg";

function Landing_page() {
  return (
    <>
      <div class="backgroundcontainer">
        <img class="cover" src={baseballimage} alt="landing page cover"></img>
        <div class="coverText">
          <h1>Get Coached Today</h1>
          <button class="signup_page_buttons">Sign up</button>
          <button class="login_page_buttons">Login</button>
        </div>
      </div>

      <div class="card-group">
        <div class="card">
          <img
            src={soccerimage}
            class="card-img-top"
            alt="Hollywood Sign on The Hill"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted"></small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src={footballimage}
            class="card-img-top"
            alt="Palm Springs Road"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted"></small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src={tennisimage}
            class="card-img-top"
            alt="Los Angeles Skyscrapers"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p class="card-text">
              <small class="text-muted"></small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing_page;
