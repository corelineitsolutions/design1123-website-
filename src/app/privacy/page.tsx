import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { LegalPageShell } from "@/components/layout/LegalPageShell";
import { BRAND } from "@/lib/data";
import { privacySections } from "@/lib/legal";

export const metadata: Metadata = {
  title: `Privacy Policy — ${BRAND.name}`,
  description: `Learn how ${BRAND.name} collects, uses, and protects your personal information.`,
};

export default function PrivacyPage() {
  return (
    <LegalPageShell>
      <LegalDocument
        title="Privacy Policy"
        description={`This policy describes how ${BRAND.name} handles your personal data when you use our website, mobile app, and branding services.`}
        sections={privacySections}
        sibling={{ label: "Terms & Conditions", href: "/terms" }}
      />
    </LegalPageShell>
  );
}
