import { Typography } from "@mui/material";
import DInvest from "./DInvest";

function DInbound() {
  return (
    <div className="bg-[#588157] text-white py-12 px-6">
      <div className="px-2 lg:px-20 py-7 flex flex-col lg:flex-row">

        <div className="w-full lg:w-1/2 mb-5">
            <Typography
            fontFamily={"IT Medium"}
            fontSize={{ lg: "44px", xs: "28px" }}
            className="mb-6 leading-snug"
            >
                Inbound Corporate <br/> GCC Entry Planning & Support
            </Typography>
        </div>

        <div className="w-full lg:w-1/2">
            <Typography fontFamily={"IT Light"} fontSize={{ lg: "18px", xs: "16px" }} lineHeight={1.8}>
                At Forest, we create tailored solutions to help businesses expand into the UAE and
                wider GCC. International growth demands more than ambition—it requires local insight,
                cultural understanding, and trusted guidance.
                <br /><br />
                Our role is to bridge that gap. We support global enterprises in navigating regulations,
                customs, and practical challenges, making market entry smoother and more sustainable.
                From initial viability studies to ongoing advisory, we work closely with leadership
                teams to turn plans into results.
                <br /><br />
                In recent years, we’ve advised companies from India, Pakistan, Europe, the US, and
                beyond—many of whom delayed expansion until they understood the unique sensitivities
                of the region. With Forest, they gain clarity, confidence, and the right strategy to
                thrive in the UAE and GCC.
            </Typography>
        </div>
        
      </div>

    </div>
  );
}

export default DInbound;
