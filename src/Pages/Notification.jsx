import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, FileText, Gift, Tv, PackageCheck } from "lucide-react";

const notifications = [
  {
    id: 1,
    icon: <FileText className="w-10 h-10 text-gray-700" />,
    title: "New Personalized Brochure Available!",
    description:
      "Based on your preferences, we’ve curated a collection of the finest bathroom fittings just for you.",
    file: "LuxeBath_Collection_2025.pdf",
    time: "Today at 9:42 AM",
  },
  {
    id: 2,
    icon: <Gift className="w-10 h-10 text-red-500" />,
    title: "Exclusive User Reward Unlocked!",
    description:
      "You’ve earned a 15% discount on all shower systems. Redeem now!",
    time: "Expires: March 10, 2025",
  },
  {
    id: 3,
    icon: <Tv className="w-10 h-10 text-blue-500" />,
    title: "Try It in Your Space - Augmented Reality Available!",
    description:
      "See how our luxury bathtubs fit in your bathroom before you buy!",
    time: "Today at 9:42 AM",
  },
  {
    id: 4,
    icon: <PackageCheck className="w-10 h-10 text-yellow-500" />,
    title: "Restock Alert: RoyalChrome Rain Shower Back in Stock!",
    description: "Grab yours before they’re gone!",
    time: "Last Wednesday at 9:42 AM",
  },
];

export default function NotificationPanel({ isOpen, setIsOpen }) {
  return (
    <div className="relative">
      {isOpen && (
        <motion.div
          initial={{ y: "50%" }}
          animate={{ y: "50%" }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 100 }}
          className="fixed bottom-0 left-0 right-0 h-96 mb-48 z-50 bg-[#f7f7fc] shadow-xl rounded-t-2xl p-4 overflow-y-auto"
        >
          <div className="flex justify-center gap-3 items-center border-b-2 pb-2">
            <button
              className="text-xl left-4 lg:left-10 absolute"
              onClick={() => setIsOpen(false)}
            >
              <span class="material-symbols-outlined p-2">arrow_back_ios</span>
            </button>
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>
          <div className="mt-4 space-y-2 max-h-[90vh] overflow-y-auto">
            {notifications.map((note) => (
              <div
                key={note.id}
                className="flex items-start gap-3 p-3 bg-white hover:bg-gray-100 translate-all rounded-lg shadow"
              >
                {note.icon}
                <div>
                  <h3 className="font-semibold text-gray-900">{note.title}</h3>
                  <p className="text-sm text-gray-600">{note.description}</p>
                  {note.file && (
                    <p className="text-sm text-blue-500 mt-1">📄 {note.file}</p>
                  )}
                  <span className="text-xs text-gray-500">{note.time}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
