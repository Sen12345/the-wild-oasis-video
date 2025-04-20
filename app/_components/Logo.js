import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="flex z-10 items-center  gap-4">
      <Image src={logo} height="60" width="60" quality={80} alt="Logo" />
      <span className="text-xl font-semibold text-primary">The Wild Oasis</span>
    </Link>
  );
}
