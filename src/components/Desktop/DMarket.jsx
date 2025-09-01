import { Typography } from "@mui/material";
import { motion } from "framer-motion";

function DMarket() {
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
    <div className="bg-[#FAFAFA] w-full py-24 px-12 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
        <Typography
          color="#355E3B"
          fontFamily={"IT Medium"}
          fontSize={{ lg: "54px" }}
        >
          Insights & Hands-On Support
        </Typography>
        <Typography
          fontFamily={"AT Regular"}
          textAlign="center"
          color="black"
          fontSize={{ lg: "20px" }}
          className="leading-relaxed text-gray-700"
        >
          Expanding into the UAE or GCC requires deep local knowledge and
          strategic guidance. Forest provides invaluable insights, practical
          support, and hands-on engagement to help businesses grow sustainably.
        </Typography>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-3 gap-10 max-w-6xl w-full">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#102C1C] rounded-2xl shadow-md p-10 flex flex-col gap-4 hover:shadow-xl hover:-translate-y-2 transition-all"
          >
            <Typography
              fontFamily={"AT Regular"}
              color="#FFD700"
              fontSize={{ lg: "28px" }}
            >
              {item.title}
            </Typography>
            <Typography
              fontFamily={"IT Light"}
              fontSize={{ lg: "16px" }}
              className="text-gray-200 leading-relaxed"
            >
              {item.desc}
            </Typography>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default DMarket;
