import { Typography } from "@mui/material";

function DFooter (){
    return ( 
        <div className="bg-[#102C1C] h-fit py-10 px-20">

            <div className="flex flex-col items-center justify-center">
                <div>
                    <Typography color="#FFD700" fontFamily={"AT Bold"} fontSize={{lg:"130px"}}>Forest Investments</Typography>
                </div>

                <div className="flex items-center gap-5">
                    <Typography color="gray" fontFamily={"AT Bold"} fontSize={{lg:"20px"}}>Homes</Typography>
                    <Typography color="gray" fontFamily={"AT Bold"} fontSize={{lg:"20px"}}>About</Typography>
                    <Typography color="gray" fontFamily={"AT Bold"} fontSize={{lg:"20px"}}>Portofolio</Typography>
                    <Typography color="gray" fontFamily={"AT Bold"} fontSize={{lg:"20px"}}>Testimonials</Typography>
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