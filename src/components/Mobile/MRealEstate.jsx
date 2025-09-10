import { Typography } from "@mui/material";

function MrealEstate() {
  const highlights = [
    {
      title: "Exclusive Properties & Confidentiality",
      desc: "From Dubai’s most sought-after homes to off-market commercial investments, Amana Homes maintains the highest standards of discretion. Our approach ensures lasting client relationships and absolute confidentiality in every transaction.",
    },
    {
      title: "Tailored Services & Strong ROI",
      desc: "Whether acquiring a family home, off-plan units, or large-scale commercial properties, we provide carefully structured packages designed to meet investors’ objectives and maximize returns.",
    },
    {
      title: "Aligned Interests & Dedicated Support",
      desc: "Our dedicated team actively promotes exclusively listed properties, ensuring our interests align with our clients’ goals. From start to finish, we offer hands-on support and local expertise to deliver premium outcomes.",
    },
  ];

  return (
    <div className="flex flex-col px-6 py-16 gap-16 bg-[#2C3A2E] text-white">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <Typography
            fontFamily={"AT Regular"}
            fontSize={{ lg: "48px", xs: "35px" }}
            color="#FFD700"
          >
            Real Estate Expertise
          </Typography>
          <Typography
            fontFamily={"IT Light"}
            fontSize={{ lg: "18px", xs: "13px" }}
            className="leading-relaxed text-gray-200"
          >
            Through Amana Homes, our real estate arm, Forest offers premium expertise in residential and commercial property across Dubai and the UAE, blending local knowledge with a client-focused approach to deliver results.
          </Typography>
        </div>

        {/* Hero Image */}
        <div className="w-full">
          <div
            className="bg-[url('/Real1.jpg')] bg-cover bg-center aspect-[16/9] w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Highlights */}
        <div className="flex flex-col gap-12">
          {highlights.map((item, i) => (
            <div key={i} className="flex flex-col gap-4">
              <Typography
                fontFamily={"IT Medium"}
                fontSize={{ lg: "22px", xs: "18px" }}
                color="#FFD700"
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
              {i < highlights.length - 1 && (
                <div className="border-t border-[#FFD700]/40 mt-6" />
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-[#FFD700] text-[#2C3A2E] px-6 py-3 rounded-xl font-medium shadow-md hover:bg-yellow-400 transition-colors">
            Visit Amana Homes
          </button>
        </div>
      </div>
    </div>
  );
}

export default MrealEstate;
