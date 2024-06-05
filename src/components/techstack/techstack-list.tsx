import { IconRevealMatrix } from "../ui/icon-reveal-matrix";
import { IconKeys, Icons } from "../ui/icons";

export default function TechStack() {
  const iconProps = {
    className: "size-14 bg-black",
  };

  return (
    <section className="grid grid-cols-3 gap-1">
      {stack.map((tech) => (
        <IconRevealMatrix
          title={tech.title}
          icon={Icons[tech.icon](iconProps)}
          colors={tech.colors}
          key={tech.title}
        />
      ))}
    </section>
  );
}

type TechStack = {
  title: string;
  icon: IconKeys;
  colors: number[][];
}[];

const stack: TechStack = [
  {
    title: "JavaScript",
    icon: "javascript",
    colors: [[247, 223, 30]],
  },
  {
    title: "HTML",
    icon: "html",
    colors: [[228, 77, 38]],
  },
  {
    title: "CSS",
    icon: "css",
    colors: [
      [38, 77, 228],
      [41, 101, 241],
    ],
  },
];
