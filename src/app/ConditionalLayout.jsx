"use client"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
//
import Header from "../components/NewHeader";
import Headerlp from "../components/Headerlp";
import Headerlphome from "../components/Headerlphome";
import EcommerceBanner from "../components/EcommerceBanner";
import Footer from "../components/Footer";
import Footernewlp from "../components/Footernewlp";
import Footernewdesign from "../components/Footernewdesign";
import EcommerceFooter from "../components/EcommerceFooter";
import Cursor from "../components/Cursor";
import Skicky from "../components/Skicky";
// import { Analytics } from '@vercel/analytics/react';
import Pixel from "../components/Pixel";
import Pixel2 from "../components/Pixel2";

const ConditionalLayout = ({ children }) => {
    const router = usePathname();
    // =============== Mouse ===============
    const mouse =
        router.pathname == "/" ||
        router.pathname == "/about-us" ||
        router.pathname == "/our-work" ||
        router.pathname == "/privacy-policy" ||
        router.pathname == "/term-and-condition" ||
        router.pathname == "/ios-app-development" ||
        router.pathname == "/android-application-development" ||
        router.pathname == "/augmented-reality-apps-development-company" ||
        router.pathname == "/artificial-intelligence-development-company" ||
        router.pathname == "/cross-platform-app-development" ||
        router.pathname == "/web-app-development" ||
        router.pathname == "/react-native-mobile-development" ||
        router.pathname == "/hybrid-mobile-apps-development" ||
        router.pathname == "/custom-mobile-development" ||
        router.pathname == "/native-mobile-development" ||
        router.pathname == "/flutter-mobile-development" ||
        router.pathname == "/mobile-application" ||
        router.pathname == "/mobile-application-usa" ||
        router.pathname == "/mobile-application-huston" ||
        router.pathname == "/mobile-application-newyork" ||
        router.pathname == "/mobile-application-los-angeles" ||
        router.pathname == "/mobile-application-duplicate" ||
        router.pathname == "/mobile-application-duplicate2" ||
        router.pathname == "/top-mobile-app-development-company" ||
        router.pathname == "/mobile-app-development-company-lp2" ||
        router.pathname == "/game-application-development" ||
        router.pathname == "/nft-game-development" ||
        router.pathname == "/2d-game-development-company" ||
        router.pathname == "/3d-game-development-company" ||
        router.pathname == "/blockchain-game-development" ||
        router.pathname == "/travel-app-development-case-study" ||
        router.pathname == "/real-estate-app-development-case-study" ||
        router.pathname == "/clothing-marketplace-app-development-case-study" ||
        router.pathname == "/social-app-development-case-study" ||
        router.pathname == "/automobile-repair-app-development-case-study" ||
        router.pathname == "/marketing-partnership-app-development-case-study" ||
        router.pathname == "/healthcare-app-development-case-study" ||
        router.pathname == "/ride-app-development-case-study" ||
        router.pathname == "/fitness-app-development-case-study" ||
        router.pathname == "/hiring-app-development-case-study" ||
        router.pathname == "/music-app-development-case-study" ||
        router.pathname == "/handyman-on-demand-app-development-case-study" ||
        router.pathname == "/food-delivery-app-development-case-study" ||
        router.pathname == "/ios-developer" ||
        router.pathname == "/android-developer" ||
        router.pathname == "/hybrid-developer" ||
        router.pathname == "/native-developer" ||
        router.pathname == "/mobile-developer" ||
        router.pathname == "/top-ecommerce-app-development-company" ||
        router.pathname == "/top-mobile-app-development-company" ||
        router.pathname == "/mobile-app-development-services" ||
        router.pathname == "/create-a-mobile-app" ||
        router.pathname == "/top-mobile-app-developers" ||
        router.pathname == "/mobile-app-development-company-dubai";
    // =======================================
    const newlps = router.pathname == "/mobile-app-development-company-lp2";
    // =======================================
    const newhomepage = router.pathname == "/top-mobile-app-developers";
    // =======================================
    const newecommercepage = router.pathname == "/top-ecommerce-app-development-company";
    // =======================================
    const superecommer =
        router.pathname == "/top-mobile-app-developers" ||
        router.pathname == "/top-ecommerce-app-development-company";
    // =======================================
    const meetOurTeam = router.pathname == "/meet-our-team";
    // =======================================
    let headerComponent;
    if (newlps) {
        headerComponent = <Headerlp />;
    } else if (newhomepage) {
        headerComponent = <Headerlphome />;
    } else if (newecommercepage) {
        headerComponent = <EcommerceBanner />;
    } else if (meetOurTeam) {
        headerComponent = null;
    } else {
        headerComponent = <Header />;
    }
    // =======================================
    let footerComponent;
    if (newlps) {
        footerComponent = <Footernewlp />;
    } else if (newhomepage) {
        footerComponent = <Footernewdesign />;
    } else if (newecommercepage) {
        footerComponent = <EcommerceFooter />;
    } else if (meetOurTeam) {
        footerComponent = null;
    } else {
        footerComponent = <Footer />;
    }
    // =======================================
    const [showPixels, setShowPixels] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowPixels(true);
        }, 10000);
        return () => clearTimeout(timeout);
    }, []);
    // =======================================
    return (
        <>
            {showPixels && (
                <>
                    <Pixel />
                    <Pixel2 />
                    {/* <Analytics /> */}
                </>
            )}
            {headerComponent}
            {mouse && <Cursor />}
            {superecommer ? '' : <Skicky />}
            {children}
            {footerComponent}
        </>
    )
}

export default ConditionalLayout