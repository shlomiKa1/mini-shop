import type { HeartIconProps } from "../types/product";

const HeartIcon = ({ filled }: HeartIconProps) => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 22 22"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20.5s-7.5-4.6-10-9.3C0.3 7.8 2 4 5.8 4c2.1 0 3.6 1.2 4.7 2.8C11.6 5.2 13.1 4 15.2 4 19 4 20.7 7.8 19 11.2 17.5 15.9 12 20.5 12 20.5z" />
  </svg>
);

export default HeartIcon;
