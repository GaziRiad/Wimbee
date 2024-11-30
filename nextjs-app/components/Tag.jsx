function Tag({ children, bg = "primary" }) {
  return (
    <span
      className={`rounded-custom w-fit p-2 text-sm uppercase text-light-300 ${bg === "light" ? "bg-primary-500" : "bg-primary-800"}`}
    >
      {children}
    </span>
  );
}

export default Tag;
