import React, { useState } from 'react';
import OtpInput from './OtpInput';

const PhoneOtp = () => {
    const [phoneNo, setPhoneNo] = useState("");
    const [showOtp, setShowOtp] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumberRegex = /^\d{10}$/;
        if (!phoneNumberRegex.test(phoneNo)) {
            alert("Invalid Phone Number");
            return;
        }

        // Call BackEnd API
        setShowOtp(true);
    }

    const onOtpSubmit = (otp) => {
        console.log("Login Successful", otp);
    }

    return (
        <div className="max-w-md mx-auto mt-8 bg-white p-8 rounded shadow-md">
            {!showOtp ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        placeholder='Enter Phone Number'
                        className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none"
                    >
                        Submit
                    </button>
                </form>
            ) : (
                <div className="space-y-4">
                    <p className="text-gray-600">Enter OTP sent to {phoneNo}</p>
                    <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
                </div>
            )}
        </div>
    );
};

export default PhoneOtp;
