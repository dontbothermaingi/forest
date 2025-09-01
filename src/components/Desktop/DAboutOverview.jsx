import { Typography, useMediaQuery } from "@mui/material";
import DNavbar from "./DNavbar";
import MNavbar from "../Mobile/MNavbar";

export default function ForestsInvestment() {

    const isMobile = useMediaQuery("(max-width:1280px)")

    return (

        <div className="bg-[#355E3B]">

            {isMobile ? <MNavbar/> : <DNavbar/>}
            
            <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800 leading-relaxed space-y-10">
                
                {/* Introduction */}
                <section>
                <h1 style={{fontFamily:"IT Medium"}} className="text-3xl font-bold text-[#FFD700] mb-4">
                    About Forests Investment
                </h1>
                <Typography style={{fontFamily:"AT Regular"}} color="white" fontSize={{lg:"17px"}}>
                    Forests Investment is under the leadership of a serial entrepreneur and
                    international businessman whose experience has been honed over decades.
                    As an early technology entrepreneur, our founder developed a two-person
                    startup into a Nasdaq public listed global enterprise, expanding across
                    40 countries with almost 4,000 employees, becoming one of the early
                    American Unicorn Public Companies.
                </Typography>
                </section>
        
                {/* Entrepreneurial Journey */}
                <section>
                <h2 style={{fontFamily:"IT Medium"}} className="text-2xl font-semibold text-[#FFD700] mb-3">
                    Entrepreneurial Journey
                </h2>
                <Typography style={{fontFamily:"AT Regular"}} color="white" fontSize={{lg:"17px"}}>
                    This large-scale corporate international success was further enriched by
                    multiple corporate turnarounds, bringing new value to shareholders. Since
                    1990, our founder has also been an active investor and supporter in
                    venture capital and private equity investment both directly and through
                    funds in the USA, Australia, and the UK, deploying over 50 personal
                    investments in growing SMEs across Australia, USA, UK, and Europe.
                </Typography>
                </section>
        
                {/* Industry Expertise */}
                <section>
                <h2 style={{fontFamily:"IT Medium"}} className="text-2xl font-semibold text-[#FFD700] mb-3">
                    Industry Expertise
                </h2>
                <Typography style={{fontFamily:"AT Regular"}} color="white" fontSize={{lg:"17px"}}>
                    His expertise embraces a wide range of industries including technology,
                    healthcare, retail, fast fashion, fintech, proptech, logistics,
                    petrochemical, biofuels, biotech, and other major sectors.
                </Typography>
                </section>
        
                {/* UAE Market Focus */}
                <section>
                <h2 style={{fontFamily:"IT Medium"}} className="text-2xl font-semibold text-[#FFD700] mb-3">
                    UAE Market Focus
                </h2>
                <Typography style={{fontFamily:"AT Regular"}} color="white" fontSize={{lg:"17px"}}>
                    Since 2020, Forests and its predecessor companies have leveraged a broad
                    base of international investor partners and extensive operational
                    experience. We have assisted businesses in navigating the dynamic
                    demands of entering the UAE market and advised them as they adapted to
                    local operational requirements and customer needs on their path to GCC
                    and international success.
                </Typography>
                </section>
        
                {/* Our Mission */}
                <section>
                <h2 style={{fontFamily:"IT Medium"}} className="text-2xl font-semibold text-[#FFD700] mb-3">
                    Our Mission
                </h2>
                <Typography style={{fontFamily:"AT Regular"}} color="white" fontSize={{lg:"17px"}}>
                    At Forests Investment, we work with both established international and
                    local companies. Our track record speaks volumes—we’ve successfully
                    supported and facilitated the entry of numerous international companies
                    into the UAE. We provide ongoing advisory, investment, and strategic
                    guidance to companies from the United States, India, Pakistan, Europe,
                    and the United Kingdom as they explore the UAE opportunity and commence
                    expansion plans.
                </Typography>
                </section>
        
                {/* Strategic Role */}
                <section>
                <h2 style={{fontFamily:"IT Medium"}} className="text-2xl font-semibold text-[#FFD700] mb-3">
                    Strategic Role in Growth
                </h2>
                <Typography style={{fontFamily:"AT Regular"}} color="white" fontSize={{lg:"17px"}}>
                    Ultimately, Forests is the missing piece in the toolbox that many
                    companies need for a successful entry into the GCC. Lawyers,
                    accountants, enterprise consultants, and PROs each have their role. At
                    Forests, we work hand in hand with them to help businesses strategically
                    understand the local landscape and adapt for growth in this market.
                </Typography>
                </section>
            </div>
      </div>
    );
  }
  