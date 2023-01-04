import Link from "next/link";
import Container from "../components/Container";

export default function About() {
  return (
    <Container title="About – Emanuele Gurini">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter:{" "}
              <a href="https://twitter.com/EmanueleGurini">@EmanueleGurini</a>
            </li>
            <li>
              GitHub:{" "}
              <a href="https://github.com/EmanueleGurini">@EmanueleGurini</a>
            </li>
            <li>
              Website:{" "}
              <Link href="https://emanuelegurini.blog">
                https://emanuelegurini.blog
              </Link>
            </li>
            <li>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/emanuelegurini/">
                https://www.linkedin.com/in/emanuelegurini
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Emanuele Gurini, Software Developer at Flowing / Claranet</p>
          <h3>Who am I?</h3>
          <p>
            {`I'm studying Computer Science in Camerino because there isn't enough
            money and I graduated in Graphic Design in 2018 (that's why you see
            this website!)`}
            .
          </p>
          <h3>Role Models</h3>
          <p>
            {`I'm a George Hotz groupie, if I were a woman I would give myself to
            Salvatore Sanfilippo (the creator of Redis) and I follow Simone
            Torrisi's channel (I wish I had his beard), Michele Riva's (I know
            you're reading this: give me all the Rolexes!), Lorenzo De
            Francesco's (the coolest front-ender in Italy, after me), that cool
            guy Fabio Biondi, Lea Verou (if you're reading this, I'm the one
            stalking you on Twitter!), that JavaScript fetishist Adrian Bogdan,
            that good guy Dan Abramov, that genius Matteo Collina, William Linn,
            Chriss Do, Raffaele Gaito, and that cool Reaperiano Francesco
            Bonalume.`}
          </p>
          <h3>Education</h3>
          <p>
            Emanuele Gurini is a Computer Science student at Unicam (Camerino),
            graduated from Macerata Accademy of fine arts with a B.A. in Graphic
            Design.
          </p>
          <h3>Caffè Sviluppo</h3>
          <p>
            {`I am the co-host of the 'Caffè Sviluppo' podcast, where we discuss
            software development and technology with industry experts. I want to
            thank my friend Christian Varisco for giving me the opportunity to
            join him on this adventure. Christian, if you're reading this, you
            know I love you, bro.`}
          </p>
        </div>
      </div>
    </Container>
  );
}
