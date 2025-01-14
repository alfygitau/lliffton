"use client";
import { useEffect, useRef } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const countupRefs = [ref1, ref2, ref3, ref4, ref5];
  const countValues = [1000, 2000, 3000, 500, 10000];

  useEffect(() => {
    initCountUp(
      countupRefs.map((ref) => ref.current),
      countValues
    );
  }, []);

  async function initCountUp(countRefs, countValues) {
    const countUpModule = await import("countup.js");

    countValues.forEach((value, index) => {
      const countUpAnim = new countUpModule.CountUp(countRefs[index], value);
      if (!countUpAnim.error) {
        countUpAnim.start();
      } else {
        console.error(countUpAnim.error);
      }
    });
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className="h-[400px] sm:h-auto w-full">
        <div className="w-[90%] h-full flex items-center justify-between mx-auto sm:flex-col sm:gap-[20px]">
          <div className="w-[55%] sm:w-[95%] h-full flex flex-col justify-center">
            <p className="text-[36px] font-bold">
              To be the leading provider of Research and Training Services
              related to economic growth and development in all sectors.
            </p>
            <div className="p-4 sm:p-0 text-[16px]">
              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Big data storage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Training and linkages.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Mobile data capture...</span>
                </li>
              </ul>
            </div>
            <button className="w-[360px] font-bold uppercase bg-white text-[#01C4D8] border h-[43px] border-[#01C4D8] rounded text-[15px] hover:bg-[#01C4D8] hover:text-white hover:border-0">
              Get in touch
            </button>
          </div>
          <div className="w-[45%] sm:w-[95%] flex justify-end items-center">
            <img
              className="w-[400px] h-[400px]"
              src={"/digital.gif"}
              alt="digital"
            />
          </div>
        </div>
      </section>
      <section className="h-[650px] sm:h-auto py-[20px] bg-[#F0F8F6] w-full">
        <div className="h-full w-[90%] sm:w-[95%] sm:mx-auto flex items-center justify-between sm:flex-col sm:gap-[20px] mx-auto">
          <div className="flex flex-col w-[58%] h-full justify-between">
            <div>
              <p className="text-[#01C4D8] text-[20px]">
                Integrated Admin Platforms
              </p>
              <p className="text-[#000] text-[16px]">
                Streamline operations and make informed decisions with powerful{" "}
                <br />
                analytics and automation.
              </p>
            </div>
            <div className="h-[500px] w-full sm:w-[100%] sm:h-[350px] rounded-[10px] bg-white border">
              <img
                className="rounded-[10px] h-full w-full object-contain"
                src="/admin.png"
                alt="admin"
              />
            </div>
          </div>
          <div className="flex flex-col w-[40%] h-full justify-between">
            <div>
              <p className="text-[#01C4D8] text-[20px]">
                Integrated Mobile Platforms
              </p>
              <p className="text-[#000] text-[16px]">
                We analyze organization raw data and help them optimize on their
                performance.
                <br />
                Run surveys on behalf of organizations.
              </p>
            </div>
            <div className="flex w-full items-center gap-[20px]">
              <div className="h-[500px] w-[250px] p-[10px] rounded-[30px] bg-white border">
                <img
                  className="h-full w-full object-contain"
                  src="/mobile_site.png"
                  alt="mobile"
                />
              </div>
              <div className="h-[500px] w-[250px] p-[10px] rounded-[30px] bg-white border">
                <img
                  className="h-full w-full object-contain"
                  src="/mobile_page.png"
                  alt="mobile"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white relative p-[20px] h-[750px] sm:h-auto w-full">
        <p className="font-bold text-[20px] text-center">Our Values</p>
        <p className="text-[16px] text-center text-[#000]">
          Our values are the cornerstone of everything we do. They guide our
          decisions, shape our culture, and drive our success.
        </p>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img className="h-[400px] w-[400px]" src="/values.gif" />
        </div>
        <div className="flex h-[650px] sm:h-full sm:flex-col sm:gap-[20px] justify-around">
          <div className="h-full w-[40%] items-center flex flex-col justify-around">
            <div className="flex w-full flex-col gap-[10px] items-center">
              <div className="h-[70px] w-[70px] rounded-full bg-[#D3FFFF] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M29.755 21.345A1 1 0 0 0 29 21h-2v-2c0-1.102-.897-2-2-2h-4c-1.103 0-2 .898-2 2v2h-2a1 1 0 0 0-.99 1.142l1 7A1 1 0 0 0 18 30h10a1 1 0 0 0 .99-.858l1-7a1 1 0 0 0-.235-.797M21 19h4v2h-4zm6.133 9h-8.266l-.714-5h9.694zM10 20h2v10h-2z"
                  />
                  <path
                    fill="currentColor"
                    d="m16.78 17.875l-1.906-2.384l-1.442-3.605A2.99 2.99 0 0 0 10.646 10H5c-1.654 0-3 1.346-3 3v7c0 1.103.897 2 2 2h1v8h2V20H4v-7a1 1 0 0 1 1-1h5.646c.411 0 .776.247.928.629l1.645 3.996l2 2.5zM4 5c0-2.206 1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4s-4-1.794-4-4m2 0c0 1.103.897 2 2 2s2-.897 2-2s-.897-2-2-2s-2 .897-2 2"
                  />
                </svg>
              </div>
              <p className="text-center text-[#01C4D9] text-[18px]">
                Innovation
              </p>
              <p className="text-center w-[50%] sm:w-[95%] mx-auto text-[16px]">
                We strive to lead the industry with innovative software
                solutions that push the boundaries of technology, ensuring our
                clients stay ahead in a competitive marketplace.
              </p>
            </div>
            <div className="flex w-full flex-col gap-[10px] items-center">
              <div className="h-[70px] w-[70px] rounded-full bg-[#D3FFFF] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M14 2a3 3 0 0 1 .054 6l-.218.653A4.5 4.5 0 0 1 15.89 11.5h1.319a2.5 2.5 0 1 1 0 2h-1.32a4.5 4.5 0 0 1-1.006 1.968l.704.704a2.5 2.5 0 1 1-1.414 1.414l-.934-.934A4.5 4.5 0 0 1 11.5 17a4.5 4.5 0 0 1-1.982-.46l-.871 1.046a3 3 0 1 1-1.478-1.35l.794-.954A4.48 4.48 0 0 1 7 12.5c0-.735.176-1.428.488-2.041l-.868-.724A2.5 2.5 0 1 1 7.9 8.2l.87.724a4.48 4.48 0 0 1 3.169-.902l.218-.654A3 3 0 0 1 14 2M6 18a1 1 0 1 0 0 2a1 1 0 0 0 0-2m10.5 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-5-8a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m8 2a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-14-5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M14 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                    />
                  </g>
                </svg>
              </div>
              <p className="text-center text-[#01C4D9] text-[18px]">
                Creativity
              </p>
              <p className="text-center w-[50%] sm:w-[95%] mx-auto text-[16px]">
                We think outside the box, turning imagination into innovation at
                every step.
              </p>
            </div>
            <div className="flex w-full flex-col gap-[10px] items-center">
              <div className="h-[70px] w-[70px] rounded-full bg-[#D3FFFF] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.252 31.262A12.973 12.973 0 0 1 24 11.027m10.756 5.719A12.973 12.973 0 0 1 24 36.97"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m24 17.906l6.703-6.703L24 4.5h0zm-.001 12.188l-6.703 6.703l6.703 6.703z"
                  />
                </svg>
              </div>
              <p className="text-center text-[#01C4D9] text-[18px]">
                Continuous Improvement
              </p>
              <p className="text-center w-[50%] sm:w-[95%] mx-auto text-[16px]">
                We focus on continual growth and improvement, encouraging
                innovation, skill development, and feedback to keep evolving our
                solutions and processes.
              </p>
            </div>
          </div>
          <div className="h-full w-[40%] items-center flex flex-col items-start justify-around">
            <div className="flex w-full flex-col gap-[10px] items-center">
              <div className="h-[70px] w-[70px] rounded-full bg-[#D3FFFF] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6 21q-1.25 0-2.125-.875T3 18V8h2v10q0 .425.288.713T6 19t.713-.288T7 18V6q0-1.25.875-2.125T10 3t2.125.875T13 6v12q0 .425.288.713T14 19t.713-.288T15 18V6q0-1.25.875-2.125T18 3t2.125.875T21 6v10h-2V6q0-.425-.288-.712T18 5t-.712.288T17 6v12q0 1.25-.875 2.125T14 21t-2.125-.875T11 18V6q0-.425-.288-.712T10 5t-.712.288T9 6v12q0 1.25-.875 2.125T6 21"
                  />
                </svg>
              </div>
              <p className="text-center text-[#01C4D9] text-[18px]">
                Integrity
              </p>
              <p className="text-center w-[50%] sm:w-[95%] mx-auto text-[16px]">
                Trust is the foundation of our business. We prioritize
                transparency and honesty in all of our interactions.
              </p>
            </div>
            <div className="flex w-full flex-col gap-[10px] items-center">
              <div className="h-[70px] w-[70px] rounded-full bg-[#D3FFFF] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 12.9q-.175 0-.325-.025t-.3-.075Q8 20.675 6 17.637T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 3.5-2 6.538T12.625 21.8q-.15.05-.3.075T12 21.9m0-2q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.9"
                  />
                </svg>
              </div>
              <p className="text-center text-[#01C4D9] text-[18px]">
                Security and Privacy
              </p>
              <p className="text-center w-[50%] sm:w-[95%] mx-auto text-[16px]">
                We prioritize the security and privacy of our clients' data by
                implementing best practices and stringent measures to safeguard
                sensitive information.
              </p>
            </div>
            <div className="flex w-full flex-col gap-[10px] items-center">
              <div className="h-[70px] w-[70px] rounded-full bg-[#D3FFFF] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2a10 10 0 0 1 10 10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2A10 10 0 0 1 12 2m0 6a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m5 4a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2M7 12a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m8 3l1.27 4.45l.08.55c0 1.1-.9 2-2 2h-4.7a2 2 0 0 1-2-2l.08-.55L9 15z"
                  />
                </svg>
              </div>
              <p className="text-center text-[#01C4D9] text-[18px]">Fun</p>
              <p className="text-center w-[50%] sm:w-[95%] mx-auto text-[16px]">
                We bring joy to every interaction, making work feel less like
                work and more like fun.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#00C5D9] h-[200px] sm:h-auto w-full">
        <div className="w-[90%] h-full mx-auto flex items-center justify-between">
          <div className="flex flex-col justify-start gap-[10px]">
            <div className="flex justify-start items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 16 16"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  d="M8 13.5H3a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h5m0 6v-6m0 6h5a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H8m2.5.5v2m-2-7v2m-3 3v2m-1-7v4.5h7V3a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5Z"
                />
              </svg>
              <p className="text-[24px] flex items-center gap-[5px] text-white">
                <span ref={ref1} className="font-bold text-[32px]">
                  1000
                </span>
                Clients
              </p>
            </div>
            <p className="text-white text-[20px]">Producer Organizations</p>
          </div>
          <div className="flex flex-col justify-start gap-[10px]">
            <div className="flex justify-start items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 16 16"
              >
                <g fill="#fff">
                  <path
                    fillRule="evenodd"
                    d="M5 2a.5.5 0 0 1 .5-.5c.862 0 1.573.287 2.06.566c.174.099.321.198.44.286c.119-.088.266-.187.44-.286A4.17 4.17 0 0 1 10.5 1.5a.5.5 0 0 1 0 1c-.638 0-1.177.213-1.564.434a3.5 3.5 0 0 0-.436.294V7.5H9a.5.5 0 0 1 0 1h-.5v4.272c.1.08.248.187.436.294c.387.221.926.434 1.564.434a.5.5 0 0 1 0 1a4.17 4.17 0 0 1-2.06-.566A5 5 0 0 1 8 13.65a5 5 0 0 1-.44.285a4.17 4.17 0 0 1-2.06.566a.5.5 0 0 1 0-1c.638 0 1.177-.213 1.564-.434c.188-.107.335-.214.436-.294V8.5H7a.5.5 0 0 1 0-1h.5V3.228a3.5 3.5 0 0 0-.436-.294A3.17 3.17 0 0 0 5.5 2.5A.5.5 0 0 1 5 2"
                  />
                  <path d="M10 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4zM6 5V4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
                </g>
              </svg>
              <p className="text-[24px] flex items-center gap-[5px] text-white">
                <span ref={ref2} className="font-bold text-[32px]">
                  2000
                </span>
                Clients
              </p>
            </div>
            <p className="text-white text-[20px]">Input Providers</p>
          </div>
          <div className="flex flex-col justify-start gap-[10px]">
            <div className="flex justify-start items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 48 48"
              >
                <g
                  fill="none"
                  stroke="#fff"
                  strokeLinejoin="round"
                  strokeWidth="4"
                >
                  <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                  <path
                    strokeLinecap="round"
                    d="M18 22h12m-12 6h12m-5.992-6v12M30 15l-6 6l-6-6"
                  />
                </g>
              </svg>
              <p className="text-[24px] flex items-center gap-[5px] text-white">
                <span ref={ref3} className="font-bold text-[32px]">
                  3000
                </span>{" "}
                Clients
              </p>
            </div>
            <p className="text-white text-[20px]">
              Financial and Insurance Providers
            </p>
          </div>
          <div className="flex flex-col justify-start gap-[10px]">
            <div className="flex justify-start items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M12.476 2.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486s1.575 3.485 3.536 3.485a.75.75 0 0 1 0 1.5c-2.773 0-5.036-2.224-5.036-4.985c0-2.705 2.17-4.893 4.864-4.983a6.4 6.4 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397c3.158 0 5.796 2.244 6.355 5.221c2.3.977 3.919 3.238 3.919 5.882c0 3.074-2.188 5.631-5.093 6.253a.75.75 0 0 1-.314-1.467c2.24-.48 3.907-2.446 3.907-4.786c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264m-1.025 10.5h1.098c.665 0 1.238 0 1.697.062c.492.066.963.215 1.345.597s.531.853.597 1.345c.062.459.062 1.032.062 1.697v2.098c0 .665 0 1.238-.062 1.697c-.066.492-.215.963-.597 1.345s-.853.531-1.345.597c-.459.062-1.032.062-1.697.062h-1.098c-.665 0-1.238 0-1.697-.062c-.491-.066-.963-.215-1.345-.597s-.531-.854-.597-1.345c-.062-.459-.062-1.032-.062-1.697v-2.098c0-.665 0-1.238.062-1.697c.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062m-1.497 1.548c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v2c0 .728.002 1.2.048 1.546c.044.325.115.427.172.484s.159.128.484.172c.347.046.818.048 1.546.048h1c.728 0 1.2-.002 1.546-.048c.325-.044.427-.115.484-.172s.128-.159.172-.484c.046-.347.048-.818.048-1.546v-2c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048h-1c-.728 0-1.2.002-1.546.048M10.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-[24px] flex items-center gap-[5px] text-white">
                <span ref={ref4} className="font-bold text-[32px]">
                  500
                </span>{" "}
                Clients
              </p>
            </div>
            <p className="text-white text-[20px]">Big Data Storage</p>
          </div>
          <div className="flex flex-col justify-start gap-[10px]">
            <div className="flex justify-start items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M37.138 36.57v3.062h-29.3a2.334 2.334 0 0 1-2.338-2.33h0V14.696h3.056V36.57zM12.113 10.698a2.334 2.334 0 0 1 2.337-2.33h6.793c.65 0 1.283.202 1.812.579l3.828 2.725c.53.377 1.163.58 1.812.579h11.468a2.334 2.334 0 0 1 2.337 2.33v15.531a2.334 2.334 0 0 1-2.337 2.33H14.45a2.334 2.334 0 0 1-2.337-2.33z"
                />
              </svg>
              <p className="text-[24px] flex items-center gap-[5px] text-white">
                <span ref={ref5} className="font-bold text-[32px]">
                  1000
                </span>{" "}
                Clients
              </p>
            </div>
            <p className="text-white text-[20px]">All Clients</p>
          </div>
        </div>
      </section>
      <section className="h-[250px] w-full py-[20px] bg-white">
        <div className="w-[90%] h-full flex items-center justify-around mx-auto">
          <div className="h-[150px] w-[150px] border rounded-full">
            <img
              className="h-full w-full object-fill rounded-full"
              src="/rti.png"
              alt="rti"
            />
          </div>
          <div className="h-[150px] w-[150px] border rounded-full">
            <img
              className="h-full w-full object-fill rounded-full"
              src="/horns.png"
              alt="horns"
            />
          </div>
          <div className="h-[150px] w-[150px] border rounded-full">
            <img
              className="h-full w-full object-fill rounded-full"
              src="/intelli_wealth.png"
              alt="wealth"
            />
          </div>
          <div className="h-[150px] w-[150px] border rounded-full">
            <img
              className="h-full w-full object-fill rounded-full"
              src="/sana.png"
              alt="sana"
            />
          </div>
          <div className="h-[150px] w-[150px] border rounded-full">
            <img
              className="h-full w-full object-fill rounded-full"
              src="/ftma.png"
              alt="ftma"
            />
          </div>
          <div className="h-[150px] w-[150px] border rounded-full">
            <img
              className="h-full w-full object-fill rounded-full"
              src="/cga.webp"
              alt="cga"
            />
          </div>
        </div>
      </section>
    </>
  );
}
