import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/blockchain/cta.module.css';
//
import phone from '@/public/blockchain/images/phone.png';


const cta = (props) => {
    return(
        <>
            <div className='mt-4 d-md-flex justify-content-left align-content-left mobile-center'>
                <span className='pe-3 text-sm-center'>
                    <Link className='btn btn-primary marginb' href="javascript:$zopim.livechat.window.show();">{props.discuss}</Link>
                </span>
                <span className='line'></span>
                <span  className='px-3 pt-sm-2 text-sm-center'>
                    <Image quality={75} src={phone} alt='logo' width={20} /> 
                    <Link className={styles.asnumber} href="tel:13123795987"> {props.number}</Link>
                </span> 
            </div>
        </>
    )
}
export default cta