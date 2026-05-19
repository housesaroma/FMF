import ellipse23 from "./ellipse-23.png";
import frame13 from "./frame-13.png";
import frame15 from "./frame-15.png";
import frame1049 from "./frame-1049.png";
import frame1073 from "./frame-1073.png";
import frame1079 from "./frame-1079.png";
import frame1091 from "./frame-1091.png";
import frame1094 from "./frame-1094.png";
import frame1097 from "./frame-1097.png";
import frame1099 from "./frame-1099.png";
import frame1100 from "./frame-1100.png";
import frame1103 from "./frame-1103.png";
import frame1104 from "./frame-1104.png";
import frame1105 from "./frame-1105.png";
import frame1106 from "./frame-1106.png";
import frame1110 from "./frame-1110.png";
import frame277130162 from "./frame-277130162.png";
import frame277130189 from "./frame-277130189.png";
import image from "./image.png";
import rectangle35 from "./rectangle-35.png";
import rectangle45 from "./rectangle-45.png";
import vector44 from "./vector-44.png";
import vector47 from "./vector-47.png";

type Layer = {
  src: string;
  alt: string;
  className: string;
};

const layers: Layer[] = [
  {
    src: frame1099,
    alt: "Frame",
    className: "absolute top-0 left-0 w-[375px] h-[983px]",
  },
  {
    src: vector44,
    alt: "Vector",
    className: "absolute top-[1954px] left-0 w-[375px] h-[1939px]",
  },
  {
    src: frame1091,
    alt: "Frame",
    className: "absolute top-[5854px] left-4 w-[359px] h-[770px]",
  },
  {
    src: frame1094,
    alt: "Frame",
    className: "absolute top-[6688px] left-4 w-[343px] h-[1001px]",
  },
  {
    src: rectangle35,
    alt: "Rectangle",
    className: "absolute top-[5150px] left-0 w-[375px] h-[640px]",
  },
  {
    src: image,
    alt: "Img",
    className: "absolute top-[4964px] left-[17px] w-[294px] h-[170px]",
  },
  {
    src: frame1103,
    alt: "Frame",
    className: "absolute top-[5493px] left-4 w-[343px] h-[281px]",
  },
  {
    src: frame1105,
    alt: "Frame",
    className: "absolute top-[3488px] left-4 w-[343px] h-[1407px]",
  },
  {
    src: frame1073,
    alt: "Frame",
    className: "absolute top-[2853px] left-0 w-[375px] h-72",
  },
  {
    src: frame1106,
    alt: "Frame",
    className: "absolute top-[3158px] left-4 w-[343px] h-[266px]",
  },
  {
    src: frame13,
    alt: "Frame",
    className: "absolute top-0 left-0 w-[375px] h-14",
  },
  {
    src: frame1100,
    alt: "Frame",
    className: "absolute top-24 left-4 w-[343px] h-[314px]",
  },
  {
    src: frame1097,
    alt: "Frame",
    className: "absolute top-[845px] left-4 w-[343px] h-[98px]",
  },
  {
    src: frame277130189,
    alt: "Frame",
    className: "absolute top-[1023px] left-4 w-[343px] h-[769px]",
  },
  {
    src: frame1104,
    alt: "Frame",
    className: "absolute top-[1872px] left-4 w-[343px] h-[191px]",
  },
  {
    src: frame1079,
    alt: "Frame",
    className: "absolute top-[2022px] left-0 w-[375px] h-[1179px]",
  },
  {
    src: frame15,
    alt: "Frame",
    className: "absolute top-[2470px] left-4 w-[327px] h-[303px]",
  },
  {
    src: frame1049,
    alt: "Frame",
    className: "absolute top-[7753px] left-4 w-[343px] h-[349px]",
  },
  {
    src: frame1110,
    alt: "Frame",
    className: "absolute top-[8845px] left-4 w-[343px] h-[257px]",
  },
  {
    src: rectangle45,
    alt: "Rectangle",
    className: "absolute top-[2486px] right-0 w-8 h-[295px]",
  },
  {
    src: ellipse23,
    alt: "Ellipse",
    className: "absolute top-[2626px] left-[331px] w-10 h-10",
  },
  {
    src: vector47,
    alt: "Vector",
    className: "absolute top-[2638px] left-[348px] w-2.5 h-[17px]",
  },
  {
    src: frame277130162,
    alt: "Frame",
    className: "absolute top-[8166px] left-4 w-[343px] h-[639px]",
  },
];

export const JointMob = (): JSX.Element => {
  return (
    <main
      className="bg-[#f3f3f3] w-full min-w-[375px] min-h-[9102px] relative overflow-x-hidden"
      aria-label="JointMob page"
    >
      {layers.map((layer, index) => (
        <img
          key={`${layer.alt}-${index}`}
          className={layer.className}
          alt={layer.alt}
          src={layer.src}
          loading={index > 3 ? "lazy" : "eager"}
          decoding="async"
        />
      ))}
    </main>
  );
};

export default JointMob;
