import React from "react";
import Text from "@/components/ui/Text";

const TermsOfService = () => {
  return (
    <div className="w-full h-full flex justify-center items-center px-5">
      <div className="w-full max-w-[1313px] mx-auto px-4">
        <Text className="text-black text-[18px] font-semibold my-[53px] text-end">
        Last updated: 09/21/2024
        </Text>

        {/* 1. Introduction */}
        <Text className="text-[20px] font-bold font-poppins mb-4">1. Introduction:</Text>
        <Text className="text-[18px] font-light font-poppins mb-6">
          By using any of the services provided by Market Leap (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), including but not limited to our lead generation services, you are agreeing to be bound by the following terms and conditions (&quot;Terms of Service&quot;). Please read these Terms of Service carefully before accessing or using our services.
        </Text>

        {/* 2. Description of Services */}
        <Text className="text-[20px] font-bold font-poppins mb-4">2. Description of Services:</Text>
        <Text className="text-[18px] font-light font-poppins mb-6">
          Market Leap provides lead generation services and access to our proprietary lead generation engine. Our services may include, but are not limited to, ad account setup, campaign management, SEO optimization, and other proprietary systems designed to generate leads for your business.
        </Text>

        {/* 3. Subscription and Fees */}
        <Text className="text-[20px] font-bold font-poppins mb-4">3. Subscription and Fees:</Text>
        <Text className="text-[18px] font-light font-poppins mb-6">
          Market Leap&apos;s services are provided on a subscription basis. You agree to pay all fees associated with your subscription as outlined in your service agreement. Fees are charged for access to our lead generation services and engine, not for labor or content creation.
        </Text>

        {/* 4. Ownership and Intellectual Property */}
        <Text className="text-[20px] font-bold font-poppins mb-4">4. Ownership and Intellectual Property:</Text>

        <Text className="text-[18px] mb-2">4.1 Customer Content:</Text>
        <Text className="text-[18px] font-light font-poppins mb-4">
          Any content, data, or information you provide to Market Leap as inputs for our services, as well as the outputs we produce specifically for you in the course of providing our services, shall be owned by you.
        </Text>

        <Text className="text-[18px] mb-2">4.2 Our Intellectual Property:</Text>
        <Text className="text-[18px] font-light font-poppins mb-6">
          The Market Leap lead generation engine, including but not limited to our ad account setups, campaign structures, SEO systems, and any other proprietary methods or technologies we use to provide our services, remain our exclusive property. You are granted a limited, non-exclusive license to access and use these systems solely in conjunction with our services during the term of your subscription.
        </Text>

        {/* 5. Confidentiality */}
        <Text className="text-[20px] font-bold font-poppins mb-4">5. Confidentiality:</Text>
        <Text className="text-[18px] font-light font-poppins mb-6">
          Both parties agree to keep confidential any proprietary information shared during the course of service provision. This includes, but is not limited to, business strategies, customer information, and technological processes.
        </Text>

        {/* 6. Limitation of Liability */}
        <Text className="text-[20px] font-bold font-poppins mb-4">6. Limitation of Liability:</Text>
        <Text className="text-[18px] font-light font-poppins mb-6">
          Market Leap strives to provide effective lead generation services, but we cannot guarantee specific results. Our liability is limited to the fees paid for our services, and we shall not be liable for any indirect, incidental, or consequential damages.
        </Text>

        {/* 7. Termination */}
        <Text className="text-[20px] font-bold font-poppins mb-4">7. Termination:</Text>
        <Text className="text-[18px] font-light font-poppins mb-4">
          Either party may terminate the service agreement with written notice as specified in your service agreement. Upon termination, you will lose access to Market Leap&apos;s lead generation engine and services, including but not limited to:
        </Text>
        <ul className="list-disc pl-8 mb-6  text-[18px] font-light font-poppins space-y-1">
          <li>Ad account setups and campaign structures</li>
          <li>SEO optimization systems and tools</li>
          <li>Proprietary lead generation algorithms and technologies</li>
          <li>Reporting dashboards and analytics</li>
          <li>Customer support and consultation services</li>
          <li>Any other tools or features provided as part of the Market Leap platform</li>
        </ul>
        <Text className="text-[18px] font-light font-poppins mb-6">
          You will retain ownership of any content or data you provided during the service period, as well as any leads generated through our services and any outputs we generated specifically for you that we granted you ownership of during the service period.
        </Text>

        {/* 8. Default Return and Refund Policy */}
        <Text className="text-[20px] font-bold font-poppins mb-4">8. Default Return and Refund Policy:</Text>
        <Text className="text-[18px] font-light font-poppins mb-4">
          <strong>NOTE:</strong> This is a default policy. Merchants using our POS system may implement their own return and refund policies, which will override these default terms subject to proper authorization and agreement. Merchants are responsible for ensuring their custom policies comply with all applicable laws and regulations.
        </Text>

        <Text className="text-[18px] font-semibold mb-2">8.1 Default Return Conditions:</Text>
        <ul className="list-disc pl-8 mb-6  text-[18px] font-light font-poppins space-y-1">
          <li>Items may be returned within 30 days of purchase with proof of purchase</li>
          <li>Items must be in their original condition, unused, and with all original packaging</li>
          <li>
            Certain items may be non-returnable due to health, safety, or other considerations (including but not limited to perishable goods, personalized items, intimate apparel, and opened software)
          </li>
          <li>Return shipping costs are the responsibility of the customer unless the return is due to a product defect or error</li>
        </ul>

        <Text className="text-[18px] font-semibold mb-2">8.2 Default Refund Processing:</Text>
        <ul className="list-disc pl-8 mb-6  text-[18px] font-light font-poppins space-y-1">
          <li>Refunds will be issued to the original payment method</li>
          <li>Processing time for refunds is typically 5-10 business days, depending on the payment processor and financial institution</li>
          <li>Store credit or exchanges may be offered in lieu of refunds at the merchant&apos;s discretion</li>
          <li>Restocking fees may apply for certain categories of products</li>
        </ul>

        <Text className="text-[18px] font-semibold mb-2">8.3 Documentation Requirements:</Text>
        <ul className="list-disc pl-8 mb-6  text-[18px] font-light font-poppins space-y-1">
          <li>Original receipt or proof of purchase is required for all returns</li>
          <li>Photo ID may be required for verification purposes</li>
          <li>Return authorization forms may be required for certain items</li>
        </ul>

        {/* 9. Default Delivery Policy */}
        <Text className="text-[20px] font-bold font-poppins mb-4">9. Default Delivery Policy</Text>
        <Text className="text-[18px] font-light font-poppins mb-4">
          <strong>NOTE:</strong> This is a default policy. Merchants using our POS system may implement their own delivery policies, which will override these default terms subject to proper authorization and agreement. Merchants are responsible for ensuring their custom policies comply with all applicable laws and regulations.
        </Text>

        <Text className="text-[18px] mb-2">9.1 Delivery Timeframes:</Text>
        <ul className="list-disc pl-8 mb-6  text-[18px] font-light font-poppins space-y-1">
          <li>Standard delivery typically takes 3-7 business days from the date of order confirmation</li>
          <li>Expedited shipping options may be available at additional cost</li>
          <li>Delivery estimates are not guarantees and may vary based on location and other factors</li>
          <li>Order processing typically takes 1-2 business days before shipping</li>
        </ul>

        <Text className="text-[18px] mb-2">9.2 Shipping Methods and Carriers:</Text>
        <ul className="list-disc pl-8 mb-6  text-[18px] font-light font-poppins space-y-1">
          <li>Standard shipping is provided through common carriers selected by the merchant</li>
          <li>Tracking information will be provided when available</li>
          <li>Signature confirmation may be required for high-value items</li>
        </ul>

        <Text className="text-[18px] mb-2">9.3 Delivery Issues:</Text>
        <ul className="list-disc pl-8 mb-6  text-[18px] font-light font-poppins space-y-1">
          <li>Customers are responsible for providing accurate shipping information</li>
          <li>Claims for lost or damaged items must be reported within 7 days of the expected delivery date</li>
          <li>Merchants reserve the right to verify delivery issues before processing refunds or replacements</li>
        </ul>

        <Text className="text-[18px] mb-6">9.4 Responsibility for Shipments:</Text>
        <ul className="list-disc pl-8 mb-12  text-[18px] font-light font-poppins space-y-1">
          <li>Risk of loss transfers to the customer upon delivery to the carrier</li>
          <li>Insurance for shipped items is at the discretion of the merchant</li>
          <li>International shipments may be subject to customs duties and taxes, which are the responsibility of the recipient</li>
        </ul>

        {/* 10. Governing Law */}
        <Text className="text-[20px] font-bold font-poppins mb-4">10. Governing Law:</Text>
        <Text className="text-[18px] font-light font-poppins mb-6">
          These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any legal suit, action, or proceeding arising out of or related to these Terms of Service or the services provided shall be instituted exclusively in the federal courts of the United States or the courts of the State of California.
        </Text>

        {/* 11. Changes to Terms */}
        <Text className="text-[20px] font-bold font-poppins mb-4">11. Changes to Terms:</Text>
        <Text className="text-[18px] font-light font-poppins mb-12">
          Market Leap reserves the right to modify these Terms of Service at any time. We will provide notice of any material changes. Your continued use of our services after such modifications will constitute your acknowledgment and agreement to the modified terms.
        </Text>

        <Text className="text-[18px] font-light font-poppins mb-16">
          By using Market Leap&apos;s services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
        </Text>
      </div>
    </div>
  );
};

export default TermsOfService;
