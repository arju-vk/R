import { useState } from "react";
let Message = () => {
  //let msg="Hello";
  let [msg, setMsg] = useState("Hello...");
  let gmHandler = () => {
    setMsg("Good Morning");
  };
  let gnHandler = () => {
    setMsg("Good Night");
  };

  let cartHandler = () => {
    setMsg("This is the Cart !");
  };
  return (
    <div>
      <h3>Message Component</h3>
      <hr />
      <h4>Message Value:{msg}</h4>
      <button onClick={gmHandler}>Good Morning</button>
      <button onClick={gnHandler}>Good Night</button>
      <button onClick={cartHandler}>Add to Cart</button>
    </div>
  );
};
export default Message;
