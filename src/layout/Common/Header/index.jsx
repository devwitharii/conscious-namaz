import Button from "@/src/components/Button";
import Container from "@/src/components/Container";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-screen z-10 py-5 bg-white">
      <Container className="flex items-center">
        <Link href={"./"} className={`flex max-w-[135px] lg:max-w-[200px]`}>
          <Image
            src={"/images/logo.svg"}
            alt="Conscious Namaz Logo"
            width={198}
            height={59.28}
          />
        </Link>
        <ul className="ms-auto gap-5 flex items-center">
          {HEADER_DATA?.links?.map((item, index) => (
            <li key={index}>
              <Link
                href={item?.url || ""}
                className={`py-3 px-7 text-primary text-xl leading-none hover:bg-gray-200 rounded-md transition-colors`}
              >
                {item?.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button className={"lg:min-w-[257px] lg:ms-14"}>{HEADER_DATA.button.label}</Button>
      </Container>
    </header>
  );
};

export default Header;

const HEADER_DATA = {
  links: [
    {
      url: "/",
      label: "Home",
    },
    {
      url: "/about",
      label: "About",
    },
    {
      url: "/insights",
      label: "Insights",
    },
    {
      url: "/faq",
      label: "FAQs",
    },
  ],
  button: {
    label: "subscribe now",
  },
};
