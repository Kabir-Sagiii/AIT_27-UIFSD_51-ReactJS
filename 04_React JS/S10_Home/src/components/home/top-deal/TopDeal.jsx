import React from "react";
import "./TopDeal.css";
import Card from "../card/Card";
function TopDeal({ mainTitle }) {
  return (
    <div className="top-deal-container ">
      <h1>{mainTitle}</h1>
      <div className="top-deal">
        <Card
          image={
            "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/1/f/k/-original-imahkgmr8gxhph7z.jpeg?q=70"
          }
          title={"Up to 70% off"}
        />
        <Card
          image={
            "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/d/u/0/nb121-pods-upto-40-hours-playtime-type-c-fast-charging-dual-original-imahh4a72k7jbk2h.jpeg?q=70"
          }
          title={"starts from 3000"}
        />
        <Card
          image={
            "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/s/b/c/-original-imahhfepsgsh5myf.jpeg?q=70"
          }
          title={"Best Deal"}
        />
        <Card
          image={
            "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/s/r/9/bs-ultrapood-bullstorm-original-imahcus46hzumv9a.jpeg?q=70"
          }
          title={"Off upto 30%"}
        />
        <Card
          image={
            "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/r/e/c/-original-imahgnf4vwn5sxe5.jpeg?q=70"
          }
          title={"Starts From 5000"}
        />
      </div>
    </div>
  );
}

export default TopDeal;
