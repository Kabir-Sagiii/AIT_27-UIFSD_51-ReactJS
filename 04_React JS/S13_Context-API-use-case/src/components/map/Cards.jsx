import { useState } from "react";

function Cards() {
  const [state, setState] = useState([
    {
      image:
        "https://img.freepik.com/premium-photo/professional-indian-female-headshots-business-corporate-women_203363-204.jpg?w=2000",
      name: "sneha",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/professional-woman-corporate-setting_1256099-2381.jpg",
      name: "lisa",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/036/075/915/small_2x/ai-generated-portrait-of-successful-and-happy-businesswoman-office-worker-smiling-and-looking-at-camera-working-inside-modern-office-photo.jpg",
      name: "tina",
    },
    {
      image:
        "https://i.pinimg.com/originals/a3/1b/2e/a31b2ee2bdf3a8c5e65f99d935e64055.jpg",
      name: "rupali",
    },
  ]);
  return (
    <div className="card-container">
      {state.map(function (element) {
        return (
          <div id="card">
            <img src={element.image} width={"100%"} height={230} alt="" />
            <h2>{element.name}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
