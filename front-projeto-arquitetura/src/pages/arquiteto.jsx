import Navigation from "@/components/patternHeader/Navigation";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Modelo from "../../public/images/modelo.jpg";

const Architect = () => {
  return (
    <>
      <Head>
        <title>Arquiteto</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="architect-page">
        <div className="about-text-area">
          <div className="container-about">
            <Navigation />
            <div className="about">
              <h2>Patrícia Vasconcelos</h2>
              <div className="textarea">
                <div className="biography">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas mi dui, ultricies a ex sit amet, pulvinar fringilla
                  purus. In hac habitasse platea dictumst. Nunc sollicitudin
                  interdum cursus. Suspendisse a massa id velit congue blandit
                  quis non diam. Sed ac ornare justo. Donec blandit cursus
                  velit, auctor commodo diam interdum sit amet. Morbi quis
                  dignissim est. Nulla vitae nisl quam. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus. Nullam lorem libero,
                  tincidunt vel dui a, hendrerit efficitur orci.
                  <br />
                  <br />
                  Mauris sagittis efficitur sapien, consequat tristique sem
                  venenatis sit amet. Ut eu ultrices sapien, et ultricies elit.
                  Donec mattis nibh eu orci feugiat auctor. Nunc eleifend
                  accumsan imperdiet. In hac habitasse platea dictumst. In id
                  ante quis eros molestie luctus. Sed tincidunt nunc vitae
                  turpis interdum, efficitur pharetra quam ornare. Sed nec leo
                  non dolor gravida ornare vitae sit amet est. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae; Nunc quis tempus magna, ac auctor leo.
                </p>
                <div className="profile-buttons">
                  <Link href={"/orcamento"}><button>Entrar em contato</button></Link>
                </div>
                </div>
                <Image src={Modelo} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Architect;
