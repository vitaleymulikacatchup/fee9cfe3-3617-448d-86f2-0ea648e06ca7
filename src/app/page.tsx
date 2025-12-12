"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ProductCardSix from '@/components/sections/product/ProductCardSix';
import ParallaxAbout from '@/components/sections/about/ParallaxAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Utensils, ChefHat, Leaf, Sparkles, Heart, Star, Quote, Instagram, Facebook, Twitter } from "lucide-react";

export default function RestaurantPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumSizeExtraLargeTitles"
      background="none"
      cardStyle="frosted-heavy"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Flamingo"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reservations", id: "contact" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Welcome to Flamingo"
          description="Experience exquisite dining where elegance meets flavor. Discover our curated menu in an atmosphere designed for unforgettable moments."
          tag="Premium Dining"
          tagIcon={Utensils}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535476930-5ojkgd9s.jpg"
          imageAlt="Flamingo Restaurant elegant dining room"
          frameStyle="card"
          buttons={[
            { text: "Reserve Now", href: "contact" },
            { text: "View Menu", href: "menu" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardSix
          title="Featured Menu Items"
          description="Taste our signature dishes, carefully crafted with the finest ingredients and culinary expertise."
          tag="Menu Highlights"
          tagIcon={ChefHat}
          textboxLayout="default"
          products={[
            {
              id: "1",
              name: "Pan-Seared Salmon",
              price: "$34",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535482198-8j7g78sw.jpg",
              imageAlt: "Pan-seared salmon with seasonal vegetables"
            },
            {
              id: "2",
              name: "Truffle Appetizers",
              price: "$18",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535481279-qlgtzyox.jpg",
              imageAlt: "Gourmet truffle-infused appetizer platter"
            },
            {
              id: "3",
              name: "Signature Desserts",
              price: "$12",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535483015-8se817ld.jpg",
              imageAlt: "Chef's special dessert selection"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="about" data-section="about">
        <ParallaxAbout
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535477970-bekmmr4f.jpg"
          imageAlt="Flamingo Restaurant intimate dining atmosphere"
          buttons={[
            { text: "Learn Our Story", href: "#" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFive
          title="Why Choose Flamingo"
          description="From our sourced ingredients to impeccable service, every detail reflects our commitment to excellence."
          tag="Restaurant Excellence"
          tagIcon={Star}
          textboxLayout="default"
          features={[
            { title: "Premium Ingredients", icon: Leaf },
            { title: "Expert Chef Team", icon: ChefHat },
            { title: "Elegant Ambiance", icon: Sparkles },
            { title: "Impeccable Service", icon: Heart }
          ]}
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          showIconBoxBackground={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Guest Experiences"
          description="Hear from our valued guests about their unforgettable moments at Flamingo."
          tag="Testimonials"
          tagIcon={Quote}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell, Anniversary Celebration",
              date: "Date: 15 December 2024",
              title: "Simply Unforgettable",
              quote: "Flamingo exceeded all our expectations. The food was exquisite, the service was impeccable, and the atmosphere was absolutely romantic. We celebrated our anniversary in style and will definitely return.",
              tag: "Special Occasion",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535484255-fp3bss8a.jpg",
              avatarAlt: "Sarah Mitchell",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535478940-ww4msclm.jpg"
            },
            {
              id: "2",
              name: "James Chen, Business Dinner",
              date: "Date: 10 December 2024",
              title: "Culinary Excellence",
              quote: "The culinary artistry at Flamingo is remarkable. Each dish was a masterpiece, and the wine pairings were perfectly chosen. An outstanding venue for important business dinners.",
              tag: "Fine Dining",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535485261-mvqaq1jt.jpg",
              avatarAlt: "James Chen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535478940-ww4msclm.jpg"
            },
            {
              id: "3",
              name: "Emily Rodriguez, Family Dinner",
              date: "Date: 5 December 2024",
              title: "Everyone Loved It",
              quote: "We brought our extended family for a special gathering, and everyone was impressed. The staff was attentive and warm, making our celebration truly special.",
              tag: "Family Gathering",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535486157-j0gwrloy.jpg",
              avatarAlt: "Emily Rodriguez",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535478940-ww4msclm.jpg"
            },
            {
              id: "4",
              name: "David Park, Regular Guest",
              date: "Date: 1 December 2024",
              title: "Always Worth the Visit",
              quote: "I visit Flamingo monthly, and it never disappoints. The menu evolves seasonally, the presentation is stunning, and the entire experience feels like a celebration.",
              tag: "Regular Guest",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535487066-zrwlxumg.jpg",
              avatarAlt: "David Park",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535478940-ww4msclm.jpg"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="Trusted by food lovers and celebrated by critics. Our commitment to excellence drives everything we do."
          tag="Achievements"
          metrics={[
            {
              id: "1",
              value: "15+",
              description: "Years of culinary excellence and dedication to fine dining"
            },
            {
              id: "2",
              value: "5000+",
              description: "Satisfied guests who have experienced our restaurant"
            },
            {
              id: "3",
              value: "98%",
              description: "Guest satisfaction rate across all dining experiences"
            },
            {
              id: "4",
              value: "Award",
              description: "Recognized for culinary excellence and hospitality"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Reserve Your Table"
          description="Join us for an unforgettable culinary experience. Make your reservation today and let us create a memorable evening for you."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535479951-5q7rcdlg.jpg"
          imageAlt="Flamingo Restaurant welcoming ambiance"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Get Reservation Info"
          termsText="We respect your privacy. We'll send you reservation details and special offers."
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Flamingo"
          copyrightText="© Flamingo Restaurant, 2025. All rights reserved."
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "Menu", href: "menu" },
                { label: "About Us", href: "about" },
                { label: "Reservations", href: "contact" }
              ]
            },
            {
              title: "Info",
              items: [
                { label: "Hours", href: "#" },
                { label: "Location", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms & Conditions", href: "#" },
                { label: "Privacy Policy", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}