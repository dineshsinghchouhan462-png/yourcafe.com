export default function Highlights() {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[900px] px-6 md:px-16 py-32 md:py-44">
        
        {/* Section Intro */}
        <div className="text-center mb-20 md:mb-28">
          <p className="text-[13px] tracking-[0.22em] uppercase text-gray-500 mb-6">
            The Experience
          </p>
          <h2 className="
            font-serif
            text-[34px] md:text-[44px]
            leading-[1.15]
            text-gray-900
          ">
            A slower way to spend time
          </h2>
        </div>

        {/* Experience Blocks */}
        <div className="space-y-20 md:space-y-28">

          <div className="text-center">
            <h3 className="
              font-serif
              text-[24px] md:text-[28px]
              mb-4
              text-gray-900
            ">
              Crafted calm
            </h3>
            <p className="
              text-[16px] md:text-[17px]
              leading-[1.75]
              text-gray-600
              max-w-[520px]
              mx-auto
            ">
              From the way the space is designed to how each cup is prepared,
              everything here encourages stillness. Nothing is rushed,
              and nothing is accidental.
            </p>
          </div>

          <div className="text-center">
            <h3 className="
              font-serif
              text-[24px] md:text-[28px]
              mb-4
              text-gray-900
            ">
              Time, uninterrupted
            </h3>
            <p className="
              text-[16px] md:text-[17px]
              leading-[1.75]
              text-gray-600
              max-w-[520px]
              mx-auto
            ">
              Whether you arrive alone or with company, the space is designed
              for lingering conversations, quiet work, or simply watching
              the day unfold.
            </p>
          </div>

          <div className="text-center">
            <h3 className="
              font-serif
              text-[24px] md:text-[28px]
              mb-4
              text-gray-900
            ">
              Thoughtfully served
            </h3>
            <p className="
              text-[16px] md:text-[17px]
              leading-[1.75]
              text-gray-600
              max-w-[520px]
              mx-auto
            ">
              Service is attentive but unobtrusive. Every detail is considered,
              so your experience feels effortless — from the first sip to
              the last moment.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
