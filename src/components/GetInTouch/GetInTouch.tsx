const GetInTouch = () => {
  return (
    <>
      <section className="pt-8 container mx-auto flex justify-center">
        <div className="w-full p-4">
          <div className="w-full lg:h-[340px] border-2 rounded-[30px] border-white flex flex-col justify-center items-center gap-4 bg-gradient-to-r from-blue-100 via-blue-200 to-green-600 font-inter p-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-center">
              Improve your SaaS product with us
            </h1>
            <p className="text-center text-lg lg:text-xl lg:w-[40.6rem] w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              netus lacinia convallis nisl, metus. Cras dui, amet urna feugiat.
            </p>
            <button
              type="button"
              className="border-2 rounded-xl px-10 lg:px-16 py-3 lg:py-4 text-lg lg:text-xl font-bold bg-gray-300 text-black mt-4"
            >
              Get in touch
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default GetInTouch;
