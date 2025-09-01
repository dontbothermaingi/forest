import { Typography } from "@mui/material";
import { motion } from "framer-motion";

function DPortofolio() {
  const projects = [
    {
      title: "Medical Technology",
      image: "/Medical.jpg",
      desc: "An American company leading in cellular reconstruction science needed investment, structure, and partners in both research and hospitals. Forest guided them into the UAE, where their science is now deployed as a testament to the UAE’s global leadership.",
    },
    {
      title: "Laundry Service",
      image: "/Laundry.jpg",
      desc: "We invested in the world’s largest laundry services company and introduced them to the UAE as they expanded from Europe to a global footprint. Our guidance supported facilities setup, marketing, and partnership strategy for local success.",
    },
    {
      title: "Logistics",
      image: "/Logistics.jpg",
      desc: "A UK logistics company leveraged Forest’s expertise and market knowledge to partner with a major airline supplier, leading to a new venture and exciting service introduction into the UAE market.",
    },
    {
      title: "Real Estate",
      image: "/Real1.jpg",
      desc: "Forest Investment’s real estate portfolio spans commercial and residential projects, including land and associated investments, showcasing a balanced and sustainable approach.",
    },
    {
      title: "Fire Systems",
      image: "/fire.jpg",
      desc: "Forest assisted a successful Russian fire detection and response company with their first expansion outside their homeland, supporting strategic entry into the UAE.",
    },
  ];

  return (
    <div className="bg-[#2C3A2E] flex w-full py-16 px-6 lg:px-12">
      {/* Left Side - Intro */}
      <div className="w-1/2 sticky top-20 h-fit px-6 lg:px-10 flex flex-col gap-6 self-start">
        <Typography color="#FFD700" fontFamily={"AT Regular"} fontSize={{ lg: "20px" }}>
          Portfolio
        </Typography>
        <Typography color="white" fontFamily={"IT Medium"} fontSize={{ lg: "60px" }} lineHeight={1.1}>
          Selected Investments
        </Typography>
        <Typography
          color="white"
          fontFamily={"IT Light"}
          fontSize={{ lg: "18px" }}
          className="leading-relaxed text-gray-200"
        >
          Our portfolio showcases a carefully curated selection of projects and investments that reflect Forest’s
          strategic vision, local market expertise, and commitment to long-term growth. Each initiative demonstrates how
          we partner with businesses to navigate challenges, capitalize on opportunities, and deliver measurable value.
        </Typography>
      </div>

      {/* Right Side - Projects */}
      <div className="w-full lg:w-1/2 flex flex-col items-center gap-32 h-[450vh]">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`bg-[#2C3A2E] sticky top-${15 + i * 10} h-[55vh] w-full sm:w-4/5 rounded-2xl shadow-lg border border-white text-white p-6 sm:p-10 flex flex-col gap-5`}
          >
            <Typography color="#FFD700" fontFamily={"IT Medium"} fontSize={{ lg: "30px" }}>
              {proj.title}
            </Typography>
            <div
              className="w-full h-72 bg-cover bg-center rounded-2xl transform transition-transform duration-500 hover:scale-[1.03]"
              style={{ backgroundImage: `url(${proj.image})` }}
            />
            <Typography
              fontFamily={"IT Light"}
              fontSize={{ lg: "16px" }}
              color="white"
              className="text-gray-200 leading-relaxed"
            >
              {proj.desc}
            </Typography>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default DPortofolio;
