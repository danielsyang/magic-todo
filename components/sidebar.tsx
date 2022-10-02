import { FaListUl } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo-ct.png";
import { useRouter } from "next/router";
import { IconType } from "react-icons/lib";

interface SidebarItemProps {
  isActive: boolean;
  Icon: IconType;
  name: string;
  href: string;
}

function SidebarItem({ Icon, isActive, name, href }: SidebarItemProps) {
  const activeItemCss =
    "py-2.5 shadow-soft-xl text-sm my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors";
  const inactiveItemCss =
    "py-2.5 text-sm my-0 mx-4 flex items-center whitespace-nowrap px-4 font-semibold text-slate-700 transition-colors";

  const activeIconCss =
    "bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5";
  const inactiveIconCss =
    "shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5";
  return (
    <li className="mt-0.5 w-full">
      <a className={isActive ? activeItemCss : inactiveItemCss} href={href}>
        <div className={isActive ? activeIconCss : inactiveIconCss}>
          <Icon className={isActive ? "text-white" : ""} />
        </div>
        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
          {name}
        </span>
      </a>
    </li>
  );
}

export default function Sidebar() {
  const { pathname } = useRouter();
  const isJournal = pathname.includes("journal");
  const isTodo = pathname.includes("todo");

  return (
    <aside className="ml-4 mt-4 w-[250px]">
      <Link href="/">
        <a className="flex px-8 py-6 items-center">
          <div className="w-8">
            <Image src={logo} alt="Logo image" />
          </div>
          <p className="text-slate-700 text-sm ml-4 mb-0">Dan list</p>
        </a>
      </Link>

      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent mb-4" />
      <div>
        <ul>
          <SidebarItem
            Icon={FaListUl}
            isActive={isTodo}
            name="To-do List"
            href="/todo"
          />
          <SidebarItem
            Icon={VscBook}
            isActive={isJournal}
            name="Journal"
            href="/journal"
          />
        </ul>
      </div>
    </aside>
  );
}
