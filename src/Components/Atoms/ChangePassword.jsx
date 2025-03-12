import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ChangePassword() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("New password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords do not match")
      .required("Confirm password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    setShowPopup(true);
    setSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen px-6 pt-10 pb-20 text-gray-900 relative">
      {/* Header */}
      <div className="flex items-center py-2 mb-6 relative">
        <span className="material-symbols-outlined cursor-pointer" onClick={() => navigate(-1)}>
          arrow_back_ios
        </span>
        <h2 className="text-xl font-semibold mx-auto">Change Password</h2>
      </div>

      {/* Form */}
      <Formik
        initialValues={{ newPassword: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div>
              <label className="block font-medium">New Password</label>
              <div className="flex items-center border p-3 rounded-lg mt-1 relative">
                <span className="material-symbols-outlined">lock</span>
                <Field
                  type={passwordVisible ? "text" : "password"}
                  name="newPassword"
                  placeholder="Enter New Password"
                  className="w-full ml-2 outline-none"
                />
                <span 
                  className="material-symbols-outlined cursor-pointer absolute right-3" 
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? "visibility_off" : "visibility"}
                </span>
              </div>
              <ErrorMessage name="newPassword" component="p" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block font-medium">Confirm New Password</label>
              <div className="flex items-center border p-3 rounded-lg mt-1 relative">
                <span className="material-symbols-outlined">lock</span>
                <Field
                  type={confirmPasswordVisible ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Enter New Password"
                  className="w-full ml-2 outline-none"
                />
                <span 
                  className="material-symbols-outlined cursor-pointer absolute right-3" 
                  onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                >
                  {confirmPasswordVisible ? "visibility_off" : "visibility"}
                </span>
              </div>
              <ErrorMessage name="confirmPassword" component="p" className="text-red-500 text-sm" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-500 text-white py-3 rounded-lg"
            >
              Change Now
            </button>
          </Form>
        )}
      </Formik>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 sm:p-6">
          <div className="bg-white py-6 rounded-lg shadow-lg w-80 text-center max-w-md">
            <p className="text-lg mb-4 px-10">Password Changed Successfully</p>
            <button className="text-blue-600 font-semibold w-full py-2 border-b border-black text-lg" onClick={() => { setShowPopup(false); navigate("/profile"); }}>
              Ok
            </button>
            <button className="text-blue-600 w-full mt-2 text-lg font-medium" onClick={() => setShowPopup(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}