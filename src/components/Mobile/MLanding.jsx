import { Typography } from "@mui/material";
import MNavbar from "./MNavbar";
import {motion} from "framer-motion"
import { ArrowDown, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";


function MLanding ({scrollToAbout, scrollToPortofolio, scrollToInsights, scrollToEstate, scrollToFeedback}){

    const navigate = useNavigate()
    return ( 
        <div className="bg-[url('/l1.jpg')] bg-cover bg-center h-165 w-full relative">

            <div className="absolute h-full w-full bg-gradient-to-b from-black/90 to-white/10"/>

            <section>
                <MNavbar scrollToAbout={scrollToAbout} scrollToPortofolio={scrollToPortofolio} scrollToInsights={scrollToInsights} scrollToEstate={scrollToEstate} scrollToFeedback={scrollToFeedback}/>
            </section>

            <div className="relative flex flex-col items-center pt-20 px-5 gap-5">
                <Typography color="#FFD700" fontFamily={"AT Bold"} fontSize={{lg:"130px", xs:"60px"}} textAlign={'center'} lineHeight={1.0}>FOREST INVESTMENTS</Typography>
                <Typography
                    style={{ fontFamily: "AT Regular" }} 
                    className="text-[15px] lg:text-[18px]"
                    color="white"
                    textAlign={'center'}
                >
                    We help businesses and investors establish and grow in the UAE with local expertise and long-term investment strategies.
                </Typography>
                <button
                    onClick={() => navigate('/about-us')}
                    className="group w-fit px-3 py-1 relative bg-white/20 backdrop-blur-3xl border border-white/30 rounded-2xl shadow-lg p-6 max-w-md text-white flex items-center gap-3 hover:bg-[#FFD700] transition-all duration-500"
                >
                    <Typography fontFamily={"IT Medium"} fontSize={"13px"}>
                        Learn More
                    </Typography>
                    <ArrowRight className="bg-white text-[#0B253F] rounded-full w-6 h-6 p-1 group-hover:rotate-[-60deg] transition-transform duration-500" />
                </button>
            </div>

            <motion.div
                className="absolute bottom-6 flex justify-center w-full"
                animate={{ y: [0, 8, 0] }}
                transition={ { repeat: Infinity, duration: 1.5 }}
                >
                <ArrowDown className="w-6 h-6 text-white" />
            </motion.div>

        </div>
     );
}
 
export default MLanding;