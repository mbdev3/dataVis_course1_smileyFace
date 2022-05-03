export const BackgroundCircle = ({radius,strokeWidth}) => (
  <circle
    r={radius}
    fill={"#"+(0x1000000 + Math.random() * 0xffffff) .toString(16)
        .substr(1, 6)}
    stroke="black"
    stroke-width={strokeWidth}
  />
);