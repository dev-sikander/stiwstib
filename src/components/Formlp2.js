import React from 'react'
import { Container, Row } from 'react-bootstrap'
import styles from "@/styles/Formlp2.module.css";
import { useState, useEffect } from 'react';
import Axios from "axios";
import { usePathname } from "next/navigation"

const Formlp2 = () => {

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
            name: e.target.name.value,
            last: 'null',
            email: e.target.email.value,
            phone: e.target.phone.value,
            comment: 'null',
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        }

        const JSONdata = JSON.stringify(data)

        setScore('Sending Data');
    


        fetch('api/emailapi/route', {
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

            <section className={styles.conform}>

                <Container>

                    <Row>
                        <h2 className='white f-60 f-700 center mb-4 mb-md-5'>Turn Your App Idea Into An App</h2>
                        <form className={styles.formalign} onSubmit={handleSubmit}>

                            <input type="text" minLength="4" placeholder="Name" id="name" name="name" required />
                            <input type="email" placeholder="Email" id="email" name="email" required />
                            <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" id="phone" name="phone" placeholder="Phone Number" required />


                            <button type="submit" name="saves1" id="butact1" className="primary-btn">{score}</button>
                        </form>
                    </Row>
                </Container>


            </section>
        </>
    )
}

export default Formlp2