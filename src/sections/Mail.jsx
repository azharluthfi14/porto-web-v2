import React from "react";

const Mail = () => {
  return (
    <section
      id="contact"
      className="h-screen flex justify-center items-center flex-col dark:bg-dark-900"
    >
      <div className="flex flex-col items-center">
        <div className="mx-20 text-center flex flex-col items-center dark:text-white">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-7">Get In Touch</h1>
          <p>
            Although I'm not currently looking for any new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <button className="flex justify-center items-center py-3.5 px-7 ease-in-out duration-300 rounded-md mt-10 border border-violet-500 text-violet-500 hover:text-white hover:bg-violet-500">
            Say Hello
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mail;
