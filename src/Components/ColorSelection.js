import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const Container = styled.span`
  display: inline-flex;
  align-items: center;
  width: 150px;
  max-width: 150px;
  padding: 4px 12px;
  border: 1px solid #bfc9d9;
  border-radius: 4px;

  input[type="color"] {
    margin-right: 8px;
    -webkit-appearance: none;
    border: none;
    width: auto;
    height: auto;
    cursor: pointer;
    background: none;
    &::-webkit-color-swatch-wrapper {
      padding: 0;
      width: 14px;
      height: 25px;
    }
    &::-webkit-color-swatch {
      border: 1px solid #bfc9d9;
      border-radius: 4px;
      padding: 0;
    }
  }

  input[type="text"] {
    border: none;
    width: 100%;
    font-size: 14px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-right: 40px;
`;

const ColorPicker = (props) => {
  return (
    <Container>
      <input type="color" {...props} />
      <input type="text" {...props} />
    </Container>
  );
};

export default function ColorSelection() {
  const [color1, setColor1] = useState("#FFFFFF");
  const [color2, setColor2] = useState("#FFFFFF");
  const [color3, setColor3] = useState("#FFFFFF");
  const [color4, setColor4] = useState("#FFFFFF");
  const [color5, setColor5] = useState("#FFFFFF");
  const [color6, setColor6] = useState("#FFFFFF");
  const [color7, setColor7] = useState("#FFFFFF");
  const [hexValues, setHexValues] = useState([]);

  const handleInput1 = (e) => {
    setColor1(e.target.value);
  };
  const handleInput2 = (e) => {
    setColor2(e.target.value);
  };
  const handleInput3 = (e) => {
    setColor3(e.target.value);
  };
  const handleInput4 = (e) => {
    setColor4(e.target.value);
  };
  const handleInput5 = (e) => {
    setColor5(e.target.value);
  };
  const handleInput6 = (e) => {
    setColor6(e.target.value);
  };
  const handleInput7 = (e) => {
    setColor7(e.target.value);
  };

  const handleFetch = () => {
    const hexValuesArr = [
      color1,
      color2,
      color3,
      color4,
      color5,
      color6,
      color7,
    ].map((color) => color.substring(1));
    console.log(hexValuesArr);
  
    fetch("http://localhost:8000/hexValues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hexValuesArr),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Hex values saved successfully:", data);
        setHexValues(data);
      })
      .catch((error) => {
        console.error("Error saving hex values:", error);
      });
  };
  

  return (
    <div>
      <Row>
        <Col>
        <div>{color1}</div>
          <ColorPicker type="color" value={color1} onChange={handleInput1} />
        </Col>
        <Col>
        <div>{color2}</div>
          <ColorPicker type="color" value={color2} onChange={handleInput2} />
          <div></div>
        </Col>
        <Col>
        <div>{color3}</div>
          <ColorPicker type="color" value={color3} onChange={handleInput3} />
          <div></div>
        </Col>
        <Col>
        <div>{color4}</div>
          <ColorPicker type="color" value={color4} onChange={handleInput4} />
          <div></div>
        </Col>
      </Row>
      <Row >
        <Col >
        <div>{color5}</div>
          <ColorPicker type="color" value={color5} onChange={handleInput5} />
          <div></div>
        </Col>
        <Col>
        <div>{color6}</div>
          <ColorPicker type="color" value={color6} onChange={handleInput6} />
          <div></div>
        </Col>
        <Col>
        <div>{color7}</div>
          <ColorPicker type="color" value={color7} onChange={handleInput7} />
          <div></div>
        </Col>
      </Row>
      <Row>
        <Button variant="contained" size="large" onClick={handleFetch} sx={{ marginTop: '70px' }}>
          Fetch Data
        </Button>
      </Row>
    </div>
  );
}
