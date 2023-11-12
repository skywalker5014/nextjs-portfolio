import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Link href="/" className={styles.logo}>
          <b> &lt; &#8725; &gt; </b>
        </Link>
      </div>

        <div className={styles.skills}>
          <p>
            <b>
              programming languages: <br /> <span> Javascript, Typescript, Python, C </span><br />{" "}
              <br />
              web-technology: <br /> <span> HTML/CSS, JSX, React js, Next js, vite</span> <br />{" "}
              <br />
              backend technologies: <br /> <span> Nodejs, Nginx, RESTful API, HTTP, Websocket,
              JsonWebTokens, Express js </span><br /> <br />
              database management: <br /> <span> NoSQL- MongoDB, Redis. SQL - MySQL </span><br />{" "}
              <br />
              devops skills: <br /> <span> Docker, VMware, Virtualbox, github actions </span> <br />{" "}
              <br />
              cloud technology: <br /> <span> AWS</span> <br /> <br />
              cyber security: <br /> <span> wireshark</span> <br /> <br />
              version control system: <br /> <span> git, github</span>
            </b>
          </p>
        </div>

      <div className={styles.box}>
        <Link href="/Profile" className={styles.card}>
          <h2>
            Profile <span>-&gt;</span>
          </h2>
          <p>a small description about me.</p>
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
