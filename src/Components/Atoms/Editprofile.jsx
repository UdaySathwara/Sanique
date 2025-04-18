import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();
  const [showSaveModal, setShowSaveModal] = useState(false);

  return (
    <div className="w-full mx-auto bg-[#f7f7fc] pt-4 px-6 min-h-screen relative pb-20 sm:px-10 md:px-16 lg:px-20 xl:px-24">
      {/* Background Circles */}
      <div className="bg-[#37e981] h-72 w-full absolute -top-32 left-0 rounded-b-[50%]"></div>
      <div className="bg-[#37e981] h-72 w-full absolute -top-32 right-0 rounded-b-[50%]"></div>

      {/* Header */}
      <div className="flex items-center justify-between py-2 mb-6 relative">
        <span className="xl:block hidden xl:w-8"></span>
        <span
          className="material-symbols-outlined cursor-pointer xl:hidden"
          onClick={() => navigate(-1)}
        >
          arrow_back_ios
        </span>
        <h2 className="text-xl font-semibold text-center">Edit Profile</h2>
        <span className="xl:w-8 w-6"></span> {/* Spacer for alignment */}
      </div>

      {/* Profile Picture */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQFBpzvO8PzVgg/profile-displayphoto-shrink_400_400/B56ZTIN5WpHQAg-/0/1738525875144?e=1747267200&v=beta&t=U6rrNaJxeMtIcoU8M7GM4DnEAzfEbZ0Aa6g4U-vpAQo"
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300 sm:w-28 sm:h-28 md:w-32 md:h-32"
          />
          <span className="absolute bottom-0 right-3 bg-[#f7f7fc] text-black text-xs lg:p-2 p-1 border rounded-full ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7010/7010068.png"
              alt="Verified"
              className="w-5 h-5"
            />
          </span>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        <InputField label="Username" value="Uday Sathwara" />
        <InputField label="E-Mail" value="Udaysath@example.com" />
        <InputField
          label="Phone number"
          value="(+91) 98765 43210"
          icon={
            <span className="mr-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/14009/14009677.png"
                alt="India Flag"
                className="w-5 h-5"
              />
            </span>
          }
        />
        <DropdownField label="Country" value="India" />
        <InputField label="Address" value="Ahmedabad, India" />
      </div>

      {/* Save Changes Button */}
      <button
        className="bg-[#937bfb] text-white font-semibold w-full p-2 rounded-lg mt-6 sm:text-lg md:w-56 lg:w-72 xl:w-80 mx-auto flex items-center justify-center hover:bg-[#f7f7fc] transition duration-300 ease-in-out border border-[#937bfb] hover:text-[#937bfb]" 
        onClick={() => setShowSaveModal(true)}
      >
        Save Changes
      </button>

      {/* Save Confirmation Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 sm:p-6">
          <div className="bg-white py-6 rounded-lg shadow-lg w-80 text-center max-w-md">
            <p className="text-lg mb-4 px-6">
              Are you sure you want to save changes?
            </p>
            <button
              className="text-blue-600 font-semibold w-full py-2 border-b border-black text-lg"
              onClick={() => {
                setShowSaveModal(false);
                navigate("/profile");
              }}
            >
              Save
            </button>
            <button
              className="text-blue-600 w-full mt-2 text-lg font-medium"
              onClick={() => setShowSaveModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Input Field Component with Floating Label
function InputField({ label, value, icon }) {
  const [inputValue, setInputValue] = useState(value);
  return (
    <div className="relative w-full">
      <div className="relative flex items-center border border-gray-300 rounded-lg px-3 pt-3 pb-1">
        {icon}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="outline-none text-gray-800 w-full bg-transparent pt-2 pb-1"
        />
        <label
          className={`absolute left-3 text-gray-500 transition-all ${
            inputValue ? "text-xs -top-2 bg-[#f7f7fc] px-1" : "top-3"
          }`}
        >
          {label}
        </label>
      </div>
    </div>
  );
}

// Dropdown Field Component with Floating Label
function DropdownField({ label, value }) {
  return (
    <div className="relative w-full">
      <div className="relative flex items-center border border-gray-300 rounded-lg px-3 pt-3 pb-1">
        <select className="w-full outline-none text-gray-800 bg-transparent pt-2 pb-1">
          <option>{value}</option>
        </select>
        <label className="absolute left-3 text-gray-500 text-xs -top-2 bg-[#f7f7fc] px-1">
          {label}
        </label>
      </div>
    </div>
  );
}
