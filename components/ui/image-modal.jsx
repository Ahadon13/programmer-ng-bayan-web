"use client";
import React from "react";

export const ImageModal = ({ isOpen, onClose, imageSrc, alt }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={onClose}
        >
            <div
                className="relative max-w-4xl w-full mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
                >
                    &times;
                </button>
                <img
                    src={imageSrc}
                    alt={alt}
                    className="w-full h-auto rounded-lg shadow-lg max-h-[80vh] object-contain"
                />
            </div>
        </div>
    );
};
