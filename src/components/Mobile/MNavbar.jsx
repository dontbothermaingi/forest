import {IconButton, Typography} from "@mui/material"
import { MenuIcon } from "lucide-react";
import { useNavigate } from "react-router";

function MNavbar (){

    const navigate = useNavigate()


    return ( 
        <div className="">
                <nav
                    className={`flex justify-between items-center px-4 py-3 sticky top-0 z-50 bg-[#355E3B] transition-all duration-500 ease-out border-b border-[gray]`}
                >
                        <Typography
                        className="text-2xl font-bold text-[white] cursor-pointer"
                        fontFamily={"IT Medium"}
                        onClick={() => navigate("/")}
                        fontSize={"20px"}
                        >
                        Forest Investments
                        </Typography>

                    <IconButton aria-label="Open menu" onClick={() => setDrawerOpen(true)}>
                        <MenuIcon className="text-[white] w-7 h-7" />
                    </IconButton>
                </nav>
        </div>
     );
}
 
export default MNavbar;