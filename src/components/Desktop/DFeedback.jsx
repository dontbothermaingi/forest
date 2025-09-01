import { Typography } from "@mui/material";

function DFeedBack() {
  const reviews = [
    `Forests Investment's dedication to bringing our cutting-edge technologies to the UAE market is truly commendable. Their commitment to regulatory compliance, helping site our new company, and facilitating critical local introductions reflects their expertise in identifying market opportunities aligned with emerging technologies.`,
    `Forests Investment has been an incredible partner in our real estate journey. Their dedication to understanding our needs and delivering personalised solutions sets them apart. They not only helped us find the perfect property but also offered invaluable insights into the market trends.`,
    `Working with Forests Investment and their UK subsidiary, Side by Side Partners, has been a game changer for our company. Their support in planning for future demands and tailoring solutions aligned with our priorities has been instrumental in our success. Their service commitment is not just a promise but a reality grateful for the partnership.`,
  ];

  return (
    <div className="bg-white py-24 px-10">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center space-y-8 mb-20">
        <Typography
          color="#355E3B"
          fontFamily={"AT Regular"}
          fontSize={{ lg: "70px", md: "50px", sm: "36px" }}
          lineHeight={1.1}
        >
          Clients Reviews
        </Typography>
        <Typography
          color="black"
          textAlign="center"
          fontFamily={"IT Light"}
          fontSize={{ lg: "20px", sm: "16px" }}
          className="leading-relaxed text-gray-700"
        >
          We believe that lasting success is built on strong relationships. Our
          clients’ feedback speaks to the way we work collaborative,
          transparent, and always focused on creating meaningful outcomes.
          Their words remind us that behind every achievement is a partnership
          rooted in trust and shared vision.
        </Typography>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-2 animate-fadeIn"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <span className="text-5xl text-[#FFD700] font-serif leading-none">
              “
            </span>
            <Typography
              color="black"
              fontFamily={"IT Light"}
              fontSize={{ lg: "16px", sm: "14px" }}
              className="leading-relaxed text-gray-800 italic relative z-10"
            >
              {review}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DFeedBack;
