import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DesktopMenuItem({ item }) {
  if (!item.items) {
    return (
      <Link
        href={item.href || "/"}
        className="m-1 rounded-[4px] px-2 text-lg font-medium text-primary-800 transition-all hover:bg-primary-800 hover:text-primary-400"
      >
        {item.title}
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="m-1 rounded-[4px] px-2 text-lg font-medium text-primary-800 outline-none transition-all hover:bg-primary-800 hover:text-primary-400 data-[state=open]:bg-primary-800 data-[state=open]:text-primary-400">
        {item.title}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" alignOffset={-5} className="p-4">
        <DropdownMenuLabel className="px-0 font-main text-xl font-medium text-primary-800">
          <span>{item.title}</span>
        </DropdownMenuLabel>
        <div
          className={`flex items-start ${item.type === "sectors" ? "flex-col" : "gap-6"}`}
        >
          <div className="flex-1">
            {item.type === "expertises" && (
              <Image
                src="/introGif.gif"
                width={300}
                height={300}
                alt="wimbee GIF"
                className="mt-2 h-48 w-48 object-cover"
              />
            )}
          </div>
          <div className="flex flex-col text-primary-800">
            {item.items.map((subItem, index) => (
              <Link
                key={index}
                href={subItem.href}
                className="group flex w-full items-center justify-between gap-16 border-b border-light-300 py-3 text-xl"
              >
                <span>{subItem.label}</span>
                <span className="size-4 rounded-full bg-primary-800 opacity-0 transition-all group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
