import "bootstrap/dist/css/bootstrap.min.css";
import Home from './component/Home';
import List from "./component/testapi";
import { useEffect, useState } from "react";
import { getInfo } from "./lib/axios";

function App() {
    const [isCheckIn,setIsCheckIn] = useState(false)
    useEffect(()=>{
        const fetchData = async () => {
              const response = await getInfo();
              if(response?.data){
                setIsCheckIn(true)
              }
          };
      
          fetchData();
    },[])

  return (
    <div className="App">
      <Home isCheckIn={isCheckIn} setIsCheckIn={setIsCheckIn} />
    </div>
  );
}

export default App;
