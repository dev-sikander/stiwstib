import React, { useState, useEffect } from 'react';
import { usePathname } from "next/navigation"
import Image from "next/image";
import Axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Brand.module.css";
//images
import free from "@/public/newdubai/free.png";

const Brand = (props) => {
  const [ip, setIP] = useState('');
  //creating function to load ip address from the API
  const getIPData = async () => {
    const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
    setIP(res.data);
  }
  useEffect(() => {
    getIPData()
  }, [])

  const [score, setScore] = useState('Submit');

  const [checkboxes, setCheckboxes] = useState([]);
  const handleOptionChange3 = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setCheckboxes([...checkboxes, value]);
    } else {
      setCheckboxes(checkboxes.filter((checkbox) => checkbox !== value));
    }
  };

  const router = usePathname();
  const currentRoute = router;

  const [pagenewurl, setPagenewurl] = useState('');
  useEffect(() => {
    const pagenewurl = window.location.href;
    setPagenewurl(pagenewurl);
  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault()
    var currentdate = new Date().toLocaleString() + ''

    const data = {
      name: e.target.first.value,
      last: e.target.last.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      comment: e.target.comment.value,
      checkboxesdata: checkboxes,
      pageUrl: pagenewurl,
      IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
      currentdate: currentdate,
    }

    const JSONdata = JSON.stringify(data)

    setScore('Sending Data');


    fetch('api/emailapidubai/route', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSONdata
    }).then((res) => {
      console.log(`Response received ${res}`)
      if (res.status === 200) {
        console.log(`Response Successed ${res}`)
      }
    })

    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
      "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
      "Brand": "Bitswits",
      "Page": `${currentRoute}`,
      "Date": currentdate,
      "Time": currentdate,
      "JSON": JSONdata,
    });

    await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
      method: "POST",
      body: bodyContent,
      headers: headersList
    });

    const { pathname } = router;
    if (pathname == pathname) {
      window.location.href = '/thank-you';
    }
  }

  return (
    <>
      <section className={styles.trandubai}>
        <Container >
          <Row className={`${styles.newtsl} gy-3 gx-0`}>
            <Col lg={5} className={styles.imgtoken}>
              <Image src={free} className="img-fluid" />
            </Col>
            <Col lg={7}>
              <div className={styles.level}>
                <h3> <span>Let’s Level Up</span> Your <br></br>
                  Brand, Together</h3>
                <form className={styles.your} onSubmit={handleSubmit}>
                  <div>
                    <div className={styles.chill}>
                      <input type="text" placeholder="First Name" name='first' required />
                      <input type="text" placeholder="Last Name" name='last' minLength="4" required />
                    </div>
                    <div className={styles.chill}>
                      <input type="tel" placeholder="Phone" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required />
                      <input type="email" placeholder="Email" name='email' required />
                    </div>
                    <div className={styles.chill}>
                      <textarea placeholder="Write message here..." className={styles.message} name='comment' rows="4" cols="50" />
                    </div>
                    <div className={styles.chill}>
                      <input type="submit" placeholder="Submit" value={score} />
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Brand;
