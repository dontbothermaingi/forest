import { Typography } from "@mui/material";

function MFeedBack() {
  const reviews = [
    `"Forests Investment's dedication to bringing our cutting-edge technologies to the UAE market is truly commendable. Their commitment to regulatory compliance, helping site our new company, and facilitating critical local introductions reflects their expertise in identifying market opportunities aligned with emerging technologies."`,
    `"Forests Investment has been an incredible partner in our real estate journey. Their dedication to understanding our needs and delivering personalised solutions sets them apart. They not only helped us find the perfect property but also offered invaluable insights into market trends."`,
    `"Working with Forests Investment and their UK subsidiary, Side by Side Partners, has been a game changer for our company. Their support in planning for future demands and tailoring solutions aligned with our priorities has been instrumental in our success. Their service commitment is not just a promise but a reality grateful for the partnership."`,
  ];

  return (
    <div className="bg-white py-20 px-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
        <Typography
          color="#355E3B"
          fontFamily={"AT Regular"}
          fontSize={{ lg: "64px", xs: "36px" }}
          lineHeight={1.1}
        >
          Clients Reviews
        </Typography>
        <Typography
          color="black"
          textAlign="center"
          fontFamily={"IT Light"}
          fontSize={{ lg: "18px", xs: "13px" }}
          className="leading-relaxed text-gray-700"
        >
          We believe success is built on strong relationships. Our clients’ feedback reflects our collaborative, transparent approach and reminds us that every achievement stems from trust and shared vision
        </Typography>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
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
            fontSize={{ lg: "16px", xs: "14px" }}
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

export default MFeedBack;
