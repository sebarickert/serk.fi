type LogoProps = {
  size?: number;
};

const defaultSize = 48;

export const Logo = ({ size = defaultSize }: LogoProps) => {
  return (
    <svg
      width={size}
      viewBox="0 0 500 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-black dark:fill-white"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M253.499 144.047C263.208 148.905 272.167 155.013 280.376 162.372C289.987 170.38 297.677 180.471 303.444 192.644C304.466 194.802 305.398 197.041 306.239 199.36C306.978 201.396 307.646 203.495 308.245 205.656C310.725 214.604 312.007 224.617 312.09 235.695L387.321 353.66H500L396.598 206.397C403.459 204.451 409.963 202.046 416.111 199.182C435.304 190.241 450.196 177.823 460.786 161.928C471.706 146.034 477.166 127.49 477.166 106.297C477.166 85.1035 471.872 66.5595 461.282 50.6647C450.692 34.7699 436.132 22.3521 417.6 13.4112C399.068 4.47041 377.558 0 353.07 0H161.926L207.443 71.5267H337.186C350.753 71.5267 361.012 74.8381 367.961 81.4609C375.242 88.0838 378.882 96.859 378.882 107.787C378.882 118.714 375.242 127.49 367.961 134.113C361.012 140.735 350.753 144.047 337.186 144.047H253.499Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M144.706 0.789551C126.407 2.39694 110.017 6.45838 95.5363 12.9739C76.313 21.3028 61.4149 33.4759 50.842 49.493C40.2692 65.5102 34.9828 84.5707 34.9828 106.674C34.9828 123.653 37.8663 138.068 43.6333 149.921C49.4003 161.453 56.9294 171.224 66.2207 179.232C75.8324 186.921 86.245 193.488 97.4587 198.934C108.672 204.379 119.886 209.024 131.1 212.868C142.634 216.713 153.046 220.557 162.337 224.401C171.949 227.925 179.639 232.089 185.406 236.894C191.173 241.379 194.056 247.145 194.056 254.193C194.056 261.24 190.692 266.846 183.964 271.011C177.236 274.855 167.304 276.777 154.168 276.777H34.9828L0 353.66H66.0594H146.478C191.653 353.66 226.576 344.21 251.246 325.309C276.236 306.089 288.731 279.02 288.731 244.102C288.731 226.803 285.848 212.068 280.081 199.895C274.314 187.721 266.624 177.631 257.013 169.622C247.721 161.293 237.469 154.566 226.255 149.44C215.042 143.995 203.668 139.35 192.134 135.505C180.92 131.661 170.507 127.977 160.896 124.454C151.604 120.93 144.075 117.086 138.308 112.921C132.541 108.436 129.658 102.83 129.658 96.1031C129.658 89.6962 131.716 71.6986 163.299 71.6986H176.83H189.838L144.706 0.789551Z"
      />
    </svg>
  );
};