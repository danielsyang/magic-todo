import { useRouter } from "next/router";

function getTitleFromPathname(pathname: string) {
  switch (true) {
    case pathname.includes("todo"):
      return "to do";
    case pathname.includes("journal"):
      return "journal";
    default:
      return "";
  }
}

export default function Breadcrumbs() {
  const { pathname } = useRouter();
  const path = ["dashboard"].concat(getTitleFromPathname(pathname));

  return (
    <div className="flex mb-2 text-sm text-slate-700 opacity-50">
      {path.map((name, index) => (
        <>
          <p className="capitalize pr-2" key={name}>
            {name}
          </p>
          {index !== path.length - 1 ? <p className="pr-2">/</p> : null}
        </>
      ))}
    </div>
  );
}
