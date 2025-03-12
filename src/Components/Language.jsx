import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LanguageSelection = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("English (UK)");

  const suggestedLanguages = ["English (US)", "English (UK)"];
  const otherLanguages = [
    "Mandarin",
    "Hindi",
    "Spanish",
    "French",
    "Arabic",
    "Russian",
    "Indonesian",
    "Vietnamese",
  ];

  return (
    <div className="bg-[#f7f7fc] min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center justify-between py-2 mb-4">
        <span
          className="material-symbols-outlined text-xl cursor-pointer"
          onClick={() => navigate(-1)}
        >
          arrow_back_ios
        </span>
        <h2 className="text-xl font-semibold text-center flex-1">Language</h2>
        <span></span>
      </div>

      {/* Suggested Languages */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2 pt-4">Suggested</h3>
        {suggestedLanguages.map((lang) => (
          <div
            key={lang}
            className="flex items-center justify-between py-2 cursor-pointer"
            onClick={() => setSelectedLanguage(lang)}
          >
            <span>{lang}</span>
            <input
              type="radio"
              name="language"
              value={lang}
              checked={selectedLanguage === lang}
              onChange={() => setSelectedLanguage(lang)}
              className="hidden"
            />
            <div
              className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                selectedLanguage === lang ? "border-blue-500" : "border-gray-300"
              }`}
            >
              {selectedLanguage === lang && (
                <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Other Languages */}
      <div>
        <h3 className="font-semibold text-lg mb-2 pt-8">Others</h3>
        {otherLanguages.map((lang) => (
          <div
            key={lang}
            className="flex items-center justify-between py-2 cursor-pointer"
            onClick={() => setSelectedLanguage(lang)}
          >
            <span>{lang}</span>
            <input
              type="radio"
              name="language"
              value={lang}
              checked={selectedLanguage === lang}
              onChange={() => setSelectedLanguage(lang)}
              className="hidden"
            />
            <div
              className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                selectedLanguage === lang ? "border-blue-500" : "border-gray-300"
              }`}
            >
              {selectedLanguage === lang && (
                <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelection;
