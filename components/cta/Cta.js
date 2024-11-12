export default function Cta() {
  return (
    <section className="cta-section container my-[150px]" data-aos="flip-up">
      <div className="content px-12 py-16 bg-mainGradient text-black lg:rounded-xl flex justify-between items-center flex-wrap gap-8">
        <div>
          <p className="mb-3 text-xs">Request Early Access to Get Started</p>
          <p className="text-2xl font-bold">
            Register today & start exploring the endless possiblities.
          </p>
        </div>
        <a
          aria-label="click!"
          className="btn-primary !bg-black hover:!bg-slate-900 rounded-2xl"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
