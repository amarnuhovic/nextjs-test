'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import './style.css';

const HomeContainer = (data) => {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  useEffect(() => {
    if (data.data.list.length > 0) {
      setSelectedButton(0);
    }
  }, [data.data.list]);

  return (
    <div className="wrapper">
      <div className="header-wrapper">
        <p className="header">{data.data.header}</p>
        <p className="title">{data.data.title}</p>
        <p className="description">{data.data.description}</p>
      </div>
      <div className="section-wrapper">
        <div className="left-section">
          <div className="circle-container">
            <div className="circle red-circle">
              <h2>{data.data.list[selectedButton].title}</h2>
              <p>{data.data.list[selectedButton].description}</p>
            </div>
            <div className="image-circle">
              <Image
                src={data.data.list[selectedButton].image}
                alt="Circle Image"
                layout="fill"
                objectFit="cover"
                className="image"
              />
            </div>
          </div>
        </div>
        <div className="right-section">
          <ul>
            {data.data.list.map((item, index) => (
              <li key={index}>
                <button
                  className={`btn ${
                    selectedButton === index ? 'selected' : ''
                  }`}
                  onClick={() => handleButtonClick(index)}
                >
                  <span className="arrow">&lt;</span>
                  <p>{item.title}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
