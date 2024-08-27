"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Trusted Expertise for Lasting Solutions
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              पंडित कैलाश शास्त्री जी
              </span>{" "}
               की विशेषज्ञता लंबे समय तक चलने वाले समाधान प्रदान करती है। उनके द्वारा सुझाए गए उपाय विश्वसनीय हैं और आपके जीवन की समस्याओं के स्थायी समाधान के लिए डिज़ाइन किए गए हैं। उनकी सलाह पर भरोसा करें और दीर्घकालिक शांति और समृद्धि प्राप्त करें।
            </p>
            <Image
              src="/t15.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
const D2 = () => {
    return (
      <>
        {[...new Array(1).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                पंडित जी
                </span>{" "}
                की पेशेवरता और नैतिकता उनकी सेवाओं का मुख्य आधार हैं। वे हर मामले में पारदर्शिता और ईमानदारी का पालन करते हैं, यह सुनिश्चित करते हुए कि आप को हर कदम पर सही और उचित सलाह मिले।
              </p>
              <Image
                src="/t16.jpg"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          );
        })}
      </>
    );
  };
  const D3 = () => {
    return (
      <>
        {[...new Array(1).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                पंडित जी 
                </span>{" "}
                के साथ की गई सलाह और उपायों ने अनेक ग्राहकों के जीवन में सकारात्मक बदलाव लाए हैं। उनकी सफलता की कहानियाँ और ग्राहक अनुभव आपके लिए प्रेरणा और आशा का स्रोत हो सकते हैं। पढ़ें कि कैसे पंडित जी ने दूसरों की समस्याओं का समाधान किया और उनके जीवन को बेहतर बनाया।
              </p>
              <Image
                src="/t17.jpg"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          );
        })}
      </>
    );
  };
  const D4 = () => {
    return (
      <>
        {[...new Array(1).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                पंडित कैलाश शास्त्री जी 
                </span>{" "}
               अपने ग्राहकों के प्रति उच्च संवेदनशीलता और समर्पण के साथ काम करते हैं। उनकी व्यक्तिगत देखभाल और दयालुता यह सुनिश्चित करती है कि प्रत्येक ग्राहक को उनका पूरा समर्थन प्राप्त हो और उनकी समस्याओं का समाधान प्रभावी रूप से हो।
              </p>
              <Image
                src="/t18.jpg"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          );
        })}
      </>
    );
  };

const data = [
  {
    category: "स्थायित्व (Stability)",
    title: "दीर्घकालिक समाधान और विश्वसनीयता (Long-Term Solutions and Reliability)",
    src: "/t10.jpg",
    content: <DummyContent />,
  },
  {
    category: "विवेक (Integrity)",
    title: "प्रोफेशनलिज़्म और नैतिकता (Professionalism and Ethics)",
    src: "/t12.jpg",
    content: <D2 />,
  },
  {
    category: "सफलता (Success)",
    title: "ग्राहक अनुभव और सफलता की कहानियाँ (Client Experiences and Success Stories)",
    src: "/t13.jpg",
    content: <D3 />,
  },

  {
    category: "समर्पण (Dedication",
    title: "संवेदनशीलता और समर्पण (Empathy and Dedication)",
    src: "/t14.jpg",
    content: <D4 />,
  },
 
];
