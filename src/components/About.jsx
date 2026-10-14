import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services, education, achievements } from "../constants";
import sectionWrapper from "../HOC/sectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Backend Software Engineer with 3 years of experience building scalable,
        low-latency systems in fintech and real-time gaming. Domain expertise in
        trading platforms, order management and broker integrations, with strong
        Golang, Kafka and Redis. At INDmoney, owns order queueing, omnibus
        migrations (~$50M moved) and the Scala-to-Golang migration.
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-8 grid sm:grid-cols-2 gap-6 max-w-3xl"
      >
        <div>
          <h3 className="text-white font-semibold text-[18px] mb-2">Education</h3>
          <p className="text-secondary text-[15px] leading-7">
            {education.degree}
            <br />
            {education.school}
            <br />
            {education.date} · {education.detail}
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold text-[18px] mb-2">
            Achievements
          </h3>
          <ul className="text-secondary text-[15px] leading-7 list-disc ml-4 space-y-1">
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default sectionWrapper(About, "about");
