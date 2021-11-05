// import  BookList  from './Booklist';
import Navbar from "./Component-UI/Navbar";
import "./App.css";
import ContentMap from "./Component-UI/Map";
import Chart from "./Component-UI/Chart";
import Log from "./Component-UI/Log";
import { useState,useEffect } from "react";
import  Content  from "./Component-UI/Content";
import axios from 'axios';

const baseUrl = "http://localhost:5000/elevators"

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  
  
  useEffect(() => {
    axios.get(baseUrl)
    .then((res) => {
      setData(res.data)
      setLoading(true)
      console.log(res.data)
    }).catch((res) => {
      console.log(res.data)
      console.log('Error')
    })
  }, [])
  return (
    <div>
      <Navbar />
      <div class="mt-5">
        <div class="container">
        <div class="columns is-multiline">
          <div class="column is-1 is-flex is-justify-content-center is-align-content-center">
            <div class="is-size-5 has-text-weight-semibold is-flex mt-2">
            <div>
            <i class="fas fa-columns"></i>
            </div>
            <div class="ml-3 is-underlined">
            DASHBOARD
            </div>
            </div>
          </div>
          <div class="is-flex is-justify-content-center is-align-content-center column is-11">
            <div class="field has-addons is-horizontal">
              <div class="control" style={{ width: "500px" }}>
                <input
                  class="input"
                  type="text"
                  placeholder="Search"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
              </div>
            </div>
            <div class="control has-icons-left ml-5">
              <div class="select">
                <select onChange={(event) => setFilterTerm(event.target.value)}>
                  <option selected value="">
                    Filter by Type
                  </option>
                  <option value="Bình Thường">
                    Bình Thường
                  </option>
                  <option value="Cảnh báo">
                    Cảnh Báo
                  </option>
                  <option  value="Lỗi">
                    Lỗi
                  </option>
                </select>
              </div>
              <div class="icon is-small is-left">
                <i class="fas fa-filter"></i>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Content data={data}/>
        </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="box">
            <Chart data={data} filterTerm={filterTerm} />
            </div>
          </div>
          <div class="column">
          <div class="box" style={{padding: "23px 10px"}}>
            <ContentMap data={data} />
          </div>
          </div>
          <div class="column">
          <div class="box">
            <Log data={data} searchTerm={searchTerm} filterTerm={filterTerm} loading={loading} />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
