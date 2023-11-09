import React from "react";
import Hero from "../components/Hero";
import MenuItemList from "../components/MenuItemList";
import { menuItems } from "../data";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <>
      <Hero />
      <MenuItemList
        items={menuItems.filter((item) => item.category === "pizza")}
        category="pizza"
      />
      <Banner
        title="Today's Special"
        description="You never can go wrong with a cheese pizza!"
        bgImgUrl="/images/cheese-pizza.jpg"
        btnText="Order Now"
      />
      <MenuItemList
        items={menuItems.filter((item) => item.category === "dessert")}
        category="dessert"
      />
    </>
  );
};

export default Home;
