import React from "react";

const Contact = () => {
  // Use the visible email as the actual mailto; change if you prefer the other one.
  const email = "mikhelpottellaatwork@gmail.com";

  return (
    <section
      id="contact"
      className="contact bg-[#6f2f14] text-white py-12 px-4 sm:px-8"
      role="contentinfo"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>

        <div className="mb-6 text-lg sm:text-2xl font-semibold">
          Email:&nbsp;
          <a
            href={`mailto:${email}`}
            className="text-amber-200 underline hover:text-amber-100"
            aria-label={`Email ${email}`}
          >
            {email}
          </a>
        </div>

        {/* social icons */}
        <div className="flex justify-center items-center gap-6 pt-4">
          <a
            href="https://www.linkedin.com/in/mikhel-pottella/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
            className="inline-flex items-center justify-center"
          >
            <img
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="LinkedIn"
              className="w-12 h-12 bg-white rounded-full p-1 shadow-lg"
            />
          </a>

          <a
            href="https://github.com/Michael3-3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
            className="inline-flex items-center justify-center"
          >
            <img
              src="https://images.seeklogo.com/logo-png/30/2/github-logo-png_seeklogo-304612.png"
              alt="GitHub"
              className="w-12 h-12 bg-white rounded-full p-1 shadow-lg object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
