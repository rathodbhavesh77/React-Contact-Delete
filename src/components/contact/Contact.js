import "./Contact.css";
let numberofContact = 5;
const profile3 = require("./Jess.jpg");
const profile2 = require("./Jerry.jpg");
const profile1 = require("./Tom.jpg");
const profile4 = require("./Harrison.jpg");
const profile5 = require("./Peb.jpg");
function Contact() {
  let clicked = false;
  return (
    <div>
      <h1>{numberofContact} Contacts</h1>
      <div className="Contact-details">
        <div className="inline-div">
          <img src={profile1} alt="imgJess" />
          <p>
            Jess Yates
            <br />
            <span className="years">29 years</span>
          </p>
        </div>
        <div className="inline-div">
          <img src={profile2} alt="imgJerry" />
          <p>
            Jerry Hogan
            <br />
            <span className="years">32 years</span>
          </p>
        </div>
        <div className="inline-div">
          <img src={profile3} alt="imgTom" />
          <p>
            Tom Hans
            <br />
            <span className="years">36 years</span>
          </p>
        </div>
        <div className="inline-div">
          <img src={profile4} alt="igHarri" />
          <p>
            Harrison Walsh
            <br />
            <span className="years">34 years</span>
          </p>
        </div>
        <div className="inline-div">
          <img src={profile5} alt="imgPeb" />
          <p>
            Peb Gardner
            <br />
            <span className="years">29 years</span>
          </p>
        </div>
      </div>
      <button
        onClick={(e) => {
          if (clicked === false) {
            e.target.parentElement.firstChild.innerText = "0 Contact";
            e.target.parentElement.firstElementChild.nextSibling.remove();
            return (clicked = true);
          }
        }}
      >
        Clear All
      </button>
    </div>
  );
}
export default Contact;
