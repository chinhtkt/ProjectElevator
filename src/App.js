// import  BookList  from './Booklist';
import Navbar from "./Component-UI/Navbar";
import "./App.css";
import ContentMap from "./Component-UI/Map";
import Chart from "./Component-UI/Chart";
import Log from "./Component-UI/Log";
import { useState } from "react";
const data = [
  {
    id: 1,
    name: "Utrecht",
    latitude: 52.090736,
    longitude: 5.12142,
    uv: 4000,
    pv: 2400,
    amt: 2400,

  },
  {
    id: 2,
    name: "Nijmegen",
    latitude: 51.812565,
    longitude: 5.837226,
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    id: 3,
    name: "Amsterdam",
    latitude: 52.370216,
    longitude: 4.895168,
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    id: 4,
    name: "Rotterdam",
    latitude: 51.924419,
    longitude: 4.477733,
    uv: 2780,
    pv: 3908,
    amt: 2000,
  }
];
function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div>
      <Navbar />
      <div class="container mt-5">
        <div class="columns is-multiline">
          <div class="is-flex is-justify-content-center column is-full ">
            <div class="field has-addons is-horizontal">
              <div class="control" style={{ width: "500px" }}>
                <input class="input" type="text" placeholder="Search" onChange={(event) => {setSearchTerm(event.target.value)}}/>
              </div>
              <div class="control">
                <a class="button is-info" href>Search</a>
              </div>
            </div>
            <div class="control has-icons-left ml-5">
              <div class="select">
                <select>
                  <option selected>Filter by Name</option>
                  {data.map(val => {
                    return <option key={val.id}>{val.name}</option>
                  })}
                </select>
              </div>
              <div class="icon is-small is-left">
              <i class="fas fa-filter"></i>
              </div>
            </div>
          </div>
          <div class="column">
            <Chart data={data} />
          </div>
          <div class="column">
            <ContentMap data={data} />
          </div>
          <div class="column">
            <Log data={data} searchTerm={searchTerm} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
