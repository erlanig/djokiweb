import ButtonLink from "components/atoms/Button/ButtonLink";
import LineDivider from "components/atoms/LineDivider";
import FeatureCard from "components/molecules/Card/FeatureCard";
import PricingCard from "components/molecules/Card/PricingCard";
import ProjectCard from "components/molecules/Card/ProjectCard";
import SectionSentence from "components/molecules/SectionSentence";
import AchievementCard from "components/molecules/Card/AchievementCard";
import LogoList from "components/organisms/LogoList";
import TestimonialList from "components/organisms/TestimonialList";
import PageSentence from "components/molecules/PageSentence";
import FaqList from "components/organisms/FaqList";
import PageTemplate from "components/templates/PageTemplate";
import Image from "next/image";
import React from "react";
import { FiSettings, FiClock, FiMonitor } from "react-icons/fi";
const Home = () => {
  return (
    <>
      <PageTemplate title="Home - DjokiCoding">
        {/* Banner Section */}
        <section 
          id = "banner"
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title="Don't Stress About IT Tasks, DjokiCoding is Here to Help!"
              description="We prioritize speed, ensuring clients don't wait. We'll deliver your work as quickly as possible, even by the end of the day, all while maintaining our high quality standards."
              badge="Ready to Assist You"
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink
              value="Contact-Us"
              color="white"
              style="light"
              radius="rounded"
              href="#contact-us"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            />
          </div>
        </section>
        {/* Feature List */}
        <section id= "feature" className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
          <div data-aos="fade-up">
            <FeatureCard
              title="Expert in Coding & IT Solutions"
              description="We provide expert-level coding and IT solutions tailored to your needs."
              icon={<FiMonitor />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Custom Projects | General Tasks Made Easy"
              description="Simplify your projects and tasks with our custom solutions and tools."
              icon={<FiSettings />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Real-time Quiz Assistance"
              description="Get instant help and support for your quizzes in real-time."
              icon={<FiClock />}
            />
          </div>
        </section>
        {/* Logo List */}
        <LogoList />
        {/* How We Work */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="w-3/4 h-[500px] relative" data-aos="fade-right">
            <Image
              src={"/images/innovation.png"}
              layout="fill"
              objectFit="fill"
              alt="Structured plan"
            />
          </aside>
          <aside
            className="text-center sm:w-10/12 lg:text-left lg:w-full"
            data-aos="fade-left"
          >
            <SectionSentence
              title="Bringing Your Unique Vision to Life: Our Custom Project Approach"
              paragraph="We specialize in crafting bespoke digital solutions that align perfectly with your unique requirements. From concept to launch, we meticulously plan, design, and develop every custom project with passion and precision, ensuring it exceeds your expectations."
              badge="PROJECT INNOVATION"
            />
          </aside>
        </section>
        {/* Contact Us */}
        <section
          id="contact-us"
          className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2 mb-2"
        >
          <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <div className="mb-4">
                <SectionSentence
                  title="Unlock Your Digital Business Potential with DjokiCoding Today!"
                  paragraph="Unlock premium digital solutions with our expert web and app development, engineered for your ultimate experience."
                  badge="CONTACT US"
                />
              </div>
              <ButtonLink
                value="WhattsApp Us"
                href="https://wa.me/+6285174424245"
                size="small"
                color="white"
                style="light"
                newTab={true}
              />
            </div>
          </aside>
          <aside
            className="w-full h-[450px] relative sm:w-8/12 lg:w-full"
            data-aos="fade-left"
          >
            <Image
              src={"/images/consult.png"}
              layout="fill"
              objectFit="fill"
              alt="Code editor and UI Editing popup"
            />
          </aside>
        </section>
        {/* Achievements Section */}
        <section className="py-16 mt-2">
          <div className="flex flex-col md:flex-row justify-around items-center gap-10 md:gap-4">
            <div data-aos="fade-up">
              <AchievementCard
                imageSrc="/images/ic_project.png"
                title="3+"
                description="Big Projects"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <AchievementCard
                imageSrc="/images/ic_customer.png"
                title="95%"
                description="Customer Satisfaction"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <AchievementCard
                imageSrc="/images/ic_experience.png"
                title="2+ Years"
                description="Experience in The Industry"
              />
            </div>
          </div>
        </section>

        <LineDivider />
        {/* Our Projects */}
        <section id = "projects" className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="We have completed many amazing projects that you will not believe"
              badge="PROJECTS"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
            <div data-aos="flip-left">
              <ProjectCard
                title="Modern Web Experience"
                description="An elegant and responsive landing page designed for a cutting-edge desktop application."
                imageSrc="/images/web.png"
              />
            </div>
            <div data-aos="flip-right">
              <ProjectCard
                title="Sleek Mobile Landing"
                description="A vibrant and user-friendly landing page crafted specifically for mobile apps to captivate users on the go."
                imageSrc="/images/mobile.jpeg"
                bottomSquareSize="big"
              />
            </div>
          </div>
        </section>

        <LineDivider />
        {/* FAQ */}
        <section id= "faq" className="grid grid-cols-1 place-items-center my-16">
          <div className="w-full sm:w-10/12 md:w-8/12">
            <div className="text-center mb-6" data-aos="zoom-in-up">
              <PageSentence badge="FAQs" title="Frequently Asked Questions" />
            </div>
            <FaqList
              faqs={[
                {
                  title: `What core services does DjokiCoding offer?`,
                  description: `We specialize in custom coding projects, general IT task assistance, and real-time quiz support for coding and IT-related topics.`,
                },
                {
                  title: `I have a specific coding project in mind. Can you help?`,
                  description: `Absolutely! We excel at developing custom coding solutions tailored to your unique requirements. Let's discuss your project.`,
                },
                {
                  title: `What kind of general IT tasks can DjokiCoding assist with?`,
                  description: `We can help with a wide range of tasks, including scripting, data handling, automation, and other general technical needs. Just let us know what you need!`,
                },
                {
                  title: `Tell me more about your real-time quiz assistance.`,
                  description: `This service provides support during your quizzes by offering guidance and explanations to help you understand the concepts and find solutions.`,
                },
                {
                  title: `How can I discuss my needs further or get a consultation?`,
                  description: `You can reach us for a consultation or to discuss your specific requirements by calling us at 📞+62 851‑7442‑4245. We're happy to help!`,
                },
              ]}
            />
          </div>
        </section>
      </PageTemplate>
    </>
  );
};

export default Home;
