import Image from "next/image";

interface AvatarProps {
  imageUrl: string;
}

export default function Avatar({ imageUrl }: AvatarProps) {
  return <Image width={100} height={100} src={imageUrl} alt="" />;
}
