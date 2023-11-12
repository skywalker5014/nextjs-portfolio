import Image from "next/image";
import styles from "../../page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <Link href="/" >
          <b> &lt; &#8725; &gt; </b>
        </Link>
      </div>
      <div className={styles.dronelinks}>
        <a
          href="https://github.com/skywalker5014/Droneshop"
          target="_blank"
          className={styles.dronelinks}
        >
          
            click to go to github
        
        </a>{" "}
        <br />
        <a href="" target="_blank" className={styles.dronelinks}>
          
            click to check out the live project
         
        </a>{" "}
        <br />
        <a href="" target="_blank" className={styles.dronelinks}>
          
             click to check out project demo video.
         
        </a>
      </div>
      <br />
      <hr /> <br />

      <div className={styles.dronecontainer}>
        <div className={styles.droneview}>
        <b>Project Droneshop in-depth development report:</b> <br /> <br />
        Droneshop is an e-commerce website to sell consumer drones. This web
        application is built with 3 tier architecture model of a network
        software application. The 3 tiers are: the client layer, the server
        layer and the database layer.
        <br /> <br />
        <div>
          <Image
            className={styles.droneshop}
            src="/architecture.png"
            width={600}
            height={203}
          ></Image> 
        </div>
        application architecture tier
        <br /> 

        <ul>
            <b>
        The client layer:</b> <br /> <br />
          <li>
            This is a Client Side Rendering Single Page Application (CSR-SPA)
            built using the React javascript library with the Vite bundler.
          </li>
          <li>
            The client assets are served to the client from the nginx web
            server.
          </li>
          <li>
            On the initial client request, the nginx web server serves the
            client a unpopulated webpage template, after the client application
            handler or the browser loads this template, hydration takes place,
            where the javascript script file loads in the browser and makes
            subsequent API calls to the server layer to extract the required
            data to present to the client.
          </li>
          <li>
            JSON is the standard data serialization format used to exchange data
            between the server
          </li>
          <li>
            Every pages are internally routed at the client side itself using
            the react router dom library.
          </li>
        </ul>

        <ol>
            <b>
        The server layer:</b> <br /> <br />
          <li>
            <b>
            Web server (Nginx):</b> <br /> <br />
            <ul>
              <li>
                All the requests from the client is handled by the Nginx web
                server.
              </li>
              <li>Nginx is used as the reverse proxy at the server layer.</li>
              <li>
                Nginx serves the client all the static files intended to serve
                to the client at initial request.
              </li>
              <li>
                All the other API call to the server from the client goes
                through the Nginx reverse proxy to the application server.
              </li>
            </ul>
          </li> <br /> <br />

          <li>
            <b>
            Application server (Node/Express): </b><br /> <br />
            <ul>
              <li>
                This is a modular monolithic architecture application server
                built using the Express JS server framework running on the Node
                javascript runtime environment.
              </li>
              <li>
                The application server is what handles all the business logic.
              </li>
              <li>
                the application server handles individual user and their data
                using a Token based stateless authentication utilizing the JSON
                Web Token internet standard (RFC 7519).
              </li>
              <li>
                Every single API request for querying data to the server is
                verified against the token to prevent unauthorized access to
                important data and Cross-Origin Resource Sharing (CORS) is set
                up to query data only for requests coming from the nginx reverse
                proxy meaning no outside service can get a response from the
                application server.
              </li>
              <li>
                The payment process is handled using a third party payment
                gateway service Razorpay.
              </li>
              <li>
                the client can initiate a payment order request to the
                application server and the application server creates an order
                id using an API from Razorpay and create the whole order invoice
                by querying the total payment amount from the individual users
                cart value obtained directly from the database to avoid any
                client side tampering of the invoice details.
              </li>
              <li>
                the client side is then forwarded to the Razorpay payment
                gateway by loading their template and script file from their CDN
                after the application server creates the invoice and triggers
                the client side logic for payment using the invoice details
                during the response for the request of payment from the client.
              </li>
              <li>
                After successful payment, the client triggers a Webhook in
                Razorpay service on the event of successful payment.
              </li>
              <li>
                This Webhook transfers the payment details to the application
                server, where the application server once validates the payment.
                The successful order details are then passed onto the database
                for further handling of the business.
              </li>
            </ul>
          </li> <br /> <br />
          <b>
          Data layer:</b>
        </ol>
        <div>
              <Image src="/erdiagram.png" width={600} height={432}></Image>
            </div>
            database Entity-Relationship diagram            
             <br />
        <ol>
          <li>
            <b>
            MySQL:</b> <br /> <br />             
            <ul>
              <li>
                sql relational database management system mysql is used to store
                the core business data like the user data, products data and the
                cart data.
              </li>
              <li>
                three separate tables are created: users , products and cart.
              </li>
              <li>
                the user table has the user specific attributes with user email
                id as the primary key.
              </li>
              <li>
                the products table as all the product specific attributes with
                the product id as the primary key.
              </li>
              <li>
                the cart table has user email as the foreign key and the product
                id as the foreign key with quantity.
              </li>
              <li>
                the entity relationship model of this database is shown in the
                above figure.
              </li>
            </ul>
          </li>
          <br /> <br />
          <li> 
            <b>
            MongoDb:</b> <br /> <br />
            <ul>
              <li>
                unstructured document based database nosql management system
                used to store user login information.
              </li>
              <li>
                user password is hashed before storing using bcrypt hasher npm
                library.
              </li>
              <li>used to validate a user during login.</li>
              <li>
                also used to store the user order receipt on successful payment
                of order.
              </li>
            </ul>
          </li> <br /> <br />
          <li>
            <b>
            Redis:</b> <br /> <br />
            <ul>
              <li>Redis is an in-memory database management system.</li>
              <li>
                redis is faster compared to the traditional disk based dbms in
                querying data.
              </li>
              <li>
                here redis is used to store frequently queried data like the
                products data for home screen of the app.
              </li>
              <li>redis is used as the cache system at the server tier.</li>
            </ul>
          </li> <br /> <br />
        <b> This is the complete system design of the whole application. </b>
        </ol>
        <div>
          <Image src="/systemdesign.png" width={900} height={482}></Image>
        </div> Final complete systemdesign diagram <br /> <br />

        <ol>
        <b>AWS infrastructure architecture:</b> <br /> <br />
        <li>created a virtual private cloud.</li>
        <li>created an internet gateway and attached it to the VPC.</li>
        <li>inside the VPC created a public subnet (enabled assign IPv4 public address).</li>
        <li>created an EC2 instance running ubuntu server inside the public subnet.</li>
        <li>created a new route table and associated it with the public subnet.</li>
        <li>edited the new route table&#39;s route settings to listen to traffic from all destinations from 
            the internet (0.0.0.0/0) and the accept or allow the traffic&#39;s through the internet gateway
            as teh target to listen to from.
        </li>
        <li>created a new security group, set the inbound traffic rule to accept traffic from
            specified application layer protocols and specified transport layer port of the TCP/IP architecture but from all the 
            destination IP address (0.0.0.0/0).
        </li>
        <li>created an elastic IP address and associated it with the EC2 instance.</li>
        </ol> <br /> <br />
        <div>
          <Image src="/aws.png" width={800} height={625}></Image>
        </div> 
        AWS infrastructure architecture diagram
        </div>
      </div>

      <hr /> <br />
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
