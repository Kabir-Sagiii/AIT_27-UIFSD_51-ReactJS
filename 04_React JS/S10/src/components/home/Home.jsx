import "./Home.css";
import Ad from "./ad/Ad";
import TopDeal from "./top-deal/TopDeal";
function Home() {
  return (
    <div className="home">
      <div className="brand">
        <img
          width={"100%"}
          height={470}
          src="https://rukminim2.flixcart.com/fk-p-flap/3140/1040/image/1e81f07cf031c975.png?q=60"
          alt=""
        />
      </div>

      <Ad />
      <TopDeal mainTitle={"Top Deal on Electronics"} />
    </div>
  );
}

export default Home;
