function CtaSection() {
  return (
    <div id="cta" className=" bg-orange-700 mt-32 bg-">
      <div className=" container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        <h2 className=" text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today
        </h2>
        <div>
          <a
            href="3a"
            className="text-orange-600 bg-white shadow-2xl px-6 py-2 rounded-full hover:bg-gray-800"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
