import { useState } from "react";
import Style from "./App.module.scss";
import Feedbacky from "@zcopur/feedbacky";
import { setFeedbackyProps } from "./utils";

function App() {
  const [login, setlogin] = useState(false);
  const userId = login ? Math.floor(10000000 + Math.random() * 90000000) : null;

  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <span className={Style.title}>Shopping App</span>
        <button onClick={() => setlogin(!login)}>
          {login ? userId : "Log In"}
        </button>
      </div>
      <div className={Style.productsContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div key={i} className={Style.product}>
            <img src="https://picsum.photos/300/300" alt="skeleton" />
          </div>
        ))}
      </div>
      <Feedbacky {...setFeedbackyProps(userId)} />
    </div>
  );
}

export default App;
