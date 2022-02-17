import React from "react";
import "./component/new.css";

function linked() {
  return (
    <div className="screen">
      <form className="screen_form">
        <h3 className="screen_title">Welcome Coach</h3>

        <div className="form-all">
          <label htmlFor="name">Tell us about your coaching experience</label>
          <textarea
            name="msg"
            id="msg"
            cols="40"
            rows="5"
            placeholder="Type here"
          ></textarea>
        </div>

        <div className="form-all">
          <label for="date">Date ready to start:</label>
          <input id="date" type="date" checked />
        </div>

        <div className="form-all">
          <label for="file">Upload resume</label>
          <input id="file" type="file"></input>
        </div>

        <div>
          <label for="msg">Check the sports you will like to coach</label>
          <label for="radio-basketball">Basketball</label>
          <input type="radio" name="" id="radio-basketball"></input>

          <label for="radio-football">Football</label>
          <input type="radio" name="" id="radio-football"></input>
          <label for="radio-soccer">Soccer</label>
          <input type="radio" name="" id="radio-soccer"></input>

          <label for="radio-volleyball">Volleyball</label>
          <input type="radio" name="" id="radio-volleyball"></input>

          <label htmlFor="name">Other sports not mentioned</label>
          <textarea
            name="msg"
            id="msg"
            cols="40"
            rows="3"
            placeholder="Tell us about other sports you are interested in coaching"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Click here
        </button>
      </form>
    </div>
  );
}

export default linked;
