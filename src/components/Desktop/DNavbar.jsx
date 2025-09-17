import {Typography} from "@mui/material"
import { useNavigate } from "react-router";

function DNavbar ({scrollToAbout, scrollToPortofolio, scrollToEstate, scrollToFeedback}){

    const navigate = useNavigate()

    return ( 
        <div className="px-20 py-10 relative">
            <div className="flex items-center justify-between gap-5 bg-white/10 backdrop-blur-3xl shadow-lg border border-white/30 py-7 rounded-full px-10">
                <Typography color="#FFD700" fontFamily={"IT Regular"} fontSize={{lg:"20px"}} onClick={() => navigate("/")} sx={{cursor:'pointer'}}>Forest Investments</Typography>

                <div className="flex items-center gap-10">
                    <Typography color="white" fontFamily={"IT Regular"} fontSize={{lg:"18px"}} onClick={scrollToAbout} style={{cursor:"pointer"}}>About Us</Typography>
                    <Typography color="white" fontFamily={"IT Regular"} fontSize={{lg:"18px"}} onClick={scrollToPortofolio} style={{cursor:"pointer"}}>Portofolio</Typography>
                    <Typography color="white" fontFamily={"IT Regular"} fontSize={{lg:"18px"}} onClick={scrollToEstate} style={{cursor:"pointer"}}>Real Estate</Typography>
                    <Typography color="white" fontFamily={"IT Regular"} fontSize={{lg:"18px"}} onClick={scrollToFeedback} style={{cursor:"pointer"}}>Testimonials</Typography>
                </div>
            </div>
        </div>
     );
}
 
export default DNavbar;