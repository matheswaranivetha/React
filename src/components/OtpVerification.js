// src/OtpVerification.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function OtpVerification({ onOtpVerified }) {
  const [show, setShow] = useState(true);
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isOtpValid, setIsOtpValid] = useState(null);

  const handleSendOtp = () => {
    if (mobileNumber) {
      // Simulate OTP send (in a real app, integrate with an OTP service)
      console.log(`Sending OTP to ${mobileNumber}`);
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = () => {
    // Simulate OTP verification (replace with real verification logic)
    if (otp === '123456') {
      setIsOtpValid(true);
      onOtpVerified();
      setShow(false);
    } else {
      setIsOtpValid(false);
    }
  };

  return (
    <Modal show={show} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>{otpSent ? 'Enter OTP' : 'Enter Mobile Number'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {!otpSent ? (
            <>
              <Form.Group controlId="formMobileNumber">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleSendOtp}>
                Send OTP
              </Button>
            </>
          ) : (
            <>
              <Form.Group controlId="formOtp">
                <Form.Label>OTP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleVerifyOtp}>
                Verify OTP
              </Button>
              {isOtpValid === false && <p className="text-danger">Invalid OTP</p>}
            </>
          )}
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default OtpVerification;
