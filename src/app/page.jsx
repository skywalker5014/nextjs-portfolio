import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <main className={styles.main}>
    
      <div className={styles.homecontainer}>
          <div className={styles.logo}>
            <Link href="/" >
              <b> &lt; &#8725; &gt; </b>
            </Link>
        </div>

        <div className={styles.center}>
          <section>
          <h1>SUMUKH UPADHYA</h1> 
          <h4>SOFTWARE ENGINEER</h4>
          </section>
          <div className={styles.socials}>
          <a href="https://github.com/skywalker5014" target="_blank">
            <Image
              className={styles.logo}
              src="/github.svg"
              alt="Next.js Logo"
              width={27}
              height={27}
              priority
            />{" "}
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/sumukh-upadhya-4bba48276/"
            target="_blank"
          >
            <Image
              className={styles.logo}
              src="/linkedin.svg"
              alt="Next.js Logo"
              width={32}
              height={27}
              priority
            />
          </a>
          </div>
        </div>

        <div className={styles.box}>
          <Link href="/Profile" className={styles.card}>
            <h2>
              Profile <span>-&gt;</span>
            </h2>
            <p>a small description about me.</p>
          </Link>

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
      </div>
    </main>
  );
}
