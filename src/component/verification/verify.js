//verify.js

import React, { useState, useEffect } from 'react';
import "./verify.module.css"
import { Button,Row,Col,Typography, Space } from 'antd';
const Title = Typography;
function VerifyMessage() {
  const [otc1, setOtc1] = useState('');
  const [otc2, setOtc2] = useState('');
  const [otc3, setOtc3] = useState('');
  const [otc4, setOtc4] = useState('');
  const [otc5, setOtc5] = useState('');
  const [otc6, setOtc6] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'otc-1':
        setOtc1(value);
        break;
      case 'otc-2':
        setOtc2(value);
        break;
      case 'otc-3':
        setOtc3(value);
        break;
      case 'otc-4':
        setOtc4(value);
        break;
      case 'otc-5':
        setOtc5(value);
        break;
      case 'otc-6':
        setOtc6(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., validate the one-time code.
  };

  useEffect(() => {
    const in1 = document.getElementById('otc-1');
    const ins = document.querySelectorAll('input[type="number"]');

    const splitNumber = function (e) {
      let data = e.data || e.target.value;
      if (!data) return;
      if (data.length === 1) return;

      popuNext(e.target, data);
    };

    const popuNext = function (el, data) {
      el.value = data[0];
      data = data.substring(1);
      if (el.nextElementSibling && data.length) {
        popuNext(el.nextElementSibling, data);
      }
    };

    ins.forEach(function (input) {
      input.addEventListener('keyup', function (e) {
        if (e.keyCode === 16 || e.keyCode === 9 || e.keyCode === 224 || e.keyCode === 18 || e.keyCode === 17) {
          return;
        }

        if ((e.keyCode === 8 || e.keyCode === 37) && this.previousElementSibling && this.previousElementSibling.tagName === "INPUT") {
          this.previousElementSibling.select();
        } else if (e.keyCode !== 8 && this.nextElementSibling) {
          this.nextElementSibling.select();
        }

        if (e.target.value.length > 1) {
          splitNumber(e);
        }
      });

      input.addEventListener('focus', function (e) {
        if (this === in1) return;

        if (in1.value == '') {
          in1.focus();
        }

        if (this.previousElementSibling.value == '') {
          this.previousElementSibling.focus();
        }
      });
    });

    in1.addEventListener('input', splitNumber);

    return () => {
      // Cleanup event listeners when the component unmounts
      ins.forEach(function (input) {
        input.removeEventListener('keyup', () => {});
        input.removeEventListener('focus', () => {});
      });
      in1.removeEventListener('input', () => {});
    };
  }, []);

  return (



    
    <Row >
        <Space direction='vertical'>
    <Col>   
    <Title style={{fontSize:'50px'}}>Please check your mail for verfication</Title>
    </Col> 
    <Col >
    <form className="otc" name="one-time-code" onSubmit={handleSubmit}>
      <div>
        <input
          type="number"
          pattern="[0-9]*"
          value={otc1}
          onChange={handleChange}
          autoComplete="one-time-code"
          id="otc-1"
          required
        />

        <input
          type="number"
          pattern="[0-9]*"
          min="0"
          max="9"
          maxLength="1"
          value={otc2}
          onChange={handleChange}
          id="otc-2"
          required
        />
        <input
          type="number"
          pattern="[0-9]*"
          min="0"
          max="9"
          maxLength="1"
          value={otc3}
          onChange={handleChange}
          id="otc-3"
          required
        />
        <input
          type="number"
          pattern="[0-9]*"
          min="0"
          max="9"
          maxLength="1"
          value={otc4}
          onChange={handleChange}
          id="otc-4"
          required
        />
        <input
          type="number"
          pattern="[0-9]*"
          min="0"
          max="9"
          maxLength="1"
          value={otc5}
          onChange={handleChange}
          id="otc-5"
          required
        />
        <input
          type="number"
          pattern="[0-9]*"
          min="0"
          max="9"
          maxLength="1"
          value={otc6}
          onChange={handleChange}
          id="otc-6"
          required
        />
      </div>
   
    <Button>Submit</Button>
  </form>
  </Col>
  </Space>
  </Row>
  );
}

export default VerifyMessage;





