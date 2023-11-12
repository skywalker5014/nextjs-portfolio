import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <Link href="/">
          <b> &lt; &#8725; &gt; </b>
        </Link>
      </div> 

 
        <div className={styles.profile}>
        <hr />
          <p>
            <b>
              Hello there! <br /> <br />
              I am sumukh upadhya. I graduated this year, June 2023, with an
              undergraduate degree in electronics and communication engineering
              with 9.1 cgpa. For my final year undergrad project, I decided to
              build an ecommerce application and a quadcopter drone to show how
              drones can be used to save a lot of money and greatly improve the
              last mile delivery service for a typical ecommerce business. For
              the ecommerce application, I decided on settling with the MERN
              tech stack as it is more popular in the industry. This was the
              first time I tasted actual programming and I suddenly fell in love
              with it. <br /> <br />
              Soon I dived deeper into the software architecture field and
              started appreciating it a lot, especially backend engineering. I
              started to tinker with MERN stack, MySQL, NextJs, AWS, Docker, and
              so on, this is when I realized I am kind of good at grasping such
              technical skills and my interest peaked on this field. Considering
              I started with actual programming from May 2023, I have picked up
              on a lot of skills lately like system design, computer networks,
              cyber-security, dbms, etc a lot faster than my peers and I now am
              at the stage where I need to find an organization where I can put
              my skills to build software products at large scale and grow my
              knowledge by learning under good mentors from these organizations.
            </b>
          </p>
          <hr />

        </div>

      <div className={styles.box}>
        <Link href="/skills" className={styles.card}>
          <h2>
            skills <span>-&gt;</span>
          </h2>
          <p>section for recruiters.</p>
        </Link>

        <Link href="/Projects" className={styles.card}>
          <h2>
            Projects <span>-&gt;</span>
          </h2>
          <p>some of my major software Projects.</p>
        </Link>

        <Link href="/contact" className={styles.card}>
          <h2>
            Contact me <span>-&gt;</span>
          </h2>
          <p>my contact details to hire me or connect with me.</p>
        </Link>
      </div>
    </main>
  );
}
