import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { FaUserTie } from "react-icons/fa";

const TAGLINES = [
  "Gurukul: where CAT, CLAT, and IPMAT prep meets brains, banter, and brilliance.",
  "Say goodbye to boring prep – Gurukul makes CAT, CLAT, and IPMAT fun and fabulous.",
  "Top colleges calling? Gurukul’s the hotline for CAT, CLAT, and IPMAT success.",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % TAGLINES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-x-hidden text-gray-800">
      {/* HERO SECTION (full gradient) */}
      <section className="min-h-[70vh] w-full bg-gradient-to-br from-blue-100 via-cyan-100 to-indigo-100 flex flex-col items-center justify-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 mt-16 text-center"
        >
          About Gurukul
        </motion.h1>
        <div className="relative w-full max-w-3xl h-16 flex items-center justify-center overflow-hidden mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTagline}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="absolute text-xl md:text-2xl italic font-medium px-4 text-center"
            >
              {TAGLINES[currentTagline]}
            </motion.div>
          </AnimatePresence>
        </div>
        <div
          className="absolute w-full bottom-0 h-[80px] bg-white"
          style={{ clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0 100%)" }}
        />
      </section>

      <section
        className="relative bg-white z-10 pt-12 pb-12"
        style={{ clipPath: "polygon(0 0, 100% 2%, 100% 100%, 0 100%)" }}
      >
        <motion.div
          className="max-w-5xl mx-auto px-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Vision</h2>
            <p className="leading-relaxed text-lg">
              To be the leading institute in management and legal education
              coaching, recognized for transforming ambitious students into
              successful professionals and ethical leaders who excel in top-tier
              management and law colleges, contributing meaningfully to society.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Mission</h2>
            <p className="leading-relaxed text-lg">
              Our mission is to guide and prepare students to secure admission
              to the premier management and law colleges of the country by
              delivering top-notch coaching and mentorship.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Goals</h2>
            <p className="leading-relaxed text-lg">
              Our goal is to foster critical thinking, creativity, and
              leadership skills in students through modern teaching methods. We
              are committed to growth by supporting educator development and
              embracing the latest technologies to stay ahead in the evolving
              educational landscape.
            </p>
          </div>
        </motion.div>
      </section>

      <section
        className="relative bg-gray-50 pb-12"
        style={{ clipPath: "polygon(0 1%, 100% 0, 100% 100%, 0 100%)" }}
      >
        <motion.div
          className="max-w-5xl mx-auto px-6 pt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Gurukul - The One-Stop Transformative Education Experience
          </h2>
          <p className="leading-relaxed text-lg mb-6">
            At Gurukul, we focus on providing students with a platform to excel
            academically and professionally, inspired by Chaitanya and Deepak’s
            vision to transform education. Fueled by their passion for
            empowering students, they envisioned a platform that brings out the
            best in every individual, turning aptitude into achievement.
            Specializing in exams like CAT, IPMAT, CLAT, AILET, SNAP, GMAT, and
            NMAT, we combine quality teaching with personalized mentorship to
            guide students toward prestigious careers in management and law. At
            Gurukul, we believe in nurturing not just academic excellence but
            also the confidence, values, and vision required to lead in today’s
            dynamic world. Every student’s journey is unique, and we are
            committed to making it extraordinary.
          </p>
        </motion.div>
      </section>

      <section
        className="relative bg-white pt-12 pb-12"
        style={{ clipPath: "polygon(0 2%, 100% 0, 100% 100%, 0 100%)" }}
      >
        <motion.div
          className="max-w-5xl mx-auto px-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">
            Why Choose Us to Be Your Study Partner
          </h2>

          {[
            {
              title: "1. Flexible Learning with Recorded Classes",
              text: "Empower your preparation journey with the flexibility to study at your convenience, anytime and anywhere. Our recorded video classes give you the same feel of the class while offering supreme personalization of a study-at-your-pace course.",
            },
            {
              title: "2. Expert Leader Personality Transformation Sessions",
              text: "Unlock your potential with personality development sessions designed to enhance confidence, communication, and leadership skills. These sessions are handled by experienced psychologists and management professionals from top B-schools giving you that extra edge for Personal Interview rounds.",
            },
            {
              title: "3. Alumni Mentors from Top Business and Law Schools",
              text: "Gain valuable insights and inspiration from those who’ve walked the path to top colleges before you. Meet and get mentored by students of top B-schools and L-schools and gain a deep understanding of campus and corporate life before joining the school of your choice.",
            },
            {
              title: "4. Learn Smarter with Expert-Crafted Hardcopy Materials",
              text: "Immerse yourself in learning with carefully chosen hardcopy books that cover every detail of the syllabus. These books are more than just study materials—they're your go-to guides for mastering concepts, tackling tough questions, and reviewing effectively.",
            },
            {
              title: "5. Prep Made Fun with Gamified Learning",
              text: "Transform your exam preparation into an exciting adventure with Gurukul’s gamified learning ecosystem. Say goodbye to mundane study routines and hello to interactive quizzes, progress trackers, and achievement badges that keep you motivated.",
            },
            {
              title: "6. Dedicated Proctor for Every Student",
              text: "Your success deserves a personal touch. Think of them as your prep partners—available to provide tailored advice, address your doubts, and keep you motivated throughout your journey.",
            },
            {
              title: "7. Blended Excellence in Teaching",
              text: "Gurukul offers a unique learning experience where students can attend classes offline or online in real-time. And if a session is missed, access the recorded class later. Flexibility ensures you never miss out on learning.",
            },
            {
              title: "8. Live Foundations Classes to Solid Fundamentals",
              text: "Strengthen your fundamentals with over 150+ hours of live, interactive classes, building essential skills and confidence for exam success.",
            },
            {
              title: "9. Advanced Sessions for Rankers",
              text: "Gurukul’s ultimate supremo workshop classes boost your scores and test your mettle. With timed tests and Rank Ready series, get ready to tackle the toughest questions in CAT, IPMAT, and CLAT.",
            },
            {
              title: "10. Curriculum Prepared by Psychologists",
              text: "Gurukul's pedagogy offers unique mentorship with bespoke study schedules, ensuring students maintain interest and work toward carefully set goals. Parents receive regular updates via our intelligent notification systems, keeping them in the loop with a dedicated proctor.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="mb-8 flex flex-col gap-2 bg-gray-50 rounded-xl p-4 shadow-md"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <FiCheckCircle className="text-indigo-600" size={24} />
                {item.title}
              </h3>
              <p className="leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section
        className="relative bg-gray-50 pt-12 pb-24"
        style={{ clipPath: "polygon(0 1%, 100% 0, 100% 100%, 0 100%)" }}
      >
        <motion.div
          className="max-w-5xl mx-auto px-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">
            Masterminds Behind the Maestro
          </h2>
          <div className="mb-12 md:flex md:items-start md:gap-6 bg-white rounded-xl p-6 shadow-md">
            <div className="mb-4 md:mb-0 flex-shrink-0 w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center">
              <FaUserTie size={40} className="text-gray-700" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Deepak Nemani</h3>
              <p className="mt-2 leading-relaxed">
                Deepak Nemani, the CEO of Gurukul, brings over 5 years of
                expertise in CAT coaching, supported by an exceptional academic
                track record, including interview calls from esteemed institutes
                like IIM Ahmedabad and NMIMS. A former SBI Manager and a
                four-time CAT 99-percentiler, he has firsthand experience in
                conquering competitive exams like CAT and SBI PO.
              </p>
              <p className="mt-2 leading-relaxed">
                Known for his innovative teaching strategies, practical
                insights, and ability to simplify even the most challenging math
                problems, he ensures learning is both engaging and effective.
              </p>
            </div>
          </div>

          <div className="mb-12 md:flex md:items-start md:gap-6 bg-white rounded-xl p-6 shadow-md">
            <div className="mb-4 md:mb-0 flex-shrink-0 w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center">
              <FaUserTie size={40} className="text-gray-700" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Krishna Chaitanya</h3>
              <p className="mt-2 leading-relaxed">
                Krishna Chaitanya, the COO of Gurukul, is a seasoned mentor with
                over a decade of teaching experience and an impressive record of
                scoring 99+ percentiles in QA and LRDI multiple times.
              </p>
              <p className="mt-2 leading-relaxed">
                Renowned for his unique approach, Chaitanya simplifies
                Quantitative Aptitude and Logical Reasoning, transforming these
                challenging subjects into accessible and engaging experiences.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-2">
              The Endless Flow of Talent and Experience at Gurukul
            </h3>
            <p className="leading-relaxed">
              At Gurukul, students are privileged to have two exceptional
              mentors, Krishna Chaitanya and Deepak Nemani, who are committed to
              guiding students day and night. With over a decade of combined
              experience, both mentors take a hands-on approach, personally
              training students to excel in their exams and preparing them for
              interviews with top institutions.
            </p>
            <p className="mt-2 leading-relaxed">
              In addition to the core mentorship team, Gurukul hosts a rotating
              panel of visiting faculty—industry experts, alumni from
              prestigious B-schools and L-schools, and seasoned
              professionals—who take dedicated sessions. These visiting faculty
              bring specialized knowledge and diverse perspectives, further
              enriching the learning experience and ensuring students are
              well-prepared not just for exams, but also for the competitive
              interview rounds at elite institutions like IIM Ahmedabad, IIM
              Bangalore, XLRI Jamshedpur, IIM Rohtak, IIM Indore, NLSIU, NALSAR,
              NLU-Delhi, and other top National Law schools.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
