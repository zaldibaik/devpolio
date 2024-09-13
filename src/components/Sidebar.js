import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const navItems = [
    { to: "/", icon: HomeIcon },
    { to: "/experience", icon: ExperienceIcon },
    { to: "/MySkills", icon: SkillsIcon }, // Perubahan dilakukan di sini
    { to: "/projects", icon: ProjectsIcon },
    { to: "/contact", icon: ContactIcon },
  ];

  return (
    <div>
      {/* Sidebar for Desktop */}
      <div className="hidden md:flex fixed md:w-45 flex-col justify-center md:justify-end text-white md:pt-32">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="py-4 hover:bg-blue-100 text-center flex justify-center w-25"
          >
            <item.icon />
          </Link>
        ))}
      </div>

      {/* Navbar for Mobile */}
      <div className="md:hidden fixed bottom-0 w-full flex justify-around text-white py-4">
        {navItems.map((item, index) => (
          <Link key={index} to={item.to} className="flex justify-center">
            <item.icon />
          </Link>
        ))}
      </div>
    </div>
  );
};

// Icon components
const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="31"
    viewBox="0 0 36 31"
    fill="none"
  >
    <path
      d="M33 28.4167V12.9167L18 2.58333L3 12.9167V28.4167H12V16.7917H24V28.4167H33Z"
      fill="#1229FF"
      stroke="#1229FF"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M18 28.4167V21.9583"
      stroke="#1229FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExperienceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="37"
    viewBox="0 0 40 37"
    fill="none"
  >
    <path
      d="M4.21355 32.4526C4.21355 32.7799 4.50884 33.0452 4.87313 33.0452L35.2124 33.0453C35.5766 33.0453 35.872 32.78 35.872 32.4527V31.745C35.8871 31.5317 35.918 30.4672 35.1595 29.2905C34.6811 28.5485 33.987 27.9074 33.0961 27.3853C32.0185 26.7536 30.6475 26.2959 28.9894 26.0203C28.9771 26.0188 27.7476 25.8681 26.488 25.5705C24.2946 25.0523 24.1029 24.5936 24.1016 24.5892C24.0887 24.5438 24.07 24.5003 24.0461 24.4594C24.0282 24.3738 23.9839 24.0518 24.0686 23.1891C24.2838 20.9979 25.5545 19.7029 26.5755 18.6625C26.8975 18.3343 27.2015 18.0244 27.4358 17.7204C28.446 16.4092 28.5398 14.9183 28.544 14.8259C28.544 14.6386 28.5208 14.4847 28.471 14.342C28.3719 14.0565 28.1853 13.8786 28.049 13.7487L28.0481 13.7478C28.0138 13.7151 27.9814 13.6841 27.9549 13.6557C27.9448 13.6448 27.9179 13.616 27.9424 13.4684C28.032 12.9251 28.0859 12.4701 28.1117 12.0367C28.1577 11.2645 28.1936 10.1096 27.9783 8.98565C27.9517 8.79372 27.906 8.59099 27.835 8.34948C27.6075 7.57552 27.242 6.91382 26.7341 6.3677C26.6468 6.27981 24.5235 4.21057 18.3595 3.78601C17.5071 3.72731 16.6645 3.75893 15.8351 3.79814C15.6352 3.80728 15.3615 3.81983 15.1053 3.88123C14.4689 4.03372 14.299 4.40685 14.2545 4.61568C14.1805 4.96158 14.3105 5.23066 14.3964 5.40874C14.4089 5.43456 14.4243 5.46651 14.3974 5.54964C14.2543 5.75461 14.0292 5.93941 13.7997 6.11448C13.7334 6.16662 12.1877 7.39942 12.1027 9.00986C11.8735 10.2346 11.8909 12.1429 12.1619 13.4618C12.1776 13.5346 12.2009 13.6425 12.1631 13.7153C11.8717 13.9569 11.5414 14.2307 11.5422 14.8555C11.5457 14.9183 11.6395 16.4092 12.6498 17.7204C12.8838 18.0241 13.1876 18.3339 13.5094 18.6618L13.5101 18.6625C14.5311 19.7029 15.8017 20.9979 16.017 23.189C16.1016 24.0517 16.0573 24.3738 16.0394 24.4593C16.0155 24.5002 15.9968 24.5438 15.984 24.5891C15.9826 24.5936 15.7916 25.0507 13.6081 25.5679C12.3485 25.8663 11.1084 26.0188 11.0714 26.0237C9.45995 26.2753 8.09744 26.7216 7.02171 27.35C6.13389 27.8687 5.4384 28.5109 4.95453 29.2587C4.18143 30.4537 4.20233 31.5419 4.21355 31.7406V32.4526Z"
      fill="#1229FF"
      stroke="#1229FF"
      stroke-width="2"
      stroke-linejoin="round"
    />
  </svg>
);

const SkillsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="45"
    viewBox="0 0 45 45"
    fill="none"
  >
    <g filter="url(#filter0_d_35_221)">
      <path
        d="M18.4897 35C17.6846 32.3745 16.4701 30.4172 14.846 29.1282C12.4099 27.1945 8.53925 28.3963 7.10948 26.4019C5.6797 24.4074 8.1112 20.7396 8.96444 18.5754C9.81768 16.4114 5.69404 15.6461 6.17547 15.0317C6.49644 14.6222 8.58024 13.4402 12.4269 11.486C13.5199 5.25286 17.557 2.13629 24.5384 2.13629C35.0104 2.13629 39 11.0144 39 16.6611C39 22.3079 34.1691 28.3913 27.2874 29.7029C26.672 30.5991 27.5596 32.3648 29.95 35"
        stroke="#1229FF"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.8705 10.7629C18.3338 12.845 18.4935 14.3071 19.3497 15.149C20.2059 15.991 21.6651 16.5415 23.7274 16.8007C23.2595 19.4863 23.83 20.7462 25.4388 20.5804C27.0476 20.4146 28.0142 19.746 28.3388 18.5749C30.8531 19.2815 32.2158 18.6901 32.4268 16.8007C32.7436 13.9665 31.2152 11.7057 30.5887 11.7057C29.9621 11.7057 28.3388 11.6294 28.3388 10.7629C28.3388 9.89629 26.4425 9.40671 24.7311 9.40671C23.0198 9.40671 24.0497 8.25311 21.6997 8.70893C20.133 9.01275 19.19 9.69739 18.8705 10.7629Z"
        fill="#000AFF"
        stroke="#1229FF"
        stroke-width="3"
        stroke-linejoin="round"
      />
      <path
        d="M27.9084 19.8005C27.073 20.3189 25.9264 21.181 25.4437 21.8545C24.2368 23.5384 23.2579 24.5636 23.0437 25.6405"
        stroke="#1229FF"
        stroke-width="3"
        stroke-linecap="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_35_221"
        x="0.63623"
        y="0.636292"
        width="43.8638"
        height="43.8641"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_35_221"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_35_221"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const ProjectsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
  >
    <path
      d="M29.1666 16.7708V10.2083L22.6041 2.91667H7.29159C6.48617 2.91667 5.83325 3.56959 5.83325 4.37501V30.625C5.83325 31.4304 6.48617 32.0833 7.29159 32.0833H16.0416"
      stroke="#1229FF"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.9583 27.7083L23.3333 31.3542L29.8958 23.3333"
      stroke="#1229FF"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.875 2.91667V10.2083H29.1667"
      stroke="#1229FF"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ContactIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="41"
    height="34"
    viewBox="0 0 41 34"
    fill="none"
  >
    <path
      d="M35.6868 14.5963C35.9027 13.3951 35.8319 12.1654 35.4743 10.983C35.0021 9.42097 34.0293 7.94168 32.5563 6.72016C31.0833 5.49865 29.2995 4.69206 27.416 4.30039C25.9901 4.0039 24.5071 3.94517 23.0586 4.12423"
      stroke="#1229FF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29.2036 14.0275C29.4349 12.7407 28.9533 11.3828 27.7588 10.3923C26.5643 9.40178 24.9268 9.00235 23.3752 9.19417"
      stroke="#1229FF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.279 6.22925C12.8997 6.22925 13.4715 6.50835 13.7726 6.95831L15.8624 10.0798C16.1359 10.4885 16.1488 10.9829 15.8967 11.401L13.8836 14.7398C13.8836 14.7398 14.467 17.2271 16.9085 19.2518C19.3501 21.2765 22.3394 21.7519 22.3394 21.7519L26.365 20.0828C26.8696 19.8736 27.4661 19.8844 27.9592 20.1117L31.734 21.8521C32.276 22.102 32.6122 22.5759 32.6122 23.0903V26.684C32.6122 28.5141 30.5623 29.8359 28.4712 29.2508C24.1766 28.0491 17.51 25.761 13.2847 22.257C9.05918 18.753 6.30005 13.2247 4.85092 9.66323C4.14536 7.92916 5.73931 6.22925 7.94618 6.22925H12.279Z"
      fill="#1229FF"
      stroke="#1229FF"
      stroke-width="2"
      stroke-linejoin="round"
    />
  </svg>
);

export default Sidebar;
