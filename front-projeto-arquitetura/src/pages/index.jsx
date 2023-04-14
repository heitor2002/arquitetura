import Head from "next/head";
import { Inter } from "next/font/google";
import HeaderIndex from "@/components/headerIndex/HeaderIndex";
import SectionMosaic from "@/components/mosaic/SectionMosaic";
import MosaicArts from "@/components/mosaic/MosaicArts";
import ContactCall from "@/components/ContactCall";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Aos from "aos";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <>
      <Head>
        <title>Página Inicial</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderIndex />
      {/* line-detail */}
      <div className="line-detail">
        <div className="container">
          <div className="line"></div>
        </div>
      </div>
      {/* line-detail */}
      <SectionMosaic />
      <section className="youtube-video">
        <div className="container" data-aos="fade-up">
          <iframe
            width="835"
            height="470"
            src="https://www.youtube.com/embed/7VQToY7rizU"
            title="A concept to host a tree: Architectural Tour | ARCHITECTURE HUNTER"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <MosaicArts />
      <section className="architects-message">
        <div className="container">
          <div className="message" data-aos="fade-up">
            <h2>Lorem Ipsum dolor site amet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              iaculis, sapien id volutpat pulvinar, nisi lacus aliquet sapien,
              molestie aliquam diam sem in mi. Nam ultricies hendrerit risus.
              Sed rutrum quam mi, sit amet auctor augue tincidunt sed. Etiam est
              mauris, blandit vitae ligula a, rhoncus porta libero. Aliquam
              felis magna, consequat sit amet scelerisque sit amet, vehicula non
              magna. Nunc euismod justo nec leo molestie, vitae condimentum leo
              tincidunt. <br />
              <br />
              Nulla cursus ultrices ante, id mattis felis elementum vel.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vivamus iaculis dignissim
              ipsum, in ultricies turpis rhoncus ut. Suspendisse lobortis libero
              sed rhoncus malesuada. Phasellus posuere ultricies ipsum, sed
              euismod tellus interdum id. Ut ac purus sodales, sodales ligula
              et, luctus diam.
            </p>
          </div>
        </div>
      </section>
      <ContactCall />
      <Footer />
    </>
  );
}
