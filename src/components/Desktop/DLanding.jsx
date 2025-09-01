import { Typography } from "@mui/material";
import DNavbar from "./DNavbar";
import {SpinningText} from "../magicui/spinning-text"


function DLanding ({scrollToAbout, scrollToPortofolio, scrollToInsights, scrollToEstate, scrollToFeedback}){
    return ( 
        <div className="bg-[#355E3B] h-screen w-full">
            <DNavbar scrollToAbout={scrollToAbout} scrollToPortofolio={scrollToPortofolio} scrollToInsights={scrollToInsights} scrollToEstate={scrollToEstate} scrollToFeedback={scrollToFeedback}/>

            <div className="flex flex-col items-center">
                <Typography color="#FFD700" fontFamily={"AT Bold"} fontSize={{lg:"130px"}} textAlign={'center'}>FOREST INVESTMENTS</Typography>
                <div className="absolute bg-[url('Tree.png')] bg-cover h-160 w-140 border-white top-60"/>
            </div>

            <div className="absolute border-white h-50 w-120 bottom-0 right-20">
                <Typography
                    style={{ fontFamily: "AT Regular" }} 
                    className="text-[15px] lg:text-[18px]"
                >
                    Like trees taking root, Forest helps businesses ground themselves in the UAE market. With deep local knowledge, we guide companies through customs and opportunities, ensuring steady growth across diverse sectors. Our investments are built to last, growing stronger over time.
                </Typography>
            </div>

            <div className="absolute border-white h-10 w-50 bottom-20 left-20">
                <SpinningText>learn more • earn more • grow more •</SpinningText>
            </div>
        </div>
     );
}
 
export default DLanding;