
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";

const ContactMe = () => {
 
  return (
    <section className="bg-blue-500">
    <div className="max-w-8xl mx-auto px-8 relative   my-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
      <div className="">
        
        <h2 className="text-center text-3xl font-bold text-onyx dark:text-white lg:text-left lg:text-5xl">
        Unlock Your Solutions: Schedule Your Consultation Now!
        </h2>
        <p className="mt-4 text-center text-lg md:text-xl text-onyx lg:text-left">
        अपनी समस्याओं का समाधान पाने के लिए आज ही अपनी कंसल्टेशन शेड्यूल करें!{" "}
         
          <br className="hidden lg:inline-block" /> 
        </p>
      </div>
      <a href="https://calendly.com/panditkailashshastriji-o/30min">
      <button className="relative inline-flex h-24 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-9 py-6 text-lg font-medium text-white backdrop-blur-3xl">
 Make An Appointment
  </span>
</button>
</a>
       
    </div>
    </section>
  );
};
export default ContactMe;