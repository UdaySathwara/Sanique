import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Edit,
  Bell,
  Lock,
  Globe,
  FileText,
  HelpCircle,
  LogOut,
} from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <div className="w-full mx-auto bg-[#f7f7fc] min-h-screen p-4 relative mb-14">
      {/* Header */}
      <div className="flex items-center justify-between py-2 mb-4">
        <span
          className="material-symbols-outlined ml-2 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          arrow_back_ios
        </span>
        <h2 className="text-xl font-semibold">Profile</h2>
        <span></span>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-4 p-4 lg:p-6 bg-[#f7f7fc] border-b border-black">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQFBpzvO8PzVgg/profile-displayphoto-shrink_400_400/B56ZTIN5WpHQAg-/0/1738525875144?e=1747267200&v=beta&t=U6rrNaJxeMtIcoU8M7GM4DnEAzfEbZ0Aa6g4U-vpAQo"
          alt="Profile"
          className="w-16 h-16 rounded-full"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Uday Sathwara</h3>
          <p className="text-sm text-gray-600">📞 (+91) 1234567890</p>
          <p className="text-sm text-gray-600">✉️ Udaysath@example.com</p>
        </div>
        <button onClick={() => navigate("/edit-profile")}>
          <Edit className="w-5 h-5 text-gray-500 cursor-pointer" />
        </button>
      </div>

      {/* General Section */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">General</h4>
        <div className="bg-[#f7f7fc] rounded-lg">
          <div className="border-b border-black">
            <MenuItem
              icon={<Bell />}
              text="Notifications"
              onClick={() => navigate("/notification-settings")}
            />
          </div>
          <div className="border-b border-black">
            <MenuItem
              icon={<Lock />}
              text="Change Password"
              onClick={() => navigate("/change-password")}
            />
          </div>
          <MenuItem
            icon={<Globe />}
            text="Change Language"
            onClick={() => navigate("/change-language")}
          />
        </div>
      </div>

      {/* Preferences Section */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Preferences</h4>
        <div className="bg-[#f7f7fc] rounded-lg">
          <div className="border-b border-black">
            <MenuItem
              icon={<FileText />}
              text="Privacy Policy"
              onClick={() => navigate("/privacy-policy")}
            />
          </div>
          <div className="border-b border-black">
            <MenuItem
              icon={<HelpCircle />}
              text="Help & Support"
              onClick={() => navigate("/help-support")}
            />
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <button
        className="flex items-center gap-2 text-red-500 font-semibold mt-6 w-full p-3 rounded-lg"
        onClick={() => setShowLogoutModal(true)}
      >
        <LogOut className="w-5 h-5" />
        Log Out
      </button>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white py-6 rounded-lg shadow-lg w-80 text-center">
            <p className="flex justify-center items-center text-xl mb-4 px-16">
              Are you sure you want to logout?
            </p>
            <button
              className="text-blue-600 font-semibold w-full py-2 border-b border-black text-lg mt-2"
              onClick={() => {
                setShowLogoutModal(false);
                navigate("/"); // Redirect after logout
              }}
            >
              Log Out
            </button>
            <button
              className="text-blue-600 w-full mt-2 text-xl font-medium"
              onClick={() => setShowLogoutModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Footer (Hidden when Modal is Open) */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white py-3 flex justify-around border-t ${
          showLogoutModal ? "hidden" : "flex"
        }`}
      >
        <button className="text-gray-700">Home</button>
        <button className="text-gray-700">Products</button>
        <button className="text-gray-700">Favorite</button>
        <button className="text-blue-500">Profile</button>
      </div>
    </div>
  );
}

// Menu Item Component
function MenuItem({ icon, text, onClick }) {
  return (
    <div
      className="flex items-center justify-between p-4 border-b cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        {icon}
        <span className="text-gray-800">{text}</span>
      </div>
      <span>&gt;</span>
    </div>
  );
}