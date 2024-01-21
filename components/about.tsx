"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am Computer Science undergraduate pursuing {" "}
        <span className="font-medium">Data Science in Gokaraju Rangaraju Institute of Engineering Technology.</span>,I am currently learning  {" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        Developing web applications. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with DevOps, Data Science, TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and watching cricket. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history</span>. I'm also
        learning Spanish.
        <br />  <br/>
        I enjoy sharing my thoughts on various topics. Check out my latest blog posts on <u> <a href="https://medium.com/@SaiDevaPro">Medium</a></u> and <u><a href="https://awshelpinghand.hashnode.dev/">Hashnode</a></u>.
      </p>
    </motion.section>
  );
}
