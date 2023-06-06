import React from "react";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  });
//   const [registerError, setRegisterError] = useState("");
const handleSubmit = (e) => {
    e.preventDefault()
    if (
      (user.id,
      user.name,
      user.email,
      user.subject,
      user.message
      )
    ) {
      return;
    } else {
    alert("Kindly fill all fields");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault()
    localStorage.setItem("userInfo", JSON.stringify(user));
    try {
      const res = await axios.post("https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries", user)
      console.log(res.data)
      setTimeout(function () {
                    window.location.reload();
                  }, 5000);
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="container">
      <form className="semi-container" onSubmit={handleRegister}>
        <h2 className="form-header">Contact Us</h2>

        <div className="form-box">
          <div className="form-box1">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              // id='name'
              placeholder="Enter your name"
              required
              className="input_name"
              defaultValue={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>

          <div className="form-box2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              // id='userEmail'
              placeholder="sarahtom@sample.com"
              className="input_email"
              required
              defaultValue={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="form-box3">
            <label>Subject</label>
            <input
              type="text"
              placeholder="Subject (optional)"
              className="input_subject"
              name="subject"
              defaultValue={user.subject}
              onChange={(e) => setUser({ ...user, subject: e.target.value })}
            />
          </div>
          <div className="form-box4">
            <label>Message</label>
            <textarea
              type="text"
              placeholder="Type..."
              className="input_message"
              name="message"
              required
              defaultValue={user.message}
              onChange={(e) => setUser({ ...user, message: e.target.value })}
            />
          </div>
          <div className="form-box5">
            <button
              type="submit"
              className="form-submit"
                onSubmit= {handleSubmit}
              >
              Submit
            </button>
            
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
