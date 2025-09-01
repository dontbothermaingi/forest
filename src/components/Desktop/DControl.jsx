import { useRef } from "react";
import DAbout from "./DAbout";
import DFeedBack from "./DFeedback";
import DFooter from "./DFooter";
import DLanding from "./DLanding";
import DMarket from "./DMarket";
import DPortofolio from "./DPortofolio";
import DrealEstate from "./DrealEstate";
import { useMediaQuery } from "@mui/material";
import MLanding from "../Mobile/MLanding";
import MAbout from "../Mobile/MAbout";
import MPortofolio from "../Mobile/MPortfolio";
import MMarket from "../Mobile/MMarket";
import MrealEstate from "../Mobile/MRealEstate";
import MFeedBack from "../Mobile/MFeedback";

function DControl (){

    const aboutRef = useRef()
    const portofolio = useRef()
    const market = useRef()
    const estate = useRef()
    const feedback = useRef()

    const isMobile = useMediaQuery('(max-width:1280px)')

    function scrollToAbout(){
        aboutRef.current?.scrollIntoView({behavior:"smooth"})
    }

    function scrollToPortofolio() {
        portofolio.current?.scrollIntoView({ behavior: "smooth" });
    }

    function scrollToInsights() {
        market.current?.scrollIntoView({ behavior: "smooth" });
    }

    function scrollToEstate() {
        estate.current?.scrollIntoView({ behavior: "smooth" });
    }

    function scrollToFeedback() {
        feedback.current?.scrollIntoView({ behavior: "smooth" });
    }

    return ( 
        <div>
            <section>
                {!isMobile ? (
                    <DLanding scrollToAbout={scrollToAbout} scrollToPortofolio={scrollToPortofolio} scrollToInsights={scrollToInsights} scrollToEstate={scrollToEstate} scrollToFeedback={scrollToFeedback}/>
                ):(
                    <MLanding/>
                )}
                
            </section>

            <section ref={aboutRef}>
                {isMobile ? (<MAbout/>):(<DAbout/>)}
            </section>

            <section ref={portofolio}>
                {isMobile ? (<MPortofolio/>) : (<DPortofolio/>)}
            </section>

            <section ref={market}>
                {isMobile ? (<MMarket/>) : (<DMarket/>)}
            </section>

            <section ref={estate}>
                {isMobile ? (<MrealEstate/>) : (<DrealEstate/>)}
            </section>

            <section ref={feedback}>
                {isMobile ? (<MFeedBack/>) : (<DFeedBack/>)}
            </section>

            <section>
                <DFooter/>
            </section>
        </div>
     );
}
 
export default DControl;