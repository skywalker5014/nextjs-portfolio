import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <Link href="/" >
          <b> &lt; &#8725; &gt; </b>
        </Link>
      </div>

        <div className={styles.projects}>
            <Link href="/Projects/one" >
                <h1>Droneshop</h1>
                <span>An ecommerce application to sell drones</span>
            </Link>

            <Link href="/Projects/two">
                <h1>Chatapp</h1>
                <span>Realtime messaging web application</span>
            </Link>

            <Link href="/Projects/three">
                <h1>Portfolio</h1>
                <span>Personal portfolio website</span>
            </Link>
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
