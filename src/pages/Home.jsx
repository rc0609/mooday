import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageWrapper from "../components/PageWrapper";
import Button from "../components/Button";
import FeatureBox from "../components/FeatureBox";

const Home = () => {

  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <PageWrapper>
      {(themeKey) => (
        <div className="relative z-10">
          {/* Hero Section */}
          <header id="home" className="flex flex-col items-center justify-center text-center pt-[30vh] pb-[20vh]">
          <motion.h1
            key={`hero-title-${themeKey}`}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold mb-4 text-[#333333] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-pink-400 dark:to-purple-400"
          >
            Track your emotions. Discover your patterns.
          </motion.h1>

          <motion.p
            key={`hero-subtitle-${themeKey}`}
            id="features"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg max-w-2xl text-[#666666] dark:text-gray-300 pt-4 text-center md:text-right md:whitespace-nowrap"
          >
            MOODay helps you understand yourself better through mindful journaling and intelligent insights.
          </motion.p>
          </header>

          {/* Section Heading */}
          <section  ref={ref} className="text-center max-w-3xl mx-auto mb-1 px-4">
          <motion.h2
            key={`section-title-${themeKey}`}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-semibold mb-4 text-[#4F4F4F] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-pink-400 dark:to-purple-400 pb-[3vh]"
          >
            A mindful space, designed for you
          </motion.h2>

          <motion.p
            key={`section-desc-${themeKey}`}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base text-[#666666] dark:text-gray-300 pb-[10vh]"
          >
            Whether you're tracking your mood, exploring patterns, or just taking a moment to breathe — MOODay is here to support your emotional wellness journey.
          </motion.p>
          </section>

          {/* Feature Boxes */}
          <section key={themeKey} className="flex flex-col items-center gap-10 mb-24 px-4 md:px-12">
            {[
              {
                title: "Capture your feelings with a tap",
                desc: "Pick a mood, write freely, and save your emotional snapshot to a calming calendar.",
                light: "bg-orange-100/40",
                dark: "dark:bg-orange-900/40",
                glow: "shadow-[0_0_15px_rgba(255,165,0,0.3)] dark:shadow-[0_0_25px_rgba(255,165,0,0.5)]",
                hoverGlow: "hover:shadow-[0_0_35px_rgba(255,165,0,0.6)] dark:hover:shadow-[0_0_45px_rgba(255,165,0,0.8)]",
                align: "self-start md:ml-12",
              },
              {
                title: "Let AI reflect with you",
                desc: "Get instant, thoughtful summaries and emotional themes from your journal entries.",
                light: "bg-green-100/40",
                dark: "dark:bg-green-900/40",
                glow: "shadow-[0_0_15px_rgba(0,255,128,0.3)] dark:shadow-[0_0_25px_rgba(0,255,128,0.5)]",
                hoverGlow: "hover:shadow-[0_0_35px_rgba(0,255,128,0.6)] dark:hover:shadow-[0_0_45px_rgba(0,255,128,0.8)]",
                align: "self-end md:mr-12",
              },
              {
                title: "See your emotions unfold",
                desc: "Visualize your journey with color-coded data and intuitive charts that grow with you.",
                light: "bg-blue-100/40",
                dark: "dark:bg-blue-900/40",
                glow: "shadow-[0_0_15px_rgba(100,149,237,0.3)] dark:shadow-[0_0_25px_rgba(100,149,237,0.5)]",
                hoverGlow: "hover:shadow-[0_0_35px_rgba(100,149,237,0.6)] dark:hover:shadow-[0_0_45px_rgba(100,149,237,0.8)]",
                align: "self-start md:ml-12",
              },
              {
                title: "Discover patterns in your mood",
                desc: "Track changes over time with charts, streaks, and word clouds reveal your most frequent emotions and topics.",
                light: "bg-yellow-100/40",
                dark: "dark:bg-yellow-900/40",
                glow: "shadow-[0_0_15px_rgba(255,255,0,0.3)] dark:shadow-[0_0_25px_rgba(255,255,0,0.5)]",
                hoverGlow: "hover:shadow-[0_0_35px_rgba(255,255,0,0.6)] dark:hover:shadow-[0_0_45px_rgba(255,255,0,0.8)]",
                align: "self-end md:mr-12",
              },
              {
                title: "Make it yours",
                desc: "Customize themes, switch to dark mode, and edit entries to reflect your unique voice.",
                light: "bg-pink-100/40",
                dark: "dark:bg-pink-900/40",
                glow: "shadow-[0_0_15px_rgba(255,105,180,0.3)] dark:shadow-[0_0_25px_rgba(255,105,180,0.5)]",
                hoverGlow: "hover:shadow-[0_0_35px_rgba(255,105,180,0.6)] dark:hover:shadow-[0_0_45px_rgba(255,105,180,0.8)]",
                align: "self-start md:ml-12",
              },
            ].map((box, i) => (
              <FeatureBox key={i} {...box} delay={i * 0.1} />
            ))}
          </section>



          {/* CTA */}
          <section className="text-center mb-10">
            <Button>
              Get Started
            </Button>
          </section>

          {/* Gradient Divider */}
          <div className="h-0.5 w-[80%] mx-auto my-16 bg-gradient-to-r from-pink-400/40 via-purple-500/40 to-indigo-500/40
             dark:from-pink-400 dark:via-purple-500 dark:to-indigo-500 rounded-full" />


          {/* Footer */}
          <footer id="about" className="mt-18 py-5 flex flex-col items-center gap-4 text-gray-600 dark:text-gray-300">
            <div className="flex gap-6 text-2xl">
              {/* GitHub */}
              <a
                href="https://github.com/rc0609/mooday"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 ease-in-out hover:scale-110 hover:text-[#B388EB] dark:hover:text-[#C9A7FF] drop-shadow-[0_0_10px_rgba(179,136,235,0.6)]"
              >
                <i className="fab fa-github"></i>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/ramisha-chowdhury-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 ease-in-out hover:scale-110 hover:text-[#0077B5] dark:hover:text-[#66C2FF] drop-shadow-[0_0_10px_rgba(0,119,181,0.6)]"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              {/* Gmail */}
              <a
                href="mailto:ramisha.c69@gmail.com"
                className="transition duration-300 ease-in-out hover:scale-110 hover:text-[#EA4335] dark:hover:text-[#FF7A7A] drop-shadow-[0_0_10px_rgba(234,67,53,0.6)]"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              © {new Date().getFullYear()} MOODay by Ramisha Chowdhury
            </p>
          </footer>

        </div>
      )}
    </PageWrapper>
  );
};

export default Home;






