import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

const NotificationSettings = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    GeneralNotification: true,
    Sound: false,
    Vibrate: true,
    AppUpdates: true,
    Promotion: false,
    NewService: false,
    NewTips: true,
  });

  const handleToggle = (setting) => {
    setSettings({ ...settings, [setting]: !settings[setting] });
  };

  return (
    <div className="bg-[#f7f7fc] min-h-screen p-6">
      <div className="flex items-center justify-center py-2 mb-4">
        <span
          className="material-symbols-outlined left-6 fixed  cursor-pointer"
          onClick={() => navigate(-1)}>
          arrow_back_ios
        </span>
        <h2 className="text-xl font-semibold">Notification</h2>
        <span></span>
      </div>

      <div className="mb-4 py-2 space-y-1">
        <h2 className="font-semibold text-xl py-2">Common</h2>
        {["GeneralNotification", "Sound", "Vibrate"].map((key) => (
          <div
            key={key}
            className="flex justify-between items-center py-2 text-base"
          >
            <span>{key.replace(/([A-Z])/g, " $1")}</span>
            <Switch
              checked={settings[key]}
              onChange={() => handleToggle(key)}
              className={`${
                settings[key] ? "bg-blue-500" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
            >
              <span
                className={`${
                  settings[key] ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition-transform`}
              />
            </Switch>
          </div>
        ))}
      </div>

      <div className="mb-4 space-y-1">
        <h2 className="font-semibold text-xl py-2">System & Services Update</h2>
        {["AppUpdates", "Promotion"].map((key) => (
          <div
            key={key}
            className="flex justify-between items-center py-2 text-base"
          >
            <span>{key.replace(/([A-Z])/g, " $1")}</span>
            <Switch
              checked={settings[key]}
              onChange={() => handleToggle(key)}
              className={`${
                settings[key] ? "bg-blue-500" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
            >
              <span
                className={`${
                  settings[key] ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition-transform`}
              />
            </Switch>
          </div>
        ))}
      </div>

      <div className="space-y-1">
        <h2 className="font-semibold text-xl py-2">Others</h2>
        {["NewService", "NewTips"].map((key) => (
          <div
            key={key}
            className="flex justify-between items-center py-2 text-base"
          >
            <span>{key.replace(/([A-Z])/g, " $1")}</span>
            <Switch
              checked={settings[key]}
              onChange={() => handleToggle(key)}
              className={`${
                settings[key] ? "bg-blue-500" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
            >
              <span
                className={`${
                  settings[key] ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition-transform`}
              />
            </Switch>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSettings;
