import Link from "next/link";

function ContactBtn({ label = "Contact us" }) {
  return (
    <Link
      href="/contact"
      className="flex h-[34px] items-center gap-2 rounded-[4px] bg-white px-2 py-[10px] text-lg font-medium text-primary-700"
    >
      <span>{label}</span>
      <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
    </Link>
  );
}

export default ContactBtn;
