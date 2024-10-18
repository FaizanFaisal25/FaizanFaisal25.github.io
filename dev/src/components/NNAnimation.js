import React from 'react';

const NNAnimation = () => {
    const iframeStyle = {
        width: '100%', // Set width to 100% of the parent container
        height: '100%', // Set height to 100% of the parent container
        border: 'none', // Remove default border
        overflow: 'hidden', // Hide overflow
        borderRadius: '8px', // Optional: add rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0)', // Optional: add shadow for a floating effect
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px',
        maxWidth: '800px', // Set a max width for larger screens
        width: '100%', // Ensure the container uses the full width available
        height: '0', // Set height to zero to enforce aspect ratio
        paddingBottom: '75%', // 4:3 Aspect Ratio (height:width = 3:4)
        position: 'relative', // Position relative for absolute iframe
    };

    const iframeContainerStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    return (
        <div style={containerStyle}>
            <div style={iframeContainerStyle}>
                <iframe 
                    title="Neural Network Animation"
                    src="/nn.html" // Path to your HTML file in the public folder
                    style={iframeStyle}
                    // Prevent scrolling by setting this attribute
                    scrolling="no" 
                />
            </div>
        </div>
    );
};

export default NNAnimation;
