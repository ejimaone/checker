import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [inputvalue, setInputValue] = useState("");
  const [Found, isFound] = useState(null);
  const [AllIp, setAllIp] = useState([]);
  const [preboot, setPreBoot] = useState(true);
  const ipRef = useRef();

  // useEffect(() => {
  //   const fectDataonLoad = async () => {
  //     const response = await fetch(
  //       "https://checker-75ecf-default-rtdb.europe-west1.firebasedatabase.app/list/ip.json",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const data = await response.json();
  //     setAllIp(Object.values(data));
  //   };
  //   fectDataonLoad();
  //   console.log(AllIp);
  // }, [AllIp]);
  /////////getting ip
  async function Find() {
    const response = await fetch(
      "https://checker-75ecf-default-rtdb.europe-west1.firebasedatabase.app/list/ip.json",
      {
        method: "GET",
      }
    );
    const data = await response.json();

    setAllIp(Object.values(data));

    for (const ip of AllIp) {
      if (ip.startsWith(inputvalue)) {
        isFound(true);

        return;
      }
      isFound(false);
    }

    setPreBoot(false);
    setInputValue("");
  }

  function Send() {
    fetch(
      "https://checker-75ecf-default-rtdb.europe-west1.firebasedatabase.app/list/ip.json",
      {
        method: "POST",
        body: JSON.stringify(inputvalue),
      }
    );
    setPreBoot(true);
    setInputValue("");
  }
  let content;
  if (Found) {
    content = <p>ALREADY IN USE</p>;
  } else if (!Found && !preboot) {
    content = <p>SAFE TO USE</p>;
  } else {
    content = <p>STATUS</p>;
  }

  return (
    <div className="container">
      <input
        className="input"
        placeholder="Input number to search"
        ref={ipRef}
        value={inputvalue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <div
        className={`status ${
          Found
            ? `${Found ? "found" : "null"}`
            : `${!preboot ? "notfound" : "null"}`
        }`}
      >
        {content}
      </div>
      <div className="btns">
        <button onClick={Find} className="find">
          Find
        </button>
        <button onClick={Send} className="send">
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
