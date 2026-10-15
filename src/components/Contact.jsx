import React from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { socialLinks } from "../constants";
import sectionWrapper from "../HOC/sectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 bg-tertiary p-8 rounded-2xl card-border shadow-card max-w-xl"
      >
        <p className="text-secondary text-[16px] leading-7 mb-6">
          Open to conversations about backend systems, trading platforms,
          distributed architecture, and Golang roles.
        </p>

        <div className="flex flex-col gap-3">
          <div>
            <p className="text-secondary text-[13px] uppercase tracking-wider mb-1">
              Email
            </p>
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-ink text-[17px] font-medium hover:text-ink-muted transition-colors"
            >
              {socialLinks.email}
            </a>
          </div>
          <div>
            <p className="text-secondary text-[13px] uppercase tracking-wider mb-1">
              Phone
            </p>
            <a
              href={`tel:${socialLinks.phone}`}
              className="text-ink text-[17px] font-medium hover:text-ink-muted transition-colors"
            >
              {socialLinks.phone}
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default sectionWrapper(Contact, "contact");
