import React from 'react';

const FAQSection: React.FC = () => {
  return (
    <section className="w-screen min-h-screen relative bg-[#2B0032] flex items-center justify-center">
      <svg
        width="1728"
        height="1288"
        viewBox="0 0 1728 1288"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
      >
        <g clipPath="url(#clip0_1_533)">
          <rect width="1728" height="1288" fill="#2B0032" />
          <path
            d="M793 1225C573.371 1251.19 -15 1339 -15 1339H793H1727.5V1158C1727.5 1158 1402.49 1169.32 1211 1181.5C1019.51 1193.68 1012.63 1198.81 793 1225Z"
            fill="#24002A"
          />
          <path
            d="M934.5 1173C1154.13 1199.19 1742.5 1287 1742.5 1287H934.5H0V1106C0 1106 325.011 1117.32 516.5 1129.5C707.989 1141.68 714.871 1146.81 934.5 1173Z"
            fill="#19021D"
          />
          <text
            fill="#62FF00"
            xmlSpace="preserve"
            style={{ whiteSpace: 'pre' }}
            fontFamily="Hanuman"
            fontSize="96"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="453.047" y="97.9375">
              Frequently Asked{' '}
            </tspan>
            <tspan x="635.859" y="238.938">
              Questions
            </tspan>
          </text>
        </g>
        <defs>
          <clipPath id="clip0_1_533">
            <rect width="1728" height="1288" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
};

export default FAQSection;
