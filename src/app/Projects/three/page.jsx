import Image from "next/image";
import styles from "../../page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <Link href="/">
          <b> &lt; &#8725; &gt; </b>
        </Link>
      </div>

      <div className={styles.dronelinks}>
        <a
          href="https://github.com/skywalker5014/nextjs-portfolio"
          target="_blank"
          className={styles.dronelinks}
        >
          
            click to go to github
        
        </a>{" "}

      </div>
      <br />
      <hr /> <br />

      <div style={{ textAlign: "justify" }}>
        <p>
          <b>
            this whole portfolio page you are viewing right now is the current
            project. <br /> <br />
            this is a server side rendered website built using the next js
            framework. <br /> <br />
            Detailed report coming soon...
          </b>
        </p>
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
