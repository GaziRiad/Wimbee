import Link from "next/link";

export function MobileMenuItem({ item }) {
  if (item.items) {
    return (
      <div
        className={`${
          item.background === "light"
            ? "bg-white text-primary-800"
            : "bg-primary-800 text-primary-400"
        } rounded-custom px-3 py-2`}
      >
        <p className="text-xs">{item.title}</p>
        <ul>
          {item.items.map((link, index) => (
            <li key={index} className="border-b border-primary-800 py-3">
              <Link
                href={link.href}
                className="group flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span
                  className={`${
                    item.background === "light"
                      ? "bg-primary-800"
                      : "bg-primary-400"
                  } hidden size-4 rounded-full group-hover:inline-block`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <Link
      href={item.href || "/"}
      className="group flex items-center justify-between border-b border-primary-800 py-3"
    >
      <span>{item.title}</span>
      <span className="hidden size-4 rounded-full bg-primary-800 group-hover:inline-block" />
    </Link>
  );
}
