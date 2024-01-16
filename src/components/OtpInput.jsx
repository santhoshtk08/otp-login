import React, { useEffect, useRef, useState } from 'react';

const OtpInput = ({ length = 4, onOtpSubmit = () => { } }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleOtpChange = (index, e) => {
        const value = e.target.value;
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

        // Move to the next input if the current field is filled
        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeydown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1, 1);

        if (index > 0 && !otp[index - 1]) {
            inputRefs.current[otp.indexOf("")].focus();
        }
    };

    return (
        <div className="flex space-x-2">
            {otp.map((digit, index) => (
                <input
                    type="text"
                    key={index}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e)}
                    onClick={() => handleClick(index)}
                    onKeyDown={(e) => handleKeydown(index, e)}
                    ref={(input) => (inputRefs.current[index] = input)}
                    className="w-12 h-12 border rounded text-center focus:outline-none focus:border-blue-500"
                />
            ))}
        </div>
    );
};

export default OtpInput;
