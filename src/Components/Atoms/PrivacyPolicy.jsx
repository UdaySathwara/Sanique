import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="max-w-full flex flex-col justify-center mx-auto bg-[#f7f7fc] min-h-screen p-4 pb-20 text-gray-900">
      {/* Header */}
      <div className="flex items-center py-2 mb-6 relative justify-center">
        <span
          className="material-symbols-outlined cursor-pointer md:left-4 left-2 absolute xl:hidden"
          onClick={() => navigate(-1)}
        >
          arrow_back_ios
        </span>
        <h2 className="text-xl font-semibold lg:text-2xl">Privacy Policy</h2>
      </div>

      {/* Content */}
      <div className="text-sm space-y-6 lg:text-base lg:px-6">
        <section>
          <h3 className="font-semibold">1. Types of Data We Collect</h3>
          <p>
            When you use our App, we may collect the following types of information:
            <ul className="list-disc list-inside mt-2">
              <li>Personal Information: Name, email address, phone number, billing and shipping address.</li>
              <li>Order Information: Details about products purchased, order history, payment methods, and transaction details.</li>
              <li>Device Information: IP address, device type, operating system, and app usage analytics.</li>
              <li>Location Data: With your consent, we may collect location data for order delivery purposes.</li>
              <li>Cookies & Tracking Technologies: We may use cookies, beacons, and similar technologies to improve user experience.</li>
            </ul>
          </p>
        </section>

        <section>
          <h3 className="font-semibold">2. Use of Your Personal Data</h3>
          <p>
            We use the data we collect for the following purposes:
            <ul className="list-disc list-inside mt-2">
              <li>To process orders and provide customer support.</li>
              <li>To personalize user experience and improve our App.</li>
              <li>To send order confirmations, promotional offers, and updates via email or notifications.</li>
              <li>To enhance security, prevent fraud, and comply with legal obligations.</li>
              <li>To analyze user behavior for improving app performance and functionality.</li>
            </ul>
          </p>
        </section>

        <section>
          <h3 className="font-semibold">3. Disclosure of Your Personal Data</h3>
          <p>
            We do not sell or trade your personal information. However, we may share your data with:
            <ul className="list-disc list-inside mt-2">
              <li>Service Providers: Third-party vendors who assist with payment processing, shipping, and customer support.</li>
              <li>Legal Authorities: When required by law or to protect our legal rights.</li>
              <li>Business Transfers: If our company merges, sells, or transfers assets, your data may be shared as part of the transaction.</li>
            </ul>
            We ensure that all third parties handling your data comply with strict privacy policies.
          </p>
        </section>

        <section>
          <h3 className="font-semibold">4. Data Security & Retention</h3>
          <p>
            We take appropriate security measures to protect your data from unauthorized access, loss, or misuse. Your data is retained only as long as necessary for business and legal purposes.
          </p>
        </section>

        <section>
          <h3 className="font-semibold">5. Your Rights & Choices</h3>
          <p>
            You have the following rights regarding your personal data:
            <ul className="list-disc list-inside mt-2">
              <li>Access & Update: You can review and update your information in the App.</li>
              <li>Opt-Out: You can opt out of marketing communications at any time.</li>
              <li>Delete Account: You can request data deletion by contacting our support team.</li>
            </ul>
          </p>
        </section>

        <section>
          <h3 className="font-semibold">6. Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted in the App, and we encourage you to review them periodically.
          </p>
        </section>

        <section>
          <h3 className="font-semibold">7. Contact Us</h3>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
            <br />📧 Email: Udaysath@example.com
            <br />📞 Phone: (+91) 98765 43210
            <br /><br />This Privacy Policy is designed to ensure transparency and compliance with applicable data protection laws. Your continued use of the App signifies your acceptance of these terms.
          </p>
        </section>
      </div>
    </div>
  );
}
