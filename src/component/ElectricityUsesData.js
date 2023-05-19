import React, { useEffect, useState } from 'react';
import "./ElectricityUsesData.css"
import { Col, Row } from 'react-bootstrap';

const ThingSpeakData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.thingspeak.com/channels/2155521/feeds.json?api_key=XY43S93CRM5UHTH2&results=1');
      const jsonData = await response.json();
      setData(jsonData.feeds);
    } catch (error) {
      console.error('Error occurred while fetching data:', error);
    }
  };

  return (
    <div className='comphed'>
      <h2 className='hedaing'>Electric uses Data</h2>
      {data.map((feed, index) => (
        <Row>
          <Col lg='4'>
            <div className='box' id="box1">
              <h2>Voltage</h2>
              <p className='data'>{feed.field1}</p>
            </div>
          </Col>
          <Col lg='4'>
            <div className='box' id="box2">
              <h2>Current</h2>
              <p className='data'>{feed.field2}</p>
            </div>
          </Col>
          <Col lg='4'>
            <div className='box' id="box3">
              <h2>Power</h2>
              <p className='data'>{feed.field3}</p>
            </div>
          </Col>
          <Col lg='4'>
            <div className='box' id="box4">
              <h2>kWh</h2>
              <p className='data'>{feed.field4}</p>
            </div>
          </Col>
          <Col lg='4'>
            <div className='box' id="box5">
              <h2>Units</h2>
              <p className='data'>{feed.field5}</p>
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default ThingSpeakData;
