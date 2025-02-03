import React from "react";
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const faqList = [
  {
    question: "1. Educational Qualifications",
    answer: [
      "Bachelor’s Degree: To be eligible for an MBA program, candidates must have a bachelor’s degree in any discipline from a recognized university. The minimum required marks are generally 50% (45% for candidates from reserved categories).",
      "Professional Qualifications: Candidates with professional qualifications such as CA, ICWA, or CS may also be eligible to apply, depending on the institution.",
    ],
  },
  {
    question: "2. Age Limit",
    answer: [
      "There is typically no strict age limit for MBA programs. However, the average age of students pursuing an MBA usually falls between 22 to 30 years. Some institutions may have age restrictions, particularly for executive MBA programs or specialized courses.",
    ],
  },
  {
    question: "3. Work Experience",
    answer: [
      "Top-tier MBA programs, such as those at the IIMs, ISB, and XLRI, prefer candidates with work experience, usually ranging from 2 to 5 years. This experience is seen as valuable for enriching classroom discussions and leadership potential.",
      "However, there are many MBA programs that accept freshers (candidates with no work experience), especially for general MBA programs.",
    ],
  },
  {
    question: "4. Entrance Exams",
    answer: [
      "Common Entrance Exams: To apply for an MBA, candidates must take one of the following national or institute-specific entrance exams:",
      "CAT (Common Admission Test): Conducted for admission to IIMs and several other top management institutes in India.",
      "XAT (Xavier Aptitude Test): For admission to XLRI and other associated B-schools.",
      "GMAT (Graduate Management Admission Test): Used for international MBA programs and some top Indian institutes like ISB.",
      "MAT (Management Aptitude Test): Accepted by a variety of management schools across India.",
      "CMAT, ATMA, and others: For specific colleges, though they are less competitive than CAT or XAT.",
      "The entrance exams typically assess candidates on areas like quantitative ability, verbal ability, logical reasoning, and general knowledge.",
    ],
  },
  {
    question: "5. Personal Interview and Group Discussion",
    answer: [
      "After clearing the entrance exam, candidates are generally required to appear for personal interviews (PI) and group discussions (GD). These rounds assess a candidate's personality, communication skills, leadership potential, and their ability to work in a team.",
      "Institutions like the IIMs, SPJIMR, and XLRI place significant importance on these stages as they help determine a candidate’s fit for the program.",
    ],
  },
  {
    question: "6. Nationality",
    answer: [
      "The majority of MBA programs in India are open to Indian citizens. However, some top-tier institutions like IIMs, ISB, and XLRI also accept foreign nationals or NRIs. These candidates may need to submit GMAT scores and meet specific eligibility criteria based on their academic background.",
    ],
  },
  {
    question: "7. English Proficiency",
    answer: [
      "Since most MBA programs are taught in English, proficiency in the language is important. Some institutions may require non-native English speakers to submit proof of proficiency through exams like TOEFL or IELTS, especially for programs with an international focus or for those applying to foreign universities.",
    ],
  },
  {
    question: "8. Specialized Programs",
    answer: [
      "Certain specialized MBA programs (e.g., MBA in Healthcare, Agribusiness, or Sports Management) may have additional eligibility requirements, such as a relevant undergraduate degree or prior experience in the industry. For instance, a candidate applying for MBA in Finance may be expected to have a background in economics, mathematics, or accounting.",
    ],
  },
];

const bSchools = [
  {
    title: "1. IIM Ahmedabad",
    details:
      "IIM Ahmedabad stands at the pinnacle of management education... an institution that transforms potential into greatness.",
    salaryInfo: "Average placement package: 35.68 LPA",
  },
  {
    title: "2. IIM Bengaluru",
    details:
      "IIM Bengaluru is synonymous with innovation and leadership... ensuring its graduates are equipped with skills to thrive globally.",
    salaryInfo: "Average placement package: 35.31 LPA",
  },
  {
    title: "3. Faculty of Management Studies, Delhi (FMS)",
    details:
      "FMS Delhi is a breeding ground for leaders... known for its strategic approach and close-knit alumni network.",
    salaryInfo: "Average placement package: 34.01 LPA",
  },
  {
    title: "4. IIM Calcutta",
    details:
      "IIM Calcutta, with its prestigious legacy... offering experiences that shape both the individual and their career.",
    salaryInfo: "Average placement package: 35.07 LPA",
  },
  {
    title: "5. SIBM Pune",
    details:
      "SIBM Pune is where ambition meets opportunity... strong focus on both academic excellence and personal growth.",
    salaryInfo: "Highest salary: 45.50 LPA | Median salary: 20.80 LPA",
  },
  {
    title: "6. IIM Trichy",
    details:
      "IIM Trichy offers a unique blend of academic excellence and industry-driven learning... it’s a place where futures are created.",
    salaryInfo: "Highest salary: 34 LPA | Median salary: 16 LPA",
  },
  {
    title: "7. IIT Roorkee",
    details:
      "IIT Roorkee offers a unique edge to its MBA program by blending technical expertise... ensuring that IIT Roorkee graduates are always in demand.",
    salaryInfo: "Highest salary: 25.8 LPA | Median salary: 18 LPA",
  },
  {
    title: "8. IIT Kanpur",
    details:
      "IIT Kanpur provides an MBA experience like no other... equipped to take on global challenges and drive impactful change.",
    salaryInfo: "Highest salary: 22 LPA | Median salary: 16 LPA",
  },
  {
    title: "9. IIM Mumbai",
    details:
      "IIM Mumbai is one of the newest additions to the IIM family... it’s a place where the leaders of tomorrow are shaped today.",
    salaryInfo: "Average placement package (top 50%): 33.84 LPA",
  },
  {
    title: "10. IIM Indore",
    details:
      "IIM Indore has earned its reputation... providing a robust platform for students to grow and thrive.",
    salaryInfo: "Average placement package: 25.68 LPA",
  },
  {
    title: "11. XLRI-Xavier School of Management, Jamshedpur",
    details:
      "XLRI Jamshedpur resonates with excellence and innovation... cultivate a sense of responsibility and purpose.",
    salaryInfo: "Average placement package: 27.07 LPA",
  },
  {
    title: "12. Indian Institute of Technology, Bombay (IIT Bombay)",
    details:
      "IIT Bombay combines cutting-edge technology and management education... known for producing top-tier professionals who lead with vision.",
    salaryInfo: "Average placement package: 23.5 LPA",
  },
];

const MBA = () => {
  return (
    <div className="w-full overflow-x-hidden text-gray-800">
      <section className="min-h-[60vh] w-full bg-gradient-to-br from-blue-100 via-cyan-100 to-indigo-100 flex flex-col justify-center items-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4 mt-12 text-center px-4"
        >
          MBA & PGDM: Your Path to Management Excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl text-center text-lg md:text-xl mb-16 px-6"
        >
          Explore the world of business administration and discover how an MBA
          or PGDM can transform your career.
        </motion.p>
        <div
          className="absolute w-full bottom-0 h-[70px] bg-white"
          style={{ clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0 100%)" }}
        />
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
          <h2 className="text-3xl font-bold mb-4">
            MBA — What’s That All About?
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            An MBA (Master of Business Administration) is a prestigious graduate
            degree that equips individuals with a broad range of business skills
            and knowledge, opening doors to advanced career opportunities,
            higher salaries, and extensive professional networks. In India, top
            institutes like the Indian Institutes of Management (IIMs), XLRI
            Jamshedpur, ISB Hyderabad, FMS Delhi, SPJIMR Mumbai, and NMIMS
            Mumbai are renowned for their world-class MBA programs.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Post-graduation, MBA holders can pursue rewarding careers in fields
            like sales, finance, marketing, human resources, and product
            management, with top recruiters including industry giants like
            Amazon, Flipkart, Deloitte, and Google. Many universities and
            business schools worldwide offer MBA programs, ranging from
            traditional MBAs to specialized options in technology or healthcare,
            making it a versatile choice for aspiring business leaders.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            MBA in India can be a great choice for students expecting an amazing
            ROI. A few colleges offering MBA in India are IIM Udaipur, IIM
            Kashipur, IIM Tiruchirappalli, IIM Rohtak, IIM Raipur, IIM Ranchi,
            IIM Bodh Gaya, IIM Jammu, IIM Sirmaur, IIM Amritsar, IIM Nagpur, IIM
            Visakhapatnam, IIM Sambalpur, IIT Bombay, IIT Delhi, IIT Kanpur, IIT
            Kharagpur, IIT Madras, IIT Roorkee, IIT Gandhinagar, IIT
            Bhubaneswar, IIT Dhanbad, IIT Hyderabad, SP Jain Institute of
            Management and Research, Indian School of Business (ISB), Xavier
            Labour Relations Institute (XLRI), Faculty of Management Studies
            (FMS), Indian Institute of Foreign Trade (IIFT), Management
            Development Institute (MDI), Narsee Monjee Institute of Management
            Studies (NMIMS), Symbiosis Institute of Business Management (SIBM),
            Jamnalal Bajaj Institute of Management Studies (JBIMS), Institute of
            Management Technology (IMT), Great Lakes Institute of Management,
            ICFAI Business School (IBS), Tata Institute of Social Sciences
            (TISS), Bangalore Business School, Chandigarh University, Fore
            School of Management, Lal Bahadur Shastri Institute of Management,
            KIIT School of Management, Goa Institute of Management (GIM), and
            many more.
          </p>
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
            PGDM — Like MBA but Not MBA
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            A Post Graduate Diploma in Management (PGDM) is a prestigious
            two-year full-time program that equips students with the skills and
            knowledge required to excel in management roles. Similar to an MBA,
            the PGDM stands out for its industry-focused approach, flexible
            curriculum, and autonomy in course design, which allows institutions
            to tailor their programs to align with evolving industry demands.
            Renowned institutes in India, such as XLRI Jamshedpur, SPJIMR
            Mumbai, MDI Gurgaon, IMT Ghaziabad, and TISS Mumbai, offer some of
            the most sought-after PGDM programs.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            These programs cover a diverse range of topics, including
            information technology, finance, marketing, human resources, supply
            chain management, agriculture, entrepreneurship, and communication.
            Approved by the All India Council for Technical Education (AICTE)
            and recognized by the Association of Indian Universities (AIU) as
            equivalent to an MBA, PGDM graduates are well-equipped to secure
            opportunities in multinational corporations, top Indian companies,
            government jobs, banks, PSUs, NGOs, and even entrepreneurship.
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
          <h2 className="text-3xl font-bold mb-4">
            Aren’t PGDM and MBA the Same? Umm, No They Aren’t!
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            The difference between PGDM (Post Graduate Diploma in Management)
            and MBA (Master of Business Administration) primarily lies in their
            structure, affiliation, and focus. PGDM programs are offered by
            autonomous institutions that design their own curriculum based on
            industry demands, offering more flexibility and practical,
            industry-focused learning. In contrast, MBA programs are typically
            university-affiliated, following a prescribed curriculum with a
            broader theoretical foundation.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            PGDM programs are recognized by the AICTE and the AIU as equivalent
            to an MBA degree, but they are diplomas, while MBA is a degree. PGDM
            programs often include specializations like finance, marketing,
            human resources, and entrepreneurship, with a strong emphasis on
            real-world skills and emerging market trends. MBA programs offer a
            traditional academic approach with a focus on comprehensive business
            knowledge.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Both qualifications open doors to high-ranking management careers in
            industries such as MNCs, PSUs, banks, and NGOs, with PGDM providing
            an edge for those seeking industry relevance and flexibility.
            Ultimately, both PGDM and MBA equip students for leadership roles,
            with the choice depending on individual career goals and program
            preferences.
          </p>
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
            Give Me One Reason to Do an MBA. Well, Here’s Four!
          </h2>
          <p className="text-lg leading-relaxed mb-2">
            Thinking about an MBA? You're not alone – many people choose to
            pursue this path for different reasons, and it could be the right
            move for you too:
          </p>
          <ul className="list-disc list-inside ml-4 text-lg leading-relaxed space-y-3 mt-4">
            <li>
              <strong>Career Change: </strong>
              An MBA can give you the skills to transition into a new
              field—finance, marketing, HR, or entrepreneurship.
            </li>
            <li>
              <strong>Career Advancement: </strong>
              It offers the tools to move up the corporate ladder and stand out
              in a competitive job market.
            </li>
            <li>
              <strong>Zeal to Learn Management: </strong>
              Understand how businesses operate holistically and hone strategic
              thinking.
            </li>
            <li>
              <strong>Higher Salary & Better Work Culture: </strong>
              Often leads to corporate jobs in top companies with improved pay
              and perks.
            </li>
          </ul>
          <p className="text-lg leading-relaxed mt-6">
            Whether it’s about a better work-life balance, being part of dynamic
            corporate teams, or just self-improvement, an MBA can help you
            achieve a fulfilling and successful career!
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
          <h2 className="text-3xl font-bold mb-6">
            Is MBA the Right Choice for Me?
          </h2>
          {faqList.map((item, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <FiChevronRight className="text-indigo-600" size={24} />
                {item.question}
              </h3>
              {item.answer.map((ans, i) => (
                <p key={i} className="leading-relaxed text-lg mb-2 ml-4">
                  • {ans}
                </p>
              ))}
            </div>
          ))}
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
          <h2 className="text-3xl font-bold mb-6">
            The Best and Brightest B-Schools in the Country
          </h2>
          <div className="space-y-8">
            {bSchools.map((b, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-md">
                <h3 className="text-2xl font-semibold mb-2">{b.title}</h3>
                <p className="leading-relaxed text-lg mb-2">{b.details}</p>
                <p className="font-medium text-indigo-700">{b.salaryInfo}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        className="relative bg-white pt-12 pb-24"
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
          <h2 className="text-3xl font-bold mb-6">
            Which Exams Should I Write?
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Entrance exams are a crucial part of pursuing an MBA in India. These
            exams determine your eligibility for top MBA/PGDM programs, so it’s
            important to be well-informed. For instance, if you’re aiming for
            institutions like the IIMs, the CAT exam is key. Over 1,300 MBA
            colleges accept CAT scores, making it India’s most popular entrance
            test. If you’re looking at Tier-2 private MBA colleges, exams like
            CMAT or MAT might be more suitable. Meanwhile, XAT, organized by
            XLRI Jamshedpur, is also widely accepted by 800+ colleges. Each exam
            has its own eligibility criteria, pattern, and scope, so choose
            based on your goals and target colleges.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default MBA;
