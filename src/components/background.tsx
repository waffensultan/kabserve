import React from "react";

const Background: React.FC = () => (
    <div className="fixed inset-0 -z-10 bg-[#11291d]">
        {/* Green radial gradient */}
        <div
            className="absolute left-[-20%] top-[30%] w-[60vw] h-[60vw] rounded-full"
            style={{
                background:
                    "radial-gradient(circle, #255F38 0%, transparent 70%)",
                filter: "blur(40px)",
            }}
        />
        {/* Yellow radial gradient */}
        <div
            className="absolute right-[-15%] top-[-30%] w-[50vw] h-[50vw] rounded-full"
            style={{
                background:
                    "radial-gradient(circle, #F5BF04 0%, transparent 60%)",
                filter: "blur(100px)",
            }}
        />
    </div>
);

export default Background;
