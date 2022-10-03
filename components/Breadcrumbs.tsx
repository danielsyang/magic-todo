import { useRouter } from "next/router";

export default function Breadcrumbs() {
  const { pathname } = useRouter();
  const routes = pathname.split("/").filter((val) => val !== "");
  const path = ["dashboard"].concat(routes);

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
