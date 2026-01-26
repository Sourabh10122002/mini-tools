import React, { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import html2canvas from 'html2canvas';

const QrCodeGenerator = () => {
    const [qrType, setQrType] = useState('url');
    const [inputs, setInputs] = useState({
        url: '',
        text: '',
        email: '',
        emailSubject: '',
        emailBody: '',
        phone: '',
        smsMessage: '',
        wifiSsid: '',
        wifiPassword: '',
        wifiEncryption: 'WPA',
        firstName: '',
        lastName: '',
        jobTitle: '',
        company: '',
        phoneNumber: '',
        emailAddress: '',
        website: ''
    });
    const [size, setSize] = useState(256);
    const [bgColor, setBgColor] = useState('#ffffff');
    const [fgColor, setFgColor] = useState('#000000');
    const qrRef = useRef(null);

    const generateQRValue = () => {
        switch (qrType) {
            case 'url':
                return inputs.url;
            case 'text':
                return inputs.text;
            case 'email':
                return `mailto:${inputs.email}?subject=${encodeURIComponent(inputs.emailSubject)}&body=${encodeURIComponent(inputs.emailBody)}`;
            case 'sms':
                return `smsto:${inputs.phone}:${encodeURIComponent(inputs.smsMessage)}`;
            case 'wifi':
                return `WIFI:S:${inputs.wifiSsid};T:${inputs.wifiEncryption};P:${inputs.wifiPassword};;`;
            case 'card':
                return `BEGIN:VCARD\nVERSION:3.0\nN:${inputs.lastName};${inputs.firstName}\nFN:${inputs.firstName} ${inputs.lastName}\nTITLE:${inputs.jobTitle}\nORG:${inputs.company}\nTEL:${inputs.phoneNumber}\nEMAIL:${inputs.emailAddress}\nURL:${inputs.website}\nEND:VCARD`;
            default:
                return '';
        }
    };

    const downloadQRCode = () => {
        if (!qrRef.current) return;

        html2canvas(qrRef.current).then(canvas => {
            const link = document.createElement('a');
            link.download = `qrcode-${qrType}.png`;
            link.href = canvas.toDataURL();
            link.click();
        });
    };

    const handleInputChange = (field, value) => {
        setInputs(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="max-w-2xl w-full mx-auto">
                <h2 className="text-4xl font-bold mb-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    Advanced QR Code Generator
                </h2>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-gray-700">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-gray-300">QR Code Type</label>
                            <select
                                value={qrType}
                                onChange={(e) => setQrType(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
                            >
                                <option value="url">URL</option>
                                <option value="text">Text</option>
                                <option value="email">Email</option>
                                <option value="sms">SMS</option>
                                <option value="wifi">WiFi</option>
                                <option value="card">vCard</option>
                            </select>
                        </div>

                        {qrType === 'url' && (
                            <input
                                type="url"
                                value={inputs.url}
                                onChange={(e) => handleInputChange('url', e.target.value)}
                                placeholder="Enter URL"
                                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        )}

                        {qrType === 'text' && (
                            <textarea
                                value={inputs.text}
                                onChange={(e) => handleInputChange('text', e.target.value)}
                                placeholder="Enter text"
                                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                            />
                        )}

                        {qrType === 'email' && (
                            <div className="space-y-4">
                                <input
                                    type="email"
                                    value={inputs.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    placeholder="Recipient email"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                                />
                                <input
                                    type="text"
                                    value={inputs.emailSubject}
                                    onChange={(e) => handleInputChange('emailSubject', e.target.value)}
                                    placeholder="Email subject"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                                />
                                <textarea
                                    value={inputs.emailBody}
                                    onChange={(e) => handleInputChange('emailBody', e.target.value)}
                                    placeholder="Email body"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 h-32"
                                />
                            </div>
                        )}

                        {/* Add similar conditional blocks for other types */}
                        {qrType === 'sms' && (
                            <div className="space-y-4">
                                <input
                                    type="tel"
                                    value={inputs.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    placeholder="Phone number"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                                />
                                <textarea
                                    value={inputs.smsMessage}
                                    onChange={(e) => handleInputChange('smsMessage', e.target.value)}
                                    placeholder="Message"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 h-32"
                                />
                            </div>
                        )}

                        {qrType === 'wifi' && (
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    value={inputs.wifiSsid}
                                    onChange={(e) => handleInputChange('wifiSsid', e.target.value)}
                                    placeholder="WiFi SSID"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                                />
                                <input
                                    type="password"
                                    value={inputs.wifiPassword}
                                    onChange={(e) => handleInputChange('wifiPassword', e.target.value)}
                                    placeholder="WiFi Password"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                                />
                                <select
                                    value={inputs.wifiEncryption}
                                    onChange={(e) => handleInputChange('wifiEncryption', e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
                                >
                                    <option value="WPA">WPA/WPA2</option>
                                    <option value="WEP">WEP</option>
                                    <option value="nopass">No Encryption</option>
                                </select>
                            </div>
                        )}

                        {qrType === 'card' && (
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        value={inputs.firstName}
                                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                                        placeholder="First Name"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                                    />
                                    <input
                                        type="text"
                                        value={inputs.lastName}
                                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                                        placeholder="Last Name"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                                    />
                                </div>
                                <input
                                    type="text"
                                    value={inputs.jobTitle}
                                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                                    placeholder="Job Title"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                                />
                                <input
                                    type="text"
                                    value={inputs.company}
                                    onChange={(e) => handleInputChange('company', e.target.value)}
                                    placeholder="Company"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                                />
                                <input
                                    type="tel"
                                    value={inputs.phoneNumber}
                                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                                />
                                <input
                                    type="email"
                                    value={inputs.emailAddress}
                                    onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                                />
                                <input
                                    type="url"
                                    value={inputs.website}
                                    onChange={(e) => handleInputChange('website', e.target.value)}
                                    placeholder="Website URL"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                                />
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-gray-300">Size</label>
                                <input
                                    type="number"
                                    value={size}
                                    min="100"
                                    max="500"
                                    onChange={(e) => setSize(Number(e.target.value))}
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-300">Background Color</label>
                                <input
                                    type="color"
                                    value={bgColor}
                                    onChange={(e) => setBgColor(e.target.value)}
                                    className="w-full h-10 rounded-lg cursor-pointer"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-300">Foreground Color</label>
                                <input
                                    type="color"
                                    value={fgColor}
                                    onChange={(e) => setFgColor(e.target.value)}
                                    className="w-full h-10 rounded-lg cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {generateQRValue() && (
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8">
                        <div className="flex flex-col items-center">
                            <div ref={qrRef} className="mb-6 p-4 bg-white rounded-lg" style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)' }}>
                                <QRCodeSVG
                                    value={generateQRValue()}
                                    size={size}
                                    bgColor={bgColor}
                                    fgColor={fgColor}
                                    level="H"
                                    includeMargin={false}
                                    rectStyle={{
                                        borderRadius: '24px',
                                        transition: 'all 0.3s ease'
                                    }}
                                    posStyle={{
                                        fill: '#6366f1',
                                        borderRadius: '30%',
                                        transform: 'rotate(45deg)'
                                    }}
                                />
                            </div>
                            <button
                                onClick={downloadQRCode}
                                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-xl text-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20"
                            >
                                Download QR Code
                            </button>
                        </div>
                    </div>
                )}

                {!generateQRValue() && (
                    <div className="text-center mt-8 animate-pulse">
                        <p className="text-gray-400 text-lg">
                            Configure your {qrType} details above
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QrCodeGenerator;