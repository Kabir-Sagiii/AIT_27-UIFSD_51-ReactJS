import { useState } from "react";
import "./Profile.css";
function Profile() {
  const [theme, setTheme] = useState("lightTheme");
  const [label, setLabel] = useState("Check to switch Dark Mode");

  const changeTheme = (event) => {
    if (event.target.checked) {
      setTheme("darkTheme");
      setLabel("Uncheck to switch Light Mode");
    } else {
      setTheme("lightTheme");
      setLabel("Check to switch Dark Mode");
    }
  };

  return (
    <div className="profile">
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/029/891/975/non_2x/business-american-man-in-light-cream-ai-generative-free-photo.jpg"
          width={"100%"}
          height={"100%"}
          alt=""
        />
      </div>
      <div className={theme}>
        <dl>
          <dt>
            <strong>User Name</strong>
          </dt>
          <dd>Aditya Verma</dd>

          <dt>
            <strong>Email Id</strong>
          </dt>
          <dd>adityaverma@gmail.com</dd>

          <dt>
            <strong>Gender</strong>
          </dt>
          <dd>male</dd>

          <dt>
            <strong>Bio</strong>
          </dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, saepe ratione? Quia omnis qui fuga quod officia
            temporibus consequuntur? Odio nostrum dicta, recusandae a cupiditate
            quidem? Exercitationem aliquam error tempore.
          </dd>
        </dl>
        <button>Update Profile</button>
        <br />
        <br />
        <input type="checkbox" onChange={changeTheme} />
        &nbsp;&nbsp;
        <label htmlFor="">{label}</label>
      </div>
    </div>
  );
}

export default Profile;
