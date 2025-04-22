import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import Link from "next/link";

function Navigation() {
  const router = useRouter();
  const pathname = router.pathname;

  const navLinks = [
    pathname !== "/" && { name: "Home", href: "/" },
    { name: "Domen", href: "/domen" },
    { name: "Hosting", href: "/hosting" },
    { name: "Server", href: "/server" },
    { name: "VPS/VDS", href: "#" },
  ].filter(Boolean);

  return (
    <div className=" max-w-[1440px] mx-auto w-fit bg-black lg:bg-milky-white rounded-[70px] p-1 font-inter border border-[#C7C6D2]">
      <ul className="flex items-center lg:hidden">
        <Button className="font-inter text-sm p-0 lg:text-base capitalize inline-block w-[109px] h-[30px] rounded-full bg-white text-black font-semibold border-none shadow-none">
          <span>To&apos;lov usuli</span>
        </Button>
        <Link
          href="#"
          className="font-normal text-sm transition-colors text-white hover:text-blue-500 focus:text-blue-500 mx-6"
        >
          Hamkorlar
        </Link>
      </ul>
      <ul className="hidden lg:flex items-center gap-[14px] lg:gap-y-4 gap-x-8 font-outfit">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={` font-normal text-base transition-colors p-[20px] rounded-full ${
                pathname.includes(link.href) && link.href !== "/"
                  ? "bg-white border border-[#C7C6D2]"
                  : "hover:text-blue-500 focus:text-blue-500"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <Button className="font-inter text-xs p-0 lg:text-base capitalize inline-block w-[114px] lg:w-[119px] h-[44px] lg:h-[57px]  rounded-full bg-custom-pink font-semibold border-none shadow-none">
          <span>Bog&apos;lanish</span>
        </Button>
      </ul>
    </div>
  );
}
export default Navigation;
