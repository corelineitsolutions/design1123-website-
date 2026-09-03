import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Political Party Banners | Design 1123',
  description: 'Select a political party to view and customize high-quality banners for your campaigns in Maharashtra.',
  keywords: 'Political Banner, Political Poster, Political Banner Design, Political Poster Design, Election Banner, Election Poster, Election Campaign Banner, Political Campaign Poster, Political Social Media Post, Political Advertisement Banner, Political Advertisement Poster, Election Campaign Poster, Political Party Banner, Political Party Poster, राजकीय बॅनर, राजकीय पोस्टर, निवडणूक बॅनर, निवडणूक पोस्टर, राजनीतिक बैनर, राजनीतिक पोस्टर, चुनाव बैनर, चुनाव पोस्टर',
};

export default function PoliticalPartyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
