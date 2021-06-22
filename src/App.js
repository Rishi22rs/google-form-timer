import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(30);
  const [resetKey, setResetKey] = useState("");
  useEffect(() => {
    if (
      parseInt(localStorage.getItem("c")) > 1 ||
      localStorage.getItem("c") == null
    )
      alert(
        "After clicking Ok your timer will start if you refresh your page you will be blocked from this page. \nTry to do it within time frame otherwise you won't be able to submit your form."
      );
    localStorage.setItem("r", "lastchance");
    Initialize(30);
  }, []);
  let i = 30;
  const [cl, setCl] = useState("Not-Overlay");
  const Initialize = (time) => {
    i = time;
    setCounter(time);
    if (localStorage.getItem("x") === null) {
      localStorage.setItem("x", 39725935);
      const interval = setInterval(() => {
        localStorage.setItem("c", i--);
        setCounter((counter) => counter - 1);
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
        setCl("Overlay");
      }, time * 1000);
    } else {
      setCl("Overlay");
    }
  };

  const resetIt = () => {
    console.log(resetKey);
    if (
      resetKey === localStorage.getItem("r") &&
      parseInt(localStorage.getItem("c")) > 1
    ) {
      setCl("Not-Overlay");
      localStorage.removeItem("x");
      Initialize(parseInt(localStorage.getItem("c")));
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className={cl}>
          {parseInt(localStorage.getItem("c")) < 2 ? (
            <></>
          ) : (
            <h1>{parseInt(localStorage.getItem("c")) - 1} seconds remaining</h1>
          )}
          {cl === "Overlay" ? (
            <div className="container">
              <h1>
                {parseInt(localStorage.getItem("c")) < 2
                  ? "Time execeeded"
                  : "You refreshed your page"}{" "}
                you can't submit the form now.
              </h1>
              <p>
                {parseInt(localStorage.getItem("c")) < 2
                  ? "Now reset key also won't work, Better LUCK next time."
                  : "If it happened by mistake contact your co-ordinator for reset key."}
              </p>
              {parseInt(localStorage.getItem("c")) < 2 ? (
                <></>
              ) : (
                <>
                  <input
                    type="password"
                    onChange={(e) => setResetKey(e.target.value)}
                  />
                  <button onClick={resetIt}>Reset</button>
                </>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfTVEMDSSoTzhPLilstSVAzWWkFjJzdjXngBgmL2AGOtveIQg/viewform?embedded=true"
          width={window.innerWidth - 40}
          height={window.innerHeight}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </header>
    </div>
  );
}

export default App;
