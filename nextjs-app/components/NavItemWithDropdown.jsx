"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  useFloating,
  offset,
  shift,
  autoUpdate,
  useHover,
  useInteractions,
} from "@floating-ui/react";
import { ChevronDown } from "lucide-react";

export const NavItemWithDropdown = ({ label, items }) => {
  console.log(items);

  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(5), shift()],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { delay: { open: 100, close: 300 } });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <div ref={itemRef} className="relative inline-block text-left">
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        className="m-1 inline-flex cursor-default items-center rounded-[4px] px-2 text-lg font-medium text-primary-800 transition-all hover:bg-primary-800 hover:text-primary-400"
      >
        {label}
        <ChevronDown className="ml-1 h-4 w-4" />
      </div>

      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="z-10 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
