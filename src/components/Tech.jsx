import React from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { skillGroups } from "../constants";
import sectionWrapper from "../HOC/sectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="mt-12 flex flex-col gap-8">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            variants={fadeIn("up", "spring", index * 0.15, 0.6)}
          >
            <h3 className="text-ink font-semibold text-[18px] mb-3">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="bg-tertiary text-ink-muted border border-black-200 px-4 py-2 rounded-lg text-[14px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default sectionWrapper(Tech, "skills");
