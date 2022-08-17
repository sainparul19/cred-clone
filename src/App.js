import React from "react";
import "./App.css";
import Feel from "./components/Feel/Feel";
import Rewards from "./components/Rewards/Rewards";
import Money from "./components/Money/Money";
import Security from "./components/Security/Security";
import Story from "./components/Story/Story";
import Rating from "./components/Rating/Rating";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="new">
      <Home />
      <Feel
        prop1={"feel special"}
        prop2={"more often."}
        prop3={"exclusive rewards for paying your bills"}
        description={
          "every time you pay your credit card bills on CRED, you receive CRED coins.you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good."
        }
        btnTxt={"Explore rewards"}
      />
      <Rewards />
      <Money
        header1={"we take your money"}
        header2={"matters seriously."}
        header3={"so that you don't have to"}
        detail={
          "never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always."
        }
        btn={"Experience the upgrade"}
      />
      <div className="fix"></div>
      <Security
        line1={"security first."}
        line2={"and second."}
        line3={"what's yours remains only yours."}
        para={
          "CRED ensures that all your personal data and transactions are encrypted, and secured so what's yours remains only yours. there's no room for mistakes because we didn't leave any."
        }
        button={"Become a member"}
      />
      <Story />
      <Rating />
      <Footer />
    </div>
  );
}

export default App;
