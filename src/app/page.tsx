import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import { AppleCardsCarouselDemo } from "@/components/card";
import { TimelineDemo } from "@/components/blogs";
import Header from '@/components/ui/header'
import InstagramEmbed from "@/components/instagram1";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { FeaturesSectionDemo } from "@/components/section";
import ContactMe from "@/components/cta";

import { FocusCardsDemo } from "@/components/photos";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    
    <main className="flex flex-col min-h-[100dvh] space-y-10">
     
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I am Pandit Kailash Shastri Ji👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-3xl text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-2xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <FocusCardsDemo></FocusCardsDemo>
     
      <FeaturesSectionDemo></FeaturesSectionDemo>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Specialist in</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
     
     
     
      
      <ContactMe></ContactMe>
      <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
               
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Blogs
                </h2>
                
              </div>
            </div>
          </BlurFade>
       
          
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
     
      <section id="Reviews">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                ⭐
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Reviews
                </h2>
                
              </div>
            </div>
          </BlurFade>
          <InstagramEmbed></InstagramEmbed>
          </div>
          </section>
          
      <section id="contact" >
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-6xl font-bold tracking-tighter sm:text-7xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              क्या आप अपनी समस्याओं का समाधान चाहते हैं?{" "}
                <Link
                  href={DATA.contact.social.facebook.url}
                  className="text-blue-500 hover:underline"
                >
                  तो आज ही अपॉइंटमेंट बुक करें।
                </Link>{" "}
                मैं जल्द से जल्द आपकी मदद के लिए तैयार हूँ, लेकिन कृपया ध्यान दें—सिर्फ वही सवाल पूछें जो वाकई मायने रखते हैं। बेवजह की बातों पर मेरा ध्यान नहीं जाता!
              </p>
              
            </div>
            <div className="flex items-center gap-4  justify-between">
            <a href="callto:7357565986">
            <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-10">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-lg font-medium text-white backdrop-blur-3xl">
    Call
  </span>
</button>
</a>
<a href="https://calendly.com/panditkailashshastriji-o/30min">
<button className="relative inline-flex h-24 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-10">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-9 py-4 text-lg font-medium text-white backdrop-blur-3xl">
    Make An Appointment
  </span>
</button>
</a>
<a href="mailto:panditkailashshastriji.o@gmail.com">
  <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-10">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-lg font-medium text-white backdrop-blur-3xl">
      Email
    </span>
  </button>
</a>
</div>
           
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
