import { BRAND } from "./data";

export const LEGAL = {
  company: "Coreline IT Solutions, Pune",
  website: "https://design1123.com",
  lastUpdated: "May 21, 2026",
  contactEmail: BRAND.email,
  contactPhone: BRAND.phone,
} as const;

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
  footer?: string;
};

export const privacySections: LegalSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    paragraphs: [
      `Welcome to ${BRAND.name} ("we," "our," or "us"). We respect your privacy and are committed to protecting the personal information you share when you use our website, mobile application, and related services (collectively, the "Services").`,
      "This Privacy Policy explains what information we collect, how we use it, how we share it, and the choices you have. By using our Services, you agree to the practices described in this policy.",
    ],
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    paragraphs: ["We may collect the following types of information:"],
    list: [
      "Account information: name, email address, phone number, business name, and profile details you provide during registration.",
      "Usage data: app interactions, features used, templates selected, download history, and device identifiers.",
      "Payment information: billing details processed through secure third-party payment providers (we do not store full card numbers on our servers).",
      "Content you upload: logos, images, text, and brand assets you add to create designs.",
      "Technical data: IP address, browser type, operating system, app version, and crash logs.",
      "Communications: messages you send to our support team via email, chat, or phone.",
    ],
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    paragraphs: ["We use collected information to:"],
    list: [
      "Provide, maintain, and improve the Design 1123 platform and creative tools.",
      "Process subscriptions, trials, and in-app purchases.",
      "Personalize templates, recommendations, and festival alerts for your industry.",
      "Send service updates, security alerts, and promotional messages (you may opt out of marketing).",
      "Respond to support requests and resolve disputes.",
      "Detect fraud, abuse, and violations of our Terms & Conditions.",
      "Comply with applicable laws and regulatory requirements in India and other jurisdictions.",
    ],
  },
  {
    id: "flowchart",
    title: "4. Flowchart (App Functionality & Data Handling)",
    paragraphs: [
      "The following outlines how user data is handled across specific features and user flows within the Design1123 application:",
    ],
    list: [
      "User Registration: When registering, you provide basic account information which is required to create your profile and personalize your experience.",
      "Political Category: If you use the application for political profiles, you may provide information such as your designation and protocol to customize designs for election campaigns, birthdays, and public meetings.",
      "Business Category: If you use the application for a business (e.g., shops, real estate, education), you may provide business-related information to customize designs for your specific category.",
      "WhatsApp Category Requests: If your category is unavailable, you may voluntarily contact us via WhatsApp to request it. Information shared through WhatsApp is used solely to understand and fulfill this request.",
      "Image Designs & Videos: You can customize Image Designs and Videos by changing colours, fonts, sizes, and adding text. You may also upload User-Generated Content such as your own photos and logos.",
      "User-Generated Content: Photos, logos, names, and text you upload are processed solely to provide editing and customization features. We do not control how you share exported designs through third-party applications after downloading them.",
    ]
  },
  {
    id: "purchases",
    title: "5. Purchases & Subscriptions",
    paragraphs: [
      "We offer 4 standard plans priced at ₹99, ₹299, ₹799, and ₹1999, along with a VIP plan for ₹2999. We also offer a ₹1 trial plan.",
      "Please note: For users who select the ₹1 trial plan, a ₹299 autopay mandate will be initiated and automatically deducted after the 3-day trial period ends.",
      "Payment details are processed by secure third-party providers. We do not store full card numbers on our servers."
    ]
  },
  {
    id: "sharing",
    title: "6. How We Share Information",
    paragraphs: [
      "We do not sell your personal information. We may share data only in these circumstances:",
    ],
    list: [
      "Service providers: cloud hosting, analytics, payment processing, and customer support partners bound by confidentiality agreements.",
      "Legal requirements: when required by law, court order, or government authority.",
      "Business transfers: in connection with a merger, acquisition, or sale of assets, with notice where required by law.",
      "With your consent: when you explicitly authorize sharing, such as publishing designs to social platforms.",
    ],
  },
  {
    id: "retention",
    title: "7. Data Retention",
    paragraphs: [
      "We retain your information for as long as your account is active or as needed to provide Services. Uploaded designs and account data may be stored until you delete them or close your account, subject to backup and legal retention periods.",
      "We may retain anonymized or aggregated data indefinitely for analytics and product improvement.",
    ],
  },
  {
    id: "security",
    title: "8. Security",
    paragraphs: [
      "We implement industry-standard safeguards including encryption in transit, access controls, and regular security reviews. No method of transmission over the internet is 100% secure; we encourage you to use strong passwords and keep your login credentials confidential.",
    ],
  },
  {
    id: "your-rights",
    title: "9. Your Rights & Choices",
    paragraphs: ["Depending on applicable law, you may have the right to:"],
    list: [
      "Access, correct, or delete your personal information.",
      "Withdraw consent for marketing communications.",
      "Request a copy of data we hold about you.",
      "Lodge a complaint with a data protection authority.",
    ],
    footer: `To exercise these rights, contact us at ${BRAND.email}. We will respond within a reasonable timeframe as required by law.`,
  },
  {
    id: "children",
    title: "10. Children's Privacy",
    paragraphs: [
      "Our Services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you believe a child has provided us data, please contact us and we will delete it promptly.",
    ],
  },
  {
    id: "third-party",
    title: "11. Third-Party Links & Services",
    paragraphs: [
      "Our app and website may contain links to third-party sites or integrate with social platforms (e.g., WhatsApp, Instagram). We are not responsible for the privacy practices of those third parties. We encourage you to review their policies before sharing information.",
    ],
  },
  {
    id: "changes",
    title: "12. Changes to This Policy",
    paragraphs: [
      'We may update this Privacy Policy from time to time. We will post the revised version on this page and update the "Last updated" date. Material changes may be communicated via email or in-app notice.',
    ],
  },
  {
    id: "contact",
    title: "13. Contact Us",
    paragraphs: [
      `If you have questions about this Privacy Policy or our data practices, please contact:`,
      `${LEGAL.company}`,
      `Email: ${BRAND.email}`,
      `Phone: ${BRAND.phone}`,
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    id: "agreement",
    title: "1. Agreement to Terms",
    paragraphs: [
      `These Terms & Conditions ("Terms") govern your access to and use of ${BRAND.name} website, mobile application, and related services operated by ${LEGAL.company} ("Company," "we," "us").`,
      "By creating an account, downloading the app, or using our Services, you agree to be bound by these Terms. If you do not agree, do not use our Services.",
    ],
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    paragraphs: [
      "You must be at least 18 years old and capable of forming a binding contract under Indian law. If you use the Services on behalf of a business, you represent that you have authority to bind that business to these Terms.",
    ],
  },
  {
    id: "account",
    title: "3. Account Registration",
    paragraphs: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Notify us immediately of any unauthorized use.",
      "You agree to provide accurate, current, and complete registration information and to update it as needed.",
    ],
  },
  {
    id: "subscriptions",
    title: "4. Subscriptions & Payments",
    paragraphs: [
      "Certain features require a paid subscription or one-time purchase. Prices, plan features, and validity periods are displayed at checkout and may change with notice.",
      "Payments are processed through authorized payment partners. Subscriptions may auto-renew unless cancelled before the renewal date according to your plan terms.",
      "Refunds are handled per our Cancellation and Refund Policy. Trial and promotional offers are subject to specific terms shown at the time of purchase.",
    ],
  },
  {
    id: "license",
    title: "5. License & Acceptable Use",
    paragraphs: [
      "We grant you a limited, non-exclusive, non-transferable license to use the Services for lawful business and personal branding purposes.",
      "You agree not to:",
    ],
    list: [
      "Copy, resell, or redistribute our templates, assets, or software without permission.",
      "Use the Services to create illegal, defamatory, hateful, or infringing content.",
      "Reverse engineer, scrape, or attempt to extract source code or template libraries.",
      "Circumvent usage limits, credits, or payment systems.",
      "Upload malware or interfere with platform security or performance.",
    ],
  },
  {
    id: "content",
    title: "6. Your Content & Our Templates",
    paragraphs: [
      "You retain ownership of content you upload (logos, photos, text). You grant us a license to host, process, and display that content solely to provide the Services.",
      "Templates, fonts, stock elements, and platform designs remain our property or that of our licensors. Your subscription grants you a license to use exported designs for permitted commercial and personal use as described in your plan.",
      "You are solely responsible for ensuring your final designs comply with applicable laws, advertising standards, and third-party rights (including trademarks and celebrity likenesses).",
    ],
  },
  {
    id: "ip",
    title: "7. Intellectual Property",
    paragraphs: [
      `The ${BRAND.name} name, logo, app interface, and underlying technology are protected by copyright, trademark, and other intellectual property laws. Unauthorized use is prohibited.`,
    ],
  },
  {
    id: "disclaimer",
    title: "8. Disclaimers",
    paragraphs: [
      'The Services are provided "as is" and "as available" without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, or non-infringement.',
      "We do not guarantee uninterrupted access, error-free operation, or specific business results from use of our designs or tools.",
    ],
  },
  {
    id: "liability",
    title: "9. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, the Company shall not be liable for indirect, incidental, special, consequential, or punitive damages, or loss of profits, data, or goodwill.",
      "Our total liability for any claim arising from these Terms or the Services shall not exceed the amount you paid us in the twelve (12) months preceding the claim.",
    ],
  },
  {
    id: "indemnity",
    title: "10. Indemnification",
    paragraphs: [
      "You agree to indemnify and hold harmless the Company and its officers, employees, and partners from claims arising out of your use of the Services, your content, or your violation of these Terms or applicable law.",
    ],
  },
  {
    id: "termination",
    title: "11. Termination",
    paragraphs: [
      "We may suspend or terminate your account for violation of these Terms, non-payment, fraud, or legal requirements. You may cancel your account at any time through the app or by contacting support.",
      "Upon termination, your right to use the Services ceases. Provisions that by nature should survive (payment obligations, disclaimers, liability limits) will remain in effect.",
    ],
  },
  {
    id: "governing-law",
    title: "12. Governing Law & Disputes",
    paragraphs: [
      "These Terms are governed by the laws of India. Courts in Mumbai, Maharashtra shall have exclusive jurisdiction, subject to mandatory consumer protection laws in your jurisdiction.",
      "We encourage you to contact us first to resolve disputes informally before pursuing legal remedies.",
    ],
  },
  {
    id: "changes-terms",
    title: "13. Changes to Terms",
    paragraphs: [
      "We may modify these Terms at any time. Continued use after changes constitutes acceptance. We will provide notice of material changes via the app, email, or website.",
    ],
  },
  {
    id: "contact-terms",
    title: "14. Contact",
    paragraphs: [
      `Questions about these Terms? Contact ${LEGAL.company} at ${BRAND.email} or ${BRAND.phone}.`,
    ],
  },
];

export const referralSections: LegalSection[] = [
  {
    id: "overview",
    title: "1. Program Overview",
    paragraphs: [
      `The ${BRAND.name} Referral Program ("Program") is designed to reward our loyal users for sharing our platform with friends, family, and other business owners. By inviting new businesses to design professional marketing graphics with ${BRAND.name}, you and your referrals can earn exclusive benefits.`,
      "By participating in the Program, you agree to these Referral Policy terms, which supplement our Terms & Conditions and Privacy Policy.",
    ],
  },
  {
    id: "eligibility",
    title: "2. Eligibility Criteria",
    paragraphs: [
      "To participate in the Referral Program as a Referrer (the person sharing the code) or a Referee (the person receiving the code), you must meet the following requirements:",
    ],
    list: [
      "You must be an active, registered user of the Design 1123 platform.",
      "You must be at least 18 years of age.",
      "You must not use the Program for spamming, bulk emailing, or any fraudulent activities.",
      "Self-referral (creating multiple accounts or referring yourself) is strictly prohibited and will lead to immediate disqualification and account suspension.",
    ],
  },
  {
    id: "how-to-refer",
    title: "3. How to Refer & Earn",
    paragraphs: [
      "Earning rewards with Design 1123 is simple and automated:",
    ],
    list: [
      "Get Your Code: Access your unique referral link or code from the 'Refer & Earn' section in the Design 1123 application.",
      "Share: Send your referral link/code to friends, partners, or other businesses who want professional design templates.",
      "Referee Registration: The Referee must download the Design 1123 app, register a new account, and apply your referral code during sign-up.",
      "Referee Purchase: The Referee must purchase any of our premium subscription plans (Pro Quarterly, Growth Annual, or Studio Mega).",
    ],
  },
  {
    id: "rewards",
    title: "4. Referral Rewards & Incentives",
    paragraphs: [
      "Once the Referee completes their first qualifying purchase, rewards will be credited as follows:",
    ],
    list: [
      "Referrer Benefit: The Referrer receives 30 days of complimentary extension on their active subscription (or a fixed set of premium design credits if on a trial/starter tier).",
      "Referee Benefit: The Referee gets a flat 10% discount on their first paid subscription plan or receives 15 bonus high-definition export credits.",
      "No limits: There is no limit to the number of friends you can refer, allowing you to stack your subscription extensions indefinitely.",
    ],
  },
  {
    id: "redemption",
    title: "5. Reward Redemption & Validity",
    paragraphs: [
      "Referral rewards are subject to the following validation rules:",
      "Bonus days or credits are credited automatically within 24-48 hours after a successful transaction by the Referee.",
      "Rewards cannot be exchanged for physical cash or transferred to other user accounts.",
      "If the Referee cancels their purchase or receives a refund under our refund policy, any referral rewards credited to the Referrer for that referral will be voided.",
    ],
  },
  {
    id: "fair-use",
    title: "6. Abuse and Fair Play",
    paragraphs: [
      "We want to keep this program fair and rewarding for everyone. The following activities are prohibited:",
    ],
    list: [
      "Running paid search engine or social media ads using terms like 'Design 1123', 'Design 1123 Coupon', or similar brand names to drive traffic to your referral link.",
      "Spamming online forums, blog comments, or bulk mailing lists with your referral link.",
      "Creating fake or automated accounts to generate referrals.",
      "Any behavior that, in our sole discretion, is deemed manipulative, deceptive, or abusive to the platform.",
    ],
    footer: "Violation of these fair play rules will result in immediate termination of your account, forfeiture of all rewards, and potential legal action.",
  },
  {
    id: "modifications",
    title: "7. Modifications & Program Changes",
    paragraphs: [
      "Coreline IT Solutions reserves the right to modify, suspend, or terminate the Referral Program, its rewards, or these policies at any time without prior notice. Any changes will be posted on this page and will apply to all subsequent referrals.",
    ],
  },
  {
    id: "contact",
    title: "8. Contact & Support",
    paragraphs: [
      `If you have any questions, or if your referral rewards have not been credited correctly, please reach out to our support team with the details of your referral (Referee email or transaction receipt):`,
      `Company: ${LEGAL.company}`,
      `Email: ${BRAND.email}`,
      `Phone: ${BRAND.phone}`,
    ],
  },
];
