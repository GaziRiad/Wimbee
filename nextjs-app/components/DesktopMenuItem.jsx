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
      <DropdownMenuContent
        align="start"
        alignOffset={-5}
        className="flex items-end gap-6 p-4"
      >
        <div className="flex-1">
          <DropdownMenuLabel className="font-main text-xl font-medium text-primary-800">
            <span>{item.title}</span>
          </DropdownMenuLabel>
          <Image
            src="/introGif.gif"
            width={300}
            height={300}
            alt="wimbee GIF"
            className="mt-2 h-48 w-48 object-cover"
          />
        </div>
        <div className="flex w-80 flex-col text-primary-800">
          {item.items.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="group flex w-full items-center justify-between border-b border-light-300 py-5 text-xl"
            >
              <span>{subItem.label}</span>
              <span className="hidden size-4 rounded-full bg-primary-800 group-hover:inline-block" />
            </Link>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
