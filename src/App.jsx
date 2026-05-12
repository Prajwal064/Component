import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Center from "./component/Center";
import Card from "./component/Card"
import Button from "./component/Button";

const App = () => {
  const user = ["Prajwal", "Dhole", "Abishek", "Milne"];
  const arr1 = [11, 12, 13, 14, 15];
  return (
    <div>
  {/* <Navbar/>
  <Center/>
  <Footer /> */}
  {/* <Card user= "Prajwal"  age='21'/>
  <Card user= "Dhole"  age='21'/>
  <Card user= "Bahun"  age='21'/>
  <Button text='Explore'/>
  <Button text='Buy now'/>
  <Button text='Cart'/> */}
  {user.map(function(props){
            return <h1>{user.elem}</h1>
        })}

    </div>
  );
};

export default App;
