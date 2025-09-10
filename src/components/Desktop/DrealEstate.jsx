import { Typography } from "@mui/material";

function DrealEstate (){
    return ( 
        <div className="flex flex-col items-center justify-center px-40 py-10 gap-20 bg-[#2C3A2E]">

            <div className="flex flex-col items-center w-1/2">
                    <Typography color="#FFD700" fontFamily={"AT Regular"} fontSize={{lg:"50px"}}>Real Estate Expertise</Typography>

                    <Typography fontFamily={"IT Light"} sx={{textAlign:"center"}}>
                        Through our real estate subsidiary, Amana Homes, Forest provides premium expertise in both residential and commercial property markets across Dubai and the UAE. We combine local knowledge with a client-focused approach to deliver exceptional results.
                    </Typography>
            </div>

            <div className="flex gap-10">

            <div className="w-1/2 flex flex-col gap-10">

                <div className="flex flex-col gap-10">
                    <div>
                        <Typography fontFamily={"IT Medium"} fontSize={{lg:"20px"}}>Exclusive Properties & Confidentiality</Typography>
                        <Typography fontFamily={"IT Light"}>From Dubai’s most sought-after homes to off-market commercial investments, Amana Homes maintains the highest standards of discretion. Our approach ensures lasting client relationships and absolute confidentiality in every transaction.</Typography>
                    </div>

                    <div className="border border-[#FFD700] w-full"/>

                    <div>
                        <Typography fontFamily={"IT Medium"} fontSize={{lg:"20px"}}>Tailored Services & Strong ROI</Typography>
                        <Typography fontFamily={"IT Light"}>Whether acquiring a family home, off-plan units, or large-scale commercial properties, we provide carefully structured packages designed to meet investors’ objectives and maximize returns.</Typography>
                    </div>

                    <div className="border border-[#FFD700] w-full"/>

                    <div>
                        <Typography fontFamily={"IT Medium"} fontSize={{lg:"20px"}}>Aligned Interests & Dedicated Support</Typography>
                        <Typography fontFamily={"IT Light"}>Our dedicated team actively promotes exclusively listed properties, ensuring our interests align with our clients’ goals. From start to finish, we offer hands-on support and local expertise to deliver premium outcomes.</Typography>
                    </div>

                </div>

                <div>
                    <a href="https://www.amanahomes.ae/">
                        <button
                            className="bg-[#FFD700] px-5 py-2 rounded-md text-[#355E3B] cursor-pointer"
                        >
                            Visit Amana Homes
                        </button>
                    </a>
                </div>
            </div>

            <div className="w-1/2">
                {/* <div className="bg-[url('/Real1.jpg')] bg-cover bg-center h-170 w-full rounded-2xl"/> */}
                <img
                    src="/Real1.jpg"
                    alt="image"
                    loading="lazy"
                    className="object-cover rounded-2xl h-140"
                />
            </div>

            </div>
        </div>
     );
}
 
export default DrealEstate;