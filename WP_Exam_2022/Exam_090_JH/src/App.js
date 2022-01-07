import axios from "axios";
import { useEffect, useState } from "react";
export default function App() {
  return (
    <div>
      <MyApp />
    </div>
  );
}

function MyApp() {
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);
  const handlemsg = (e) => {
    setMessage(e.target.value);
  };
  const addMessage = async () => {
    if (message === "") {
      alert("Please Enter Something");
      return;
    }
    const url = `http://localhost:4000/addmessage`;
    const data = {
      message: message,
    };
    await axios.post(url, data);
    const newList = [data, ...list];
    setList(newList);
    setMessage("");
  };
  const seeMessage = async () => {
    const url = "http://localhost:4000/message";
    const result = await axios.get(url);

    const list = result.data;
    const newList = [...list];
    setList(newList);
  };
  useEffect(() => seeMessage(), []);
  return (
    <div>
      <div className="row bg-secondary  p-2">
        <div className="col-2"></div>
        <div className="col d-flex justify-content-center p-1">
          <h1>ChatApp</h1>
          <h6 className="p-4">by "Shraddha Kondvilkar | ID:210940520090</h6>
        </div>
        <div className="col-2 p-2"></div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 p-1">
          <div className="row">
            <div className="col">
              <input
                className="w-100 border-success rounded"
                type="text"
                name=""
                id=""
                placeholder="Whats up...!!!"
                value={message}
                onChange={handlemsg}
              />
            </div>
            <div className="col">
              <input
                className="w-50 border-success rounded"
                type="button"
                name=""
                id=""
                value="Send"
                onClick={addMessage}
              />
            </div>
          </div>
        </div>
        <div className="col-2 p-2"></div>
      </div>
      <div>
        <h3 className="bg-dark text-light mt-1 p-3">Users Messages</h3>
        {list.map((item, index) => (
          <div key={index} className="alert alert-secondary fs-4">
            {item.message}
          </div>
        ))}
        ;
      </div>
    </div>
  );
}