import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}`);
      setData(res.data.data);
    };

    fetchData();
  }, []);

  if (!data) {
    return <>Loading...</>;
  }

  return (
    <div className="wrapper">
      <p>
        Hello, My name is {data.name}. I work at {data.company} and I know{" "}
        {data.language}
      </p>
    </div>
  );
};

export default App;
