import { Typography } from "@mui/material";
import { useNavigate } from "react-router";

function DFooter ({scrollToAbout, scrollToPortofolio, scrollToLanding, scrollToFeedback}){

    return ( 
        <div className="bg-[#102C1C] h-fit py-10 px-20">

            <div className="flex flex-col items-center justify-center">
                <div>
                    <Typography color="#FFD700" fontFamily={"AT Bold"} fontSize={{lg:"120px", md:"50px", xs:"27px"}}>Forest Investments</Typography>
                </div>

                <div className="flex items-center gap-5">
                    <Typography color="gray" fontFamily={"AT Bold"} fontSize={{lg:"20px"}} sx={{cursor:"pointer"}} onClick={scrollToLanding}>Home</Typography>
                    <Typography color="gray" fontFamily={"AT Bold"} fontSize={{lg:"20px"}} sx={{cursor:"pointer"}} onClick={scrollToAbout}>About</Typography>
                    <Typography color="gray" fontFamily={"AT Bold"} fontSize={{lg:"20px"}} sx={{cursor:"pointer"}} onClick={scrollToPortofolio}>Portofolio</Typography>
                    <Typography color="gray" fontFamily={"AT Bold"} fontSize={{lg:"20px"}} sx={{cursor:"pointer"}} onClick={scrollToFeedback}>Testimonials</Typography>
                </div>


                <div className="border-t border-[gray] w-full mt-5" />


                <div className="pt-5">
                <Typography fontFamily={"IT Light"} color="gray" textAlign="center">
                    © 2025 Forest Investments
                </Typography>
                </div>
            </div>

        </div>
     );
}
 
export default DFooter;