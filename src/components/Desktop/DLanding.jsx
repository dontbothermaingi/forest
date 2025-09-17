import { Typography } from "@mui/material";
import DNavbar from "./DNavbar";
import {SpinningText} from "../magicui/spinning-text"
import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";


function DLanding ({scrollToAbout, scrollToPortofolio, scrollToInsights, scrollToEstate, scrollToFeedback}){

    const navigate = useNavigate()
    return ( 
        <div className="h-screen w-full bg-[url('/l1.jpg')] bg-cover bg-center relative">

                <div className="absolute h-full w-full bg-gradient-to-r from-black/60 to-white/10"/>
            
                <section>
                    <DNavbar scrollToAbout={scrollToAbout} scrollToPortofolio={scrollToPortofolio} scrollToInsights={scrollToInsights} scrollToEstate={scrollToEstate} scrollToFeedback={scrollToFeedback}/>
                </section>

                <div className="absolute bottom-20 left-10 max-w-2xl flex flex-col gap-5">
                    <Typography color="#FFD700" fontFamily={"AT Bold"} fontSize={{lg:"130px"}} lineHeight={0.8}>Forest Investments</Typography>
                    <Typography
                        style={{ fontFamily: "AT Regular" }} 
                        className="text-[15px] lg:text-[18px]"
                        color="white"
                    >
                        We help businesses and investors establish and grow in the UAE with local expertise and long-term investment strategies.
                    </Typography>
                    <button
                        onClick={() => navigate('/about-us')}
                        className="group w-fit px-8 py-3 relative bg-white/20 backdrop-blur-3xl border border-white/30 rounded-2xl shadow-lg p-6 max-w-md text-white flex items-center gap-3 hover:bg-[#FFD700] transition-all duration-500"
                        >
                        <Typography fontFamily={"IT Medium"} fontSize={"16px"}>
                            Learn More
                        </Typography>
                        <ArrowRight className="bg-white text-[#0B253F] rounded-full w-7 h-7 p-1 group-hover:rotate-[-60deg] transition-transform duration-500" />
                    </button>
                </div>

        </div>
     );
}
 
export default DLanding;