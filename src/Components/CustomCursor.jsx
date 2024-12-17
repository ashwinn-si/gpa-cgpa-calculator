import React, { useState, useEffect } from "react";
import "../Styles/CustomCursor.css";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false); // State to handle hover effect

    useEffect(() => {
        // Track mouse position
        const updateCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        // Add hover class when hovering over buttons or interactive elements
        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        document.addEventListener("mousemove", updateCursor);

        // Add event listeners for buttons and interactive elements
        const interactiveElements = document.querySelectorAll("button, a, input[type='radio']");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            document.removeEventListener("mousemove", updateCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            className={`custom-cursor ${isHovered ? "hovered" : ""}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,

            }}
        ></div>
    );
};

export default CustomCursor;
