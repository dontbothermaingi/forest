import { Typography } from "@mui/material";

function MMarket() {
  const items = [
    {
      title: "Inbound Corporate Support",
      desc: "Forest delivers tailored services to help companies enter and operate in the UAE and GCC successfully. With deep understanding of local customs, regulations, and market dynamics, we bridge the knowledge gap for international enterprises expanding in the region.",
    },
    {
      title: "Investing in Future SMEs",
      desc: "High-growth SMEs face unique challenges that can slow expansion. Forest brings decades of real-world management experience, working closely with teams to organize, enhance, and strengthen their capabilities for sustainable, long-term growth.",
    },
    {
      title: "Hands-On Engagement",
      desc: "Our model goes beyond financing. We actively partner with management teams, offering continuous support, market insights, and practical solutions so businesses can operate effectively in the UAE and beyond.",
    },
  ];

  return (
    <div className="bg-[#FAFAFA] w-full py-20 px-6 lg:px-12 flex flex-col items-center">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <Typography
          color="#355E3B"
          fontFamily={"IT Medium"}
          fontSize={{ lg: "50px", xs: "30px" }}
        >
          Insights & Hands-On Support
        </Typography>
        <Typography
          fontFamily={"AT Regular"}
          textAlign={"center"}
          color="black"
          fontSize={{ lg: "20px", xs: "16px" }}
          className="leading-relaxed text-gray-700"
        >
          Expanding into the UAE or GCC requires deep local knowledge and
          strategic guidance. Forest provides invaluable insights, practical
          support, and hands-on engagement to help businesses grow sustainably.
        </Typography>
      </div>

      {/* Grid Section */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl w-full">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-[#102C1C] p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow flex flex-col gap-4"
          >
            <Typography
              fontFamily={"AT Regular"}
              color="#FFD700"
              fontSize={{ lg: "26px", xs: "22px" }}
            >
              {item.title}
            </Typography>
            <Typography
              fontFamily={"IT Light"}
              fontSize={{ lg: "16px", xs: "14px" }}
              className="text-gray-200 leading-relaxed"
            >
              {item.desc}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MMarket;
