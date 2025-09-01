import { Typography } from "@mui/material";
import MNavbar from "./MNavbar";
import {motion} from "framer-motion"
import { ArrowDown } from "lucide-react";


function MLanding ({scrollToAbout, scrollToPortofolio, scrollToInsights, scrollToEstate, scrollToFeedback}){
    return ( 
        <div className="bg-[#355E3B] h-165 w-full relative">
            <MNavbar scrollToAbout={scrollToAbout} scrollToPortofolio={scrollToPortofolio} scrollToInsights={scrollToInsights} scrollToEstate={scrollToEstate} scrollToFeedback={scrollToFeedback}/>

            <div className="flex flex-col items-center pt-20">
                <Typography color="#FFD700" fontFamily={"AT Bold"} fontSize={{lg:"130px", xs:"60px"}} textAlign={'center'} lineHeight={1.0}>FOREST INVESTMENTS</Typography>
                <div className="absolute bg-[url('/Tree.png')] bg-cover h-80 w-70 border-white top-60"/>
            </div>

            <motion.div
                className="absolute bottom-6 flex justify-center w-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                >
                <ArrowDown className="w-6 h-6 text-white" />
            </motion.div>

        </div>
     );
}
 
export default MLanding;