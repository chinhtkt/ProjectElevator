// import  BookList  from './Booklist';
import Navbar from './Component-UI/Navbar';
import './App.scss';
import ContentMap from './Component-UI/Map';
import Chart from './Component-UI/Chart';
import Log from './Component-UI/Log';
import { useState, useEffect } from 'react';
import Content from './Component-UI/Content';
import axios from 'axios';
import InputTags from './Component-UI/InputTags';

const baseUrl = 'http://localhost:5000/elevators';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [tags, setTags] = useState(['Javascript', 'NodeJS']);

  const addTags = (event) => {
    if (event.target.value !== '') {
      setTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };

  const removeTag = (indextoRemove) => {
    setTags(tags.filter((_, index) => index !== indextoRemove));
    setSearchTerm('')
  };

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => {
        setData(res.data);
        setLoading(true);
        console.log(res.data);
      })
      .catch((res) => {
        console.log(res.data);
        console.log('Error');
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div class='mt-5'>
        <div class='container'>
          <div class='columns is-multiline'>
            <div class='column is-1 is-flex is-justify-content-center is-align-content-center'>
              <div class='is-size-5 has-text-weight-semibold is-flex mt-2 ml-5'>
                <div>
                  <i class='fas fa-columns'></i>
                </div>
                <div class='ml-3 is-underlined'>DASHBOARD</div>
              </div>
            </div>
            <div class='is-flex is-justify-content-center is-align-content-center column is-11'>
            <InputTags tags={tags} addTags={addTags} removeTag={removeTag} setSearchTerm={setSearchTerm}/>
            </div>
          </div>
          <div>
            <Content data={data} />
          </div>
        </div>
        <div class='columns'>
          <div class='column'>
            <div class='box'>
              <Chart data={data} />
            </div>
          </div>
          <div class='column'>
            <div class='box' style={{ padding: '23px 10px' }}>
              <ContentMap data={data} />
            </div>
          </div>
          <div class='column'>
            <div class='box'>
              <Log data={data} searchTerm={searchTerm} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
