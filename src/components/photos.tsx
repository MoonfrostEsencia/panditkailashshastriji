import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: " रिश्तों में शांति और सामंजस्य (Peace and Harmony in Relationships) व्यक्तिगत संकट और आंतरिक शांति (Personal Crises and Inner Peace)",
      src: "/t1.jpg",
    },
    {
      title: "समाज में स्वीकार्यता और आत्मविश्वास (Social Acceptance and Self-Confidence)",
      src: "/t2.jpg",
    },
    {
      title: "सम्मोहन और वशीकरण (Hypnosis and Vashikaran) ",
      src: "/t3.jpg",
    },
    {
      title: "नए अवसर और सकारात्मक बदलाव (New Opportunities and Positive Changes) ",
      src: "/t4.jpg",
    },
    {
      title: "व्यक्तिगत संकट और आंतरिक शांति (Personal Crises and Inner Peace)",
      src: "/t5.jpg",
    },
    {
      title: "संबंधों की गहराई और समझ (Depth and Understanding in Relationships)",
      src: "/t6.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
