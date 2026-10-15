import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { socialLinks } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[70vh] mx-auto flex items-center bg-primary">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start gap-5 pt-24 pb-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-ink" />
          <div className="w-1 sm:h-80 h-40 ink-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I&apos;m <span className="text-ink-muted">Rishu</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            Backend Software Engineer building scalable,
            <br className="sm:block hidden" />
            low-latency systems in fintech and real-time gaming.
          </p>
          <p className="mt-4 text-secondary text-[16px] max-w-xl leading-7">
            Golang · Kafka · Redis · Trading platforms · Order management
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-ink hover:bg-ink-muted text-primary font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Get in touch
            </a>
            <a
              href={socialLinks.resume}
              download="RishuShukla_Resume2026.pdf"
              className="border border-ink/20 hover:border-ink text-ink font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-8 bottom-5 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll to about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
