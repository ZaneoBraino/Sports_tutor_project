import React from "react";
import soccerimage from "../assets/soccer.jpg";
import footballimage from "../assets/football.jpg";
import coachimage from "../assets/coach.jpg";
import baseballimage from "../assets/baseball.jpg";
import logoimage from "../assets/frontpage.svg";
import { Link } from "react-router-dom";
function Landing_page() {
  return (
    <>
      <div class="backgroundcontainer">
        <img class="cover" src={baseballimage} alt="landing page cover"></img>
        <img class="coverlogo" src={logoimage} alt="landing page logo"></img>
        <div class="coverText">
          <h1>Get Coached Today</h1>
        </div>
      </div>

      <div class="inbetweenText">
        <h2>We're here for you to be a coach or to get coached!</h2>
        <p>
          We are an orginization to set up athletes like yourself to improve
          upon your skills or if you're a already seasoned player to pass on you
          knowledge and make a bit of money while you're at it.
        </p>
        <p>
          Down below you'll find links to either login or sign up as a new user
          in our program.
        </p>
      </div>

      <div class="card-group">
        <div class="card">
          <img
            src={soccerimage}
            class="card-img-top"
            alt="Hollywood Sign on The Hill"
          />
          <div class="card-body">
            <h5 class="card-title">Athletes</h5>
            <p class="card-text">
              If you're an athlete, you can click here to sign up and get
              yourself a coach today!
            </p>
            <Link to="/Register">
              <button class="signup_page_buttons">Sign up</button>
            </Link>

            <Link to="/Login">
              <button class="login_page_buttons">Login</button>
            </Link>
            <p class="card-text">
              <small class="text-muted"></small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src={footballimage}
            class="card-img-center"
            alt="Palm Springs Road"
          />
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>

            <p class="card-text">
              <small class="text-muted"></small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src={coachimage}
            class="card-img-top"
            alt="Los Angeles Skyscrapers"
          />
          <div class="card-body">
            <h5 class="card-title">Coaches</h5>
            <p class="card-text">
              If you're a coach looking to make some money, you can sign up
              here!
            </p>
            <Link to="/SignUp">
              <button class="signup_page_buttons">Sign up</button>
            </Link>
            <Link to="/Login">
              <button class="login_page_buttons">Login</button>
            </Link>
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
