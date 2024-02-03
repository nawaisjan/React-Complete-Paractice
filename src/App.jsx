import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food.JSX";
import Card from "./Card";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import Button from "./Button";
function App() {
  return (
    <>
      <Header />
      <List />
      <Button />
      <UserGreeting isLoggedIn={true} username="Njan" />
      <Student name="nawais jan" age={30} isStudent={true} />
      <Student name="Khan" age={30} isStudent={true} />
      <Student name="jan" age={30} isStudent={true} />
      <Student name="nawais " age={30} isStudent={true} />
      <Card name="Nawais jan" />
      <Card name="this what" />
      <Card name="Hope" description="I make youtube videos" />
      <Food />
      <Footer />
    </>
  );
}

export default App;
