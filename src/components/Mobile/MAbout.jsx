import { Typography } from "@mui/material";
import { useNavigate } from "react-router";

function MAbout (){

    const navigate = useNavigate()
    return ( 
        <div className="bg-[#FAFAFA] h-fit w-full flex flex-col items-center py-14">

            <div className="rounded-md px-10 py-1 border-[5px] border-[#355E3B]">
                <Typography color="#355E3B" fontFamily={"AT Bold"} fontSize={{lg:"40px", xs:'18px', md:"20px"}} textAlign={'center'}>About Us</Typography>
            </div>
            <div className="w-fit pt-7 px-3">
                <Typography color="#1C1C1C" fontFamily={"AT Regular"} fontSize={{lg:"50px", xs:"20px", md:"30px"}} textAlign={'center'}>At Forest, we believe success starts with strong foundations. We partner with businesses, helping them navigate the UAE market and build the structures they need to thrive. Our multi-sector investments are focused on long-term growth and resilience.</Typography>
            </div>

            <div className="border-white h-full w-full pt-20 flex items-center">

                <div className="border-white h-full w-full flex flex-col items-center justify-center">
                    <div className="flex items-center gap-1">
                        {/* <Plus className="text-white h-20 w-20"/> */}
                        <Typography color="#355E3B" fontFamily={"IT Medium"} fontSize={{lg:"150px", xs:"40px", md:"70px"}} lineHeight={1.0}>+</Typography>
                        <Typography color="#355E3B" fontFamily={"IT Medium"} fontSize={{lg:"140px", xs:"40px", md:"70px"}} lineHeight={1.0}>25</Typography>
                    </div>
                    <Typography fontFamily={"AT Regular"} textAlign={'center'} color="#355E3B">Years of Experience</Typography>
                </div>

                <div className="border-white h-full w-full flex justify-center items-center" onClick={() => navigate("/about-us")}>
                    <button 
                        className="bg-[#355E3B] py-2 px-2 md:px-4 rounded-md text-md lg:text-xl text-white"
                        style={{fontFamily:"IT Medium"}}
                    >
                        Learn More
                    </button>
                </div>

                <div className="border-white h-full w-full flex flex-col items-center justify-center">
                    <div className="flex items-center gap-1">
                        <Typography color="#355E3B" fontFamily={"IT Medium"} fontSize={{lg:"140px", xs:"40px", md:"70px"}} lineHeight={1.0}>50</Typography>
                        <Typography color="#355E3B" fontFamily={"IT Medium"} fontSize={{lg:"150px", xs:"40px", md:"70px"}} lineHeight={1.0}>+</Typography>
                        {/* <Plus className="text-white h-20 w-20"/> */}
                    </div>
                    <Typography fontFamily={"AT Regular"} color="#355E3B" textAlign={'center'}>Successful Investments</Typography>
                </div>


            </div>
        </div>
     );
}
 
export default MAbout;