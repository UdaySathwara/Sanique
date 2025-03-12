import { useNavigate } from "react-router-dom";

export default function HelpandSupport() {
  const navigate = useNavigate();

  return (
    <div className="max-w-full flex flex-col justify-center mx-auto bg-[#f7f7fc] min-h-screen px-6 pt-10 pb-20 text-gray-900">
      {/* Header */}
      <div className="flex items-center py-2 mb-6 relative">
        <span
          className="material-symbols-outlined cursor-pointer"
          onClick={() => navigate(-1)}
        >
          arrow_back_ios
        </span>
        <h2 className="text-xl font-semibold mx-auto lg:text-2xl">Help & Support</h2>
      </div>

      {/* Content */}
      <div className="text-sm space-y-6 lg:text-base lg:px-6">
        <section>
          <h3 className="font-semibold">1. Frequently Asked Questions (FAQs)</h3>
          <p>
            Before contacting support, check our FAQs section for quick answers to common queries, including:
            <ul className="list-disc list-inside mt-2">
              <li>Order tracking & delivery status</li>
              <li>Payment & refund policies</li>
              <li>Product availability & warranty</li>
              <li>Account & profile management</li>
            </ul>
            You can access the FAQs directly in the Help & Support section of the app.
          </p>
        </section>

        <section>
          <h3 className="font-semibold">2. Contact Customer Support</h3>
          <p>
            If you need further assistance, our support team is available to help you with:
            <ul className="list-disc list-inside mt-2">
              <li>Order-related inquiries</li>
              <li>Account & login issues</li>
              <li>Technical problems with the app</li>
              <li>Returns, refunds, and replacements</li>
            </ul>
            📧 Email Support : krish@example.com
            <br />📞 Phone Support : (+91) 12345 67890
            <br />Our customer support is available 9 AM – 6 PM, Monday to Saturday.
          </p>
        </section>

        <section>
          <h3 className="font-semibold">3. Report an Issue</h3>
          <p>
            If you're facing a technical issue, you can report it directly through the app:
            <ul className="list-disc list-inside mt-2">
              <li>Go to Help & Support in the app</li>
              <li>Select Report an Issue</li>
              <li>Describe the problem and attach screenshots if needed</li>
              <li>Submit your request, and our team will respond promptly</li>
            </ul>
          </p>
        </section>

        <section>
          <h3 className="font-semibold">4. Order & Delivery Assistance</h3>
          <p>
            For any concerns related to orders, deliveries, or cancellations, you can:
            <ul className="list-disc list-inside mt-2">
              <li>Track your order in My Orders</li>
              <li>Request a return or refund through Order History</li>
              <li>Contact customer service for urgent assistance</li>
            </ul>
          </p>
        </section>

        <section>
          <h3 className="font-semibold">5. Feedback & Suggestions</h3>
          <p>
            We value your feedback! If you have any suggestions for improving the app, products, or services, feel free to share them via:
            <ul className="list-disc list-inside mt-2">
              <li>The Feedback option in the app</li>
              <li>Emailing us at krish@example.com</li>
              <li>Leaving a review on the App Store/Google Play</li>
            </ul>
            Your feedback helps us enhance our services and provide a better experience for you.
          </p>
        </section>
      </div>
    </div>
  );
}
