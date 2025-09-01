import { Typography } from "@mui/material";

function MPortofolio() {
  const projects = [
    {
      title: "Medical Technology",
      img: "/Medical.jpg",
      desc: "An American company leading in high technology implementation for cellular reconstruction science needed instructions, investment, structure and partners in both research and hospitals. Forest guided and advised this high profile to move to the UAE where their science will be deployed as another example of the Global leadership of the UAE."
    },
    {
      title: "Laundry Service",
      img: "/Laundry.jpg",
      desc: "We invested in the world’s largest laundry services company and introduced them to the UAE as it expanded from Europe to a worldwide footprint. Our guidance supports establishing facilities, introduction, marketing and partnership strategy for local success."
    },
    {
      title: "Logistics",
      img: "/Logistics.jpg",
      desc: "A UK company specialising in logistics used Forest’s expertise and market knowledge to meet and join a major airline supplier which led to a venture to introduce this exciting new service into the UAE."
    },
    {
      title: "Real Estate",
      img: "/Real1.jpg",
      desc: "Forest Investment's real estate expertise spans commercial and residential domains, encompassing land and associated investments."
    },
    {
      title: "Fire Systems",
      img: "/Fire1.jpg",
      desc: "Forest assisted a very successful Russian wide-area fire detection and response company in their planning for their first expansion beyond their native homeland."
    }
  ];

  return (
    <div className="bg-[#2C3A2E] flex flex-col w-full py-16 px-6 lg:px-20">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
        <Typography
          color="#FFD700"
          fontFamily={"AT Regular"}
          fontSize={{ lg: "22px", xs: "18px" }}
        >
          Portfolio
        </Typography>
        <Typography
          color="white"
          fontFamily={"IT Medium"}
          fontSize={{ lg: "56px", xs: "32px" }}
        >
          Selected Investments
        </Typography>
        <Typography
          color="white"
          fontFamily={"IT Light"}
          fontSize={{ lg: "18px", xs: "16px" }}
          className="leading-relaxed text-gray-200"
        >
          Our portfolio showcases a carefully curated selection of projects and
          investments that reflect Forest’s strategic vision, local market
          expertise, and commitment to long-term growth. Each initiative
          demonstrates how we partner with businesses and entrepreneurs to
          navigate challenges, capitalize on opportunities, and achieve
          sustainable results.
        </Typography>
      </div>

      {/* Projects */}
      <div className="flex flex-col items-center gap-16">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-[#324334] max-w-4xl w-full rounded-2xl shadow-lg border border-white/20 text-white p-6 sm:p-10 flex flex-col gap-6 transition-transform hover:scale-[1.02] hover:shadow-2xl"
          >
            <Typography
              color="#FFD700"
              fontFamily={"IT Medium"}
              fontSize={{ lg: "28px", xs: "22px" }}
            >
              {p.title}
            </Typography>
            <div
              className="w-full aspect-video bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: `url(${p.img})` }}
            />
            <Typography
              fontFamily={"IT Light"}
              fontSize={{ lg: "16px", xs: "14px" }}
              color="white"
              className="leading-relaxed text-gray-200"
            >
              {p.desc}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MPortofolio;
