import clsx from "clsx";
import Image from "next/image";
import styles from "./Avatar.css";

interface AvatarProps {
  imageUrl: string;
  className?: string;
  alt?: string;
}

export default function Avatar({ imageUrl, className, alt }: AvatarProps) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <Image
        width={57}
        height={57}
        src={imageUrl}
        quality={100}
        alt={alt ?? ""}
      />
    </div>
  );
}
