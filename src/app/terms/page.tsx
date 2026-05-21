import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { LegalPageShell } from "@/components/layout/LegalPageShell";
import { BRAND } from "@/lib/data";
import { termsSections } from "@/lib/legal";

export const metadata: Metadata = {
  title: `Terms & Conditions — ${BRAND.name}`,
  description: `Read the terms governing your use of ${BRAND.name} apps, subscriptions, and creative services.`,
};

export default function TermsPage() {
  return (
    <LegalPageShell>
      <LegalDocument
        title="Terms & Conditions"
        description={`Please read these terms carefully before using ${BRAND.name}. They govern your account, subscriptions, content, and use of our platform.`}
        sections={termsSections}
        sibling={{ label: "Privacy Policy", href: "/privacy" }}
      />
    </LegalPageShell>
  );
}
