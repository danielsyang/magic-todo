import { FaListUl } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";
import Image from "next/image";
import logo from "../public/images/logo-ct.png";

export default function Sidebar() {
  return (
    <aside className="ml-4 mt-4 w-[250px]">
      <div className="flex px-8 py-6 items-center">
        <div className="w-8">
          <Image src={logo} alt="Logo image" />
        </div>
        <p className="text-slate-700 text-sm ml-4 mb-0">Dan list</p>
      </div>

      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent mb-4" />
      <div>
        <ul>
          <li className="mt-0.5 w-full">
            <a
              className="py-2.5 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors"
              href="/todo"
            >
              <div className="bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                <FaListUl className="text-white" />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                To-do list
              </span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a
              className="py-2.5 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors"
              href="/journal"
            >
              <div className="bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                <VscBook className="text-white" />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                Journal
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
