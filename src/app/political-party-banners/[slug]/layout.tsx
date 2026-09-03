import { Metadata } from 'next';

const seoKeywords: Record<string, string> = {
  "bjp": "BJP Banner, BJP Poster, BJP Political Banner, BJP Political Poster, BJP Election Banner, BJP Election Poster, BJP Campaign Banner, BJP Party Banner, BJP Social Media Post, BJP Banner Design, BJP Poster Design, भाजपा बैनर, भाजपा पोस्टर, भाजपा राजकीय बॅनर, भाजपा निवडणूक पोस्टर",
  "inc": "Congress Banner, Congress Poster, Congress Political Banner, Congress Political Poster, Congress Election Banner, Congress Election Poster, Congress Campaign Banner, Congress Party Banner, Congress Social Media Post, Congress Banner Design, Congress Poster Design, कांग्रेस बैनर, कांग्रेस पोस्टर, कांग्रेस राजनीतिक बैनर, कांग्रेस चुनाव पोस्टर",
  "mns": "MNS Banner, MNS Poster, MNS Political Banner, MNS Political Poster, MNS Election Banner, MNS Election Poster, MNS Campaign Banner, MNS Party Banner, MNS Banner Design, MNS Poster Design, मनसे बॅनर, मनसे पोस्टर, मनसे राजकीय बॅनर, मनसे निवडणूक पोस्टर",
  "ncp": "NCP Banner, NCP Poster, NCP Political Banner, NCP Political Poster, NCP Election Banner, NCP Election Poster, NCP Campaign Banner, NCP Party Banner, NCP Social Media Post, NCP Banner Design, NCP Poster Design, राष्ट्रवादी कांग्रेस बैनर, राष्ट्रवादी कांग्रेस पोस्टर, राष्ट्रवादी बॅनर, राष्ट्रवादी पोस्टर",
  "ncp-sp": "NCP Sharad Pawar Banner, NCP SP Banner, NCP Sharad Pawar Poster, NCP SP Poster, Sharad Pawar Political Banner, Sharad Pawar Political Poster, NCP Sharadchandra Pawar Banner, NCP Sharadchandra Pawar Poster, NCP SP Election Banner, NCP SP Election Poster, NCP SP Campaign Banner, शरद पवार बॅनर, शरद पवार पोस्टर, राष्ट्रवादी शरद पवार बॅनर, राष्ट्रवादी शरद पवार पोस्टर",
  "shiv-sena": "Shiv Sena Banner, Shiv Sena Poster, Shiv Sena Political Banner, Shiv Sena Political Poster, Shiv Sena Election Banner, Shiv Sena Election Poster, Shiv Sena Campaign Banner, Shiv Sena Party Banner, Shiv Sena Social Media Post, Shiv Sena Banner Design, Shiv Sena Poster Design, शिवसेना बॅनर, शिवसेना पोस्टर, शिवसेना राजकीय बॅनर, शिवसेना निवडणूक पोस्टर",
  "shiv-sena-ubt": "Shiv Sena UBT Banner, Shiv Sena UBT Poster, Shiv Sena UBT Political Banner, Shiv Sena UBT Political Poster, Shiv Sena UBT Election Banner, Shiv Sena UBT Election Poster, Shiv Sena UBT Campaign Banner, Shiv Sena UBT Party Banner, Uddhav Thackeray Banner, Uddhav Thackeray Poster, शिवसेना उद्धव बाळासाहेब ठाकरे बॅनर, शिवसेना UBT बॅनर, शिवसेना UBT पोस्टर, उद्धव ठाकरे बॅनर, उद्धव ठाकरे पोस्टर",
  "aap": "AAP Banner, AAP Poster, AAP Political Banner, AAP Political Poster, AAP Election Banner, AAP Election Poster, AAP Campaign Banner, AAP Party Banner, AAP Social Media Post, AAP Banner Design, AAP Poster Design, आम आदमी पार्टी बैनर, आम आदमी पार्टी पोस्टर, AAP राजनीतिक बैनर, AAP चुनाव पोस्टर",
  "sp": "Samajwadi Party Banner, Samajwadi Party Poster, SP Political Banner, SP Political Poster, Samajwadi Party Election Banner, Samajwadi Party Election Poster, Samajwadi Party Campaign Banner, Samajwadi Party Party Banner, Samajwadi Party Social Media Post, Samajwadi Party Banner Design, Samajwadi Party Poster Design, समाजवादी पार्टी बैनर, समाजवादी पार्टी पोस्टर, सपा बैनर, सपा पोस्टर, समाजवादी पार्टी चुनाव पोस्टर",
  "apna-dal": "Apna Dal Banner, Apna Dal Poster, Apna Dal Political Banner, Apna Dal Political Poster, Apna Dal Election Banner, Apna Dal Election Poster, Apna Dal Campaign Banner, Apna Dal Party Banner, Apna Dal Banner Design, Apna Dal Poster Design, अपना दल बैनर, अपना दल पोस्टर, अपना दल राजनीतिक बैनर, अपना दल चुनाव पोस्टर",
  "bsp": "BSP Banner, BSP Poster, BSP Political Banner, BSP Political Poster, BSP Election Banner, BSP Election Poster, BSP Campaign Banner, BSP Party Banner, BSP Social Media Post, BSP Banner Design, BSP Poster Design, बहुजन समाज पार्टी बैनर, बहुजन समाज पार्टी पोस्टर, बसपा बैनर, बसपा पोस्टर, बहुजन समाज पार्टी चुनाव पोस्टर",
};

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const unwrappedParams = await params;
  const slug = unwrappedParams.slug;
  const keywords = seoKeywords[slug] || "Political Banner, Election Poster, Political Social Media Post";
  
  const partyNames: Record<string, string> = {
    "bjp": "Bharatiya Janata Party (BJP)",
    "inc": "Indian National Congress (INC)",
    "shiv-sena": "Shiv Sena",
    "shiv-sena-ubt": "Shiv Sena (UBT)",
    "ncp": "Nationalist Congress Party (NCP)",
    "ncp-sp": "NCP – Sharadchandra Pawar",
    "mns": "Maharashtra Navnirman Sena (MNS)",
    "aap": "Aam Aadmi Party (AAP)",
    "bsp": "Bahujan Samaj Party (BSP)",
    "sp": "Samajwadi Party (SP)"
  };
  
  const partyName = partyNames[slug] || slug.toUpperCase();
  
  return {
    title: `${partyName} Banners & Posters | Design 1123`,
    description: `Download ${partyName} political banners, posters, and campaign materials. Create your personalized post easily.`,
    keywords: keywords,
  };
}

export default function PartyDynamicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
