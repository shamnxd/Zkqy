import Image from "next/image";

type LogoProps = {
  className?: string;
  /** Use white mark on dark/orange backgrounds; orange mark elsewhere */
  variant?: "orange" | "white";
  alt?: string;
};

export default function Logo({
  className = "w-8 h-8",
  variant = "orange",
  alt = "Zkqy logo",
  priority = false,
}: LogoProps & { priority?: boolean }) {
  const src = variant === "white" ? "/logo-white.png" : "/logo.png";

  return (
    <Image
      src={src}
      alt={alt}
      width={32}
      height={32}
      className={`object-contain ${className}`}
      priority={priority}
    />
  );
}
