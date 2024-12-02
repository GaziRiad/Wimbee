function Hero({ title }) {
  return (
    <section className="mx-auto flex max-w-[1568px] px-4 pt-56">
      <h1 className="max-w-xl text-4xl leading-[116.667%] text-light-200 lg:text-[52px] 2xl:max-w-5xl 2xl:text-7xl">
        {title}
      </h1>
    </section>
  );
}

export default Hero;
