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

        <div className={styles.contacts}>
          <p>
            <a
              href="/SUMUKH_UPADHYA.pdf"
              download="Sumukh's Resume"
              target="_blank"
              rel="noreferrer"
            >
              Download my resume: {}
              <button style={{ width: "30px" }}>
                {" "}
                <b style={{color: 'white'}}> &#10515; </b>
              </button>
            </a>
            <br /> <br />
            <a href="mailto:upadhyasumukh@gmail.com" target="_blank">
              Email me : <br /> <b> upadhyasumukh@gmail.com</b>
            </a>
            <br /> <br />
            Reach on Phone : <br /> <b> +91 70196 47734 </b> <br /> <br />
            <a href="https://wa.me/+917019647734" target="_blank">
              Watsapp : <br /> <b>Connect with me on watsapp</b>
            </a> 
            <br /> <br />
            <a href="https://github.com/skywalker5014" target="_blank">
              Github : <br /> <b>github.com/skywalker5014</b>
            </a> <br />
            <br />
            <a
              href="https://www.linkedin.com/in/sumukh-upadhya-4bba48276/"
              target="_blank"
            >
              Linkedin : <br /> <b>connect on Linkedin</b>
            </a>
          </p>
        </div>
    </main>
  );
}
