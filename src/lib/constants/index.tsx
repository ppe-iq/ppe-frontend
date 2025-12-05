import React from "react";

import { ToastClasses } from "./types";

export const toastClasses: ToastClasses = {
  className: "!rounded-[14px]",
};

export const SOCIAL_PLATFORMS: { icon: React.ReactNode; url: string }[] = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        key={1}
      >
        <g clipPath="url(#clip0_118_5271)">
          <path
            d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z"
            fill="#0A66C2"
          />
        </g>
        <defs>
          <clipPath id="clip0_118_5271">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    url: "https://linkedin.com",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_118_5272)">
          <path
            d="M24 12C24 5.37264 18.6274 0 12 0C5.37264 0 0 5.37264 0 12C0 17.6275 3.87456 22.3498 9.10128 23.6467V15.6672H6.62688V12H9.10128V10.4198C9.10128 6.33552 10.9498 4.4424 14.9597 4.4424C15.72 4.4424 17.0318 4.59168 17.5685 4.74048V8.06448C17.2853 8.03472 16.7933 8.01984 16.1822 8.01984C14.2147 8.01984 13.4544 8.76528 13.4544 10.703V12H17.3741L16.7006 15.6672H13.4544V23.9122C19.3963 23.1946 24.0005 18.1354 24.0005 12H24Z"
            fill="#0866FF"
          />
          <path
            d="M16.6988 15.6672L17.3722 12H13.4525V10.703C13.4525 8.76526 14.2128 8.01982 16.1804 8.01982C16.7914 8.01982 17.2834 8.0347 17.5666 8.06446V4.74046C17.03 4.59118 15.7181 4.44238 14.9578 4.44238C10.9479 4.44238 9.0994 6.3355 9.0994 10.4198V12H6.625V15.6672H9.0994V23.6467C10.0277 23.8771 10.9988 24 11.9981 24C12.4901 24 12.9754 23.9697 13.452 23.9121V15.6672H16.6983H16.6988Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_118_5272">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    url: "https://facebook.com",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.3263 1.90381H21.6998L14.3297 10.3273L23 21.7898H16.2112L10.894 14.8378L4.80995 21.7898H1.43443L9.31743 12.7799L1 1.90381H7.96111L12.7674 8.25814L18.3263 1.90381ZM17.1423 19.7706H19.0116L6.94539 3.81694H4.93946L17.1423 19.7706Z"
          fill="black"
        />
      </svg>
    ),
    url: "https://x.com",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_118_5274)">
          <path
            d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
            fill="#000100"
          />
          <path
            d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
            fill="#000100"
          />
          <path
            d="M19.8469 5.59239C19.8469 6.38926 19.2 7.03145 18.4078 7.03145C17.6109 7.03145 16.9688 6.38457 16.9688 5.59239C16.9688 4.79551 17.6156 4.15332 18.4078 4.15332C19.2 4.15332 19.8469 4.8002 19.8469 5.59239Z"
            fill="#000100"
          />
        </g>
        <defs>
          <clipPath id="clip0_118_5274">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    url: "https://instagram.com/",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_118_5275)">
          <path
            d="M23.5216 6.18541C23.3859 5.67482 23.1185 5.20883 22.7462 4.83407C22.3738 4.4593 21.9095 4.18891 21.3998 4.04996C19.5234 3.54541 12.0234 3.54541 12.0234 3.54541C12.0234 3.54541 4.52344 3.54541 2.64707 4.04996C2.13737 4.18891 1.6731 4.4593 1.30073 4.83407C0.928354 5.20883 0.660943 5.67482 0.525256 6.18541C0.0234376 8.06996 0.0234375 12 0.0234375 12C0.0234375 12 0.0234376 15.93 0.525256 17.8145C0.660943 18.3251 0.928354 18.7911 1.30073 19.1658C1.6731 19.5406 2.13737 19.811 2.64707 19.95C4.52344 20.4545 12.0234 20.4545 12.0234 20.4545C12.0234 20.4545 19.5234 20.4545 21.3998 19.95C21.9095 19.811 22.3738 19.5406 22.7462 19.1658C23.1185 18.7911 23.3859 18.3251 23.5216 17.8145C24.0234 15.93 24.0234 12 24.0234 12C24.0234 12 24.0234 8.06996 23.5216 6.18541Z"
            fill="#FF0302"
          />
          <path
            d="M9.57031 15.5689V8.43164L15.843 12.0003L9.57031 15.5689Z"
            fill="#FEFEFE"
          />
        </g>
        <defs>
          <clipPath id="clip0_118_5275">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    url: "https://youtube.com",
  },
];

export const INTEREST_OPTIONS = [
  { label: "Services", value: "services" },
  { label: "Training", value: "training" },
  { label: "Products", value: "products" },
  { label: "Partnership", value: "partnership" },
] as const;

export const categories: {
  title: string;
  href: string;
  imgUrl: string;
  description: string;
}[] = [
    {
      title: "Vibration Analysis",
      href: "/categories/vibration-analysis",
      imgUrl: "/images/categories/vibration-analysis.webp",
      description:
        "No matter the application or environment, PPE delivers advanced vibration analysis solutions. These tools help detect early faults and ensure smooth, reliable machinery performance.",
    },
    {
      title: "Laser Alignment",
      href: "/categories/laser-alignment",
      imgUrl: "/images/categories/laser-alignment.webp",
      description:
        "Across all equipment types and sectors, PPE provides precise laser alignment systems to minimize wear and maximize efficiency. Each tool ensures fast setup and accurate shaft positioning.",
    },
    {
      title: "Balancing",
      href: "/categories/balancing",
      imgUrl: "/images/categories/balancing.webp",
      description:
        "From fans to rotors, PPE provides precise balancing solutions to reduce vibration and extend machinery life. Our tools ensure smoother operation across all industries.",
    },
    {
      title: "Infrared Thermography",
      href: "/categories/infrared-thermography",
      imgUrl: "/images/categories/infrared-thermography.webp",
      description:
        "No matter your industry or application, PPE delivers reliable infrared thermography solutions for early fault detection. Each device offers intuitive operation and accurate thermal imaging.",
    },
    {
      title: "Ultrasound",
      href: "/categories/ultrasound",
      imgUrl: "/images/categories/ultrasound.webp",
      description:
        "Ultrasound technology lets you detect leaks, electrical faults, and mechanical issues early. PPE's solutions offer fast, accurate diagnostics for preventive maintenance.",
    },
    {
      title: "Lubrication Management",
      href: "/categories/lubrication-management",
      imgUrl: "/images/categories/lubrication-management.webp",
      description:
        "Proper lubrication is vital to machine longevity. PPE provides tools and systems to ensure the right lubricant is applied at the right time, improving performance and reducing wear.",
    },
    {
      title: "CMS Turbo Machinery",
      href: "/categories/cms-turbo-machinery",
      imgUrl: "/images/categories/cms-turbo-machinery.webp",
      description:
        "CMS Turbo Machinery systems deliver high-performance monitoring and diagnostics for rotating equipment, helping you maximize efficiency, reduce downtime, and extend machinery life.",
    },
    {
      title: "Motion Amplification",
      href: "/categories/motion-amplification",
      imgUrl: "/images/categories/motion-amplification.webp",
      description:
        "PPE's motion amplification solutions help you detect and address issues before they become major problems. Each tool ensures precise motion control and optimal performance.",
    },
  ];

export const services: {
  title: string;
  href: string;
  description: string;
  imgUrl: string;
}[] = [
    {
      title: "Vibration Analysis",
      href: "/services/vibration-analysis",
      imgUrl: "/images/services/vibration-analysis.jpg",
      description:
        "PPE provides advanced vibration analysis solutions to detect early faults and ensure smooth, reliable machinery performance.",
    },
    {
      title: "Laser Alignment",
      href: "/services/laser-alignment",
      imgUrl: "/images/services/laser-alignment.jpg",
      description:
        "PPE's laser alignment systems ensure fast setup and accurate shaft positioning across all equipment types and sectors.",
    },
    {
      title: "In-Site Balancing",
      href: "/services/in-site-balancing",
      imgUrl: "/images/services/in-site-balancing.jpg",
      description:
        "PPE's in-site balancing solutions help reduce vibration and extend machinery life by ensuring smooth operation across all industries.",
    },
    {
      title: "Motion Amplification",
      href: "/services/motion-amplification",
      imgUrl: "/images/services/motion-amplification.webp",
      description:
        "PPE's motion amplification solutions help you detect and address issues before they become major problems. Each tool ensures precise motion control and optimal performance.",
    },
  ];