"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Calendar, CheckCircle, Code, Heart, Lightbulb, MessageCircle, Palette, Sparkles, Star, Target, TrendingUp, Users } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Work", id: "work" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="CreativeFlow"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="We Create Digital Experiences That Matter"
          description="Transform your brand with strategic design, innovative development, and results-driven marketing solutions that connect with your audience."
          tag="Creative Agency"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Start Your Project",
              href: "contact"
            },
            {
              text: "View Our Work",
              href: "work"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Creative agency workspace with team collaboration"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwo
          title="Our Services"
          description="Comprehensive creative solutions designed to elevate your brand and drive meaningful results."
          tag="What We Do"
          tagIcon={Target}
          features={[
            {
              title: "Brand Identity",
              description: "Create memorable brands that resonate with your audience through strategic design and storytelling.",
              icon: Palette,
              button: {
                text: "Learn More",
                href: "contact"
              }
            },
            {
              title: "Digital Marketing",
              description: "Data-driven campaigns that reach the right audience at the right time across all digital channels.",
              icon: TrendingUp,
              button: {
                text: "Learn More",
                href: "contact"
              }
            },
            {
              title: "Strategic Consulting",
              description: "Expert guidance to help you navigate complex business challenges and identify growth opportunities.",
              icon: Lightbulb,
              button: {
                text: "Learn More",
                href: "contact"
              }
            },
            {
              title: "Web Development",
              description: "Custom websites and applications built with cutting-edge technology and best practices.",
              icon: Code,
              button: {
                text: "Learn More",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Results That Speak"
          description="Numbers that demonstrate our commitment to delivering exceptional outcomes for our clients."
          tag="Our Impact"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "150+",
              title: "projects",
              description: "Successfully completed with measurable impact",
              icon: CheckCircle
            },
            {
              id: "2",
              value: "98%",
              title: "satisfaction",
              description: "Client satisfaction rate across all projects",
              icon: Heart
            },
            {
              id: "3",
              value: "5",
              title: "years",
              description: "Of excellence in creative and digital solutions",
              icon: Calendar
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Creative minds and strategic thinkers working together to bring your vision to life."
          tag="Our People"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Creative Director",
              description: "15+ years crafting brand experiences for Fortune 500 companies and innovative startups.",
              imageSrc: "https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Chen - Creative Director",
              socialLinks: [
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com/in/sarah-chen"
                },
                {
                  icon: "Twitter",
                  url: "https://twitter.com/sarahchen"
                }
              ]
            },
            {
              id: "2",
              name: "Marcus Johnson",
              role: "Lead Designer",
              description: "Award-winning designer specializing in digital experiences and visual identity systems.",
              imageSrc: "https://images.pexels.com/photos/7776140/pexels-photo-7776140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Johnson - Lead Designer",
              socialLinks: [
                {
                  icon: "Dribbble",
                  url: "https://dribbble.com/marcus"
                },
                {
                  icon: "Instagram",
                  url: "https://instagram.com/marcus.design"
                }
              ]
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "Strategy Director",
              description: "Data-driven strategist with expertise in brand positioning and digital transformation.",
              imageSrc: "https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elena Rodriguez - Strategy Director",
              socialLinks: [
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com/in/elena-rodriguez"
                },
                {
                  icon: "Twitter",
                  url: "https://twitter.com/elena_strategy"
                }
              ]
            },
            {
              id: "4",
              name: "David Park",
              role: "Tech Lead",
              description: "Full-stack developer passionate about creating scalable solutions and elegant code.",
              imageSrc: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Park - Tech Lead",
              socialLinks: [
                {
                  icon: "Github",
                  url: "https://github.com/davidpark"
                },
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com/in/david-park-dev"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Clients Say"
          description="Real feedback from businesses we've helped transform and grow."
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Alex Thompson",
              handle: "@alexthompson",
              testimonial: "CreativeFlow transformed our entire brand identity and digital presence. The results exceeded our expectations and drove a 200% increase in engagement.",
              imageSrc: "https://images.pexels.com/photos/7642001/pexels-photo-7642001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alex Thompson testimonial"
            },
            {
              id: "2",
              name: "Maria Santos",
              handle: "@maria.santos",
              testimonial: "Working with this team was incredible. They understood our vision immediately and delivered a website that perfectly represents our brand.",
              imageSrc: "https://images.pexels.com/photos/7414278/pexels-photo-7414278.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Maria Santos testimonial"
            },
            {
              id: "3",
              name: "James Wilson",
              handle: "@jwilson_ceo",
              testimonial: "Their strategic approach to our digital marketing campaign resulted in a 150% increase in qualified leads within just three months.",
              imageSrc: "https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Wilson testimonial"
            },
            {
              id: "4",
              name: "Lisa Chang",
              handle: "@lisa.chang",
              testimonial: "The attention to detail and creative execution was outstanding. Our new brand identity has received incredible feedback from customers.",
              imageSrc: "https://images.pexels.com/photos/7648239/pexels-photo-7648239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Chang testimonial"
            },
            {
              id: "5",
              name: "Robert Davis",
              handle: "@robert_davis",
              testimonial: "Professional, creative, and results-driven. CreativeFlow delivered exactly what we needed to take our business to the next level.",
              imageSrc: "https://images.pexels.com/photos/5686105/pexels-photo-5686105.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Robert Davis testimonial"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Brands"
          description="We've had the privilege of working with innovative companies across various industries."
          tag="Our Clients"
          tagIcon={Star}
          logos={[
            "https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={45}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Start Your Project?"
          description="Let's discuss how we can help bring your vision to life. Get in touch with our team to explore possibilities."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: false
            },
            {
              name: "budget",
              type: "text",
              placeholder: "Project Budget",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your project and goals...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
          imageSrc="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern office meeting space"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="CreativeFlow"
          columns={[
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Services",
                  href: "services"
                },
                {
                  label: "Case Studies",
                  href: "work"
                },
                {
                  label: "Team",
                  href: "team"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Careers",
                  href: "https://jobs.creativeflow.com"
                },
                {
                  label: "Blog",
                  href: "https://blog.creativeflow.com"
                },
                {
                  label: "Newsletter",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Privacy Policy",
                  href: "https://creativeflow.com/privacy"
                },
                {
                  label: "Terms of Service",
                  href: "https://creativeflow.com/terms"
                },
                {
                  label: "Cookie Policy",
                  href: "https://creativeflow.com/cookies"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}