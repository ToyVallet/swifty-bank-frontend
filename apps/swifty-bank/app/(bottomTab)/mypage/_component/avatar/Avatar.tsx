import Image from "next/image";
import clsx from "clsx";
import styles from "./avatar.css";

interface AvatarProps {
  src?: string;
  size?: 'small' | 'large';
  alt?: string;
  className?: string;
}

export function Avatar({
  src,
  size = 'small',
  alt = 'profile image',
  className
}: AvatarProps) {
  const currentSize = size === 'small' ? 110 : 180;
  return (
    <>
      {src && <Image
        src={src}
        width={currentSize}
        height={currentSize}
        alt={alt}
        className={clsx(styles.avatar, className)}
      />}
      {!src && <div
        className={clsx(
          styles.dummy,
          styles[size],
          className
        )}
      />}
    </>
  );
}
