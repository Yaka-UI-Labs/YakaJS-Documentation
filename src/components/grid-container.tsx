import clsx from "clsx";

export default function GridContainer({
  children,
  className,
  direction = "full",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "full" | "to-left" | "to-right";
}) {
  let directionClasses = "";
  switch (direction) {
    case "full":
      directionClasses = "before:-left-[100vw] after:-left-[100vw]";
      break;
    case "to-left":
      directionClasses = "before:right-0 after:right-0";
      break;
    case "to-right":
      directionClasses = "before:left-0 after:left-0";
      break;
  }

  return (
    <div
      className={clsx(
        className,
        "relative",
        "before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10",
        "after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10",
        directionClasses,
      )}
    >
      {children}
    </div>
  );
}
