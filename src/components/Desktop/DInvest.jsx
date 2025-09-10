import { Typography } from "@mui/material";

function DInvest() {
  return (
    <div className="bg-white text-[#2C3A2E] py-12 px-6 lg:px-20">
      {/* Header Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mb-12">
        <div className="w-full">
          <Typography
            fontFamily={"IT Medium"}
            fontSize={{ lg: "44px", xs: "28px" }}
            className="mb-6 leading-snug"
          >
            Investing in the UAE’s Future SMEs
          </Typography>
          <Typography fontFamily={"IT Light"} fontSize={{ lg: "18px", xs: "16px" }} lineHeight={1.8}>
            The entrepreneur’s life is exciting but lonely. The challenges and problems of growth can damage even on the most promising
            companies as they discover the new and unique problems caused by sustained high growth, challenges that they have never
            previously addressed, usually causing significant slowing of growth as the management team learn to meet the new demands of
            being a larger business.
            Into this gap, Forests brings decades of real-world SME management and hands-on experience.
          </Typography>
        </div>
      </div>

      {/* Hands-On Engagement Section */}
      <div className="">
        <Typography
          fontFamily={"IT Medium"}
          fontSize={{ lg: "20px", xs: "22px" }}
          className="mb-4"
        >
          Hands-On Engagement
        </Typography>
        <Typography fontFamily={"IT Light"} fontSize={{ lg: "18px", xs: "16px" }} lineHeight={1.8}>
            Our approach involves active support and engagement with management teams. We assist in organizing and enhancing their
            capabilities to meet the rigorous demands for sustainable long-term growth.
            Although companies often focus primarily on fundraising and addressing immediate challenges, they frequently miss the opportunity
            to plan for near-future growth-related obstacles. With Forests’ engagement, these challenges are introduced in advance, giving
            companies the time to adapt and avoid decisions that could otherwise derail their growth efforts.  
            We evaluate progress of our SME’s portfolio based on predefined milestones and progressively provide the investment and
            organizational structures and operations companies need.
        </Typography>
      </div>
    </div>
  );
}

export default DInvest;
