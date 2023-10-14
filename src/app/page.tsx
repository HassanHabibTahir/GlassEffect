"use client";
import { Slider } from "@material-tailwind/react";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
export default function Home() {
  const [Transparency, setTransparency] = useState<number | string>(0);
  const [Blur, setBlur] = useState<number>(0);
  const [outLine, setOutLine] = useState<number | string>(0);
  const [outColor, setColor] = useState<string>("#FFFFFF");
  const [blurcss, setBlurCss] = React.useState<string>("");
  const [rgbColor, setRgbColor] = React.useState<string>("");
  const [copy, setCopy] = React.useState<string>("");
  const BlurChangeHandler = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setBlur(Math.round(+e.target.value));
    },
    []
  );
  const transparencyHandler = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTransparency(e.target.value);
    },
    []
  );
  console.log(
    (+Math.round(+Transparency + 10) / 100).toFixed(1),
    "Transparency"
  );

  function hexToRGBA(hex: string, alpha: number): string {
    hex = hex.replace(/^#/, "");
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    let opacity =
      +(+Math.round(+alpha + 10) / 100).toFixed(1) > 0.9
        ? 1
        : (+Math.round(+alpha + 10) / 100).toFixed(1);

    return `rgba(${r},${g},${b},${opacity})`;
  }

  React.useEffect(() => {
    let blurClass;
    if (Blur <= 0) {
      blurClass = "backdrop-blur-none";
    } else if (Blur <= 15) {
      blurClass = "backdrop-blur-sm";
    } else if (Blur <= 30) {
      blurClass = "backdrop-blur";
    } else if (Blur <= 45) {
      blurClass = "backdrop-blur-md";
    } else if (Blur <= 60) {
      blurClass = "backdrop-blur-lg";
    } else if (Blur <= 75) {
      blurClass = "backdrop-blur-xl";
    } else if (Blur <= 90) {
      blurClass = "backdrop-blur-2xl";
    } else {
      blurClass = "backdrop-blur-3xl";
    }
    setBlurCss(blurClass);
  }, [Blur]);

  React.useEffect(() => {
    setRgbColor(hexToRGBA(outColor, +Transparency));
  }, [outColor, Transparency]);

  const border = `border-[${Math.round(+outLine)}px]`;
  const bgColor = `bg-[${rgbColor}]`;
  return (
    <div>
      <div className="w-full   flex justify-center">
        <div className="  ">
          <div className="text-white text-8xl mt-10 ">GLASSMORPHISM</div>
          <div
            style={{
              backgroundColor: rgbColor,
              border: `${Math.round(+outLine)}px solid white`,
            }}
            className={`w-[50vw] h-[20vh]  text-center 
             border-white ${blurcss}   border-white  rounded-lg shadow-2xl  absolute top-5 left-[27rem] rotate-3`}
          ></div>
        </div>
      </div>
      <div className="h-[100vh] flex justify-center">
        <div className="mt-[10rem]">
          <div className=" p-10   text-center bg-opacity-40 rounded-lg shadow-md backdrop-blur-0 webkit-backdrop-blur-10  bg-white border-white border-2">
            <div className="text-3xl text-bold text-white">
              GLASSMORPHISM Tailwind CSS Generator
            </div>
            <div className="text-1xl text-white pb-5">
              Create a Create Tailwind CSS Glass Effect
            </div>

            <label className="block mb-2 text-sm font-medium text-left text-white dark:text-white">
              TRANSPARENCY
            </label>
            <Slider
              id="transparency"
              value={Transparency}
              onChange={(e) => transparencyHandler(e)}
              defaultValue={0}
              max={100}
              min={0}
              className="text-[#F1C0CC] rounded-lg"
              barClassName="rounded-[100] bg-[transparent]"
              thumbClassName="[&::-moz-range-thumb]:rounded-lg [&::-webkit-slider-thumb]:rounded-lg [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
              trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-lg !bg-[#F1C0CC]/10 border border-[#F1C0CC]/20"
            />

            <label className=" mt-2 block mb-2 text-sm font-medium text-left text-white dark:text-white">
              BLUR
            </label>
            <Slider
              value={Blur}
              onChange={(e) => BlurChangeHandler(e)}
              defaultValue={4}
              max={100}
              min={0}
              className="text-[#F1C0CC] rounded-lg"
              barClassName="rounded-[100] bg-[transparent]"
              thumbClassName="[&::-moz-range-thumb]:rounded-lg [&::-webkit-slider-thumb]:rounded-lg [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
              trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-lg !bg-[#F1C0CC]/10 border border-[#F1C0CC]/20"
            />
            <label className=" mt-2 block mb-2 text-sm font-medium text-left text-white dark:text-white">
              Outline
            </label>
            <Slider
              value={outLine}
              onChange={(e) => setOutLine(e.target.value)}
              defaultValue={50}
              className="text-[#F1C0CC] rounded-lg"
              barClassName="rounded-[100] bg-[transparent]"
              thumbClassName="[&::-moz-range-thumb]:rounded-lg [&::-webkit-slider-thumb]:rounded-lg [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
              trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-lg !bg-[#F1C0CC]/10 border border-[#F1C0CC]/20"
            />
            <label className=" mt-2 block mb-2 text-sm font-medium text-left text-white dark:text-white">
              Color
            </label>
            <input
              onChange={(e) => setColor(e.target.value)}
              type="color"
              value={outColor}
              className="   w-full h-4 outline-none border-none border-transparent bg-white  cursor-pointer 
               "
            />
            <div>
              <div className="w-[100%]">
                <div className="align-center text-center ">
                  <p className="text-xl text-white">Tailwind Classes</p>
                  <p>bg-[{rgbColor}]</p>
                  <p>{blurcss}</p>
                  <p>{border}</p>
                  <CopyToClipboard
                    text={`
                    bg-[${rgbColor + " "}] 
                    ${" " + blurcss} 
                    ${border}`}
                    onCopy={() => setCopy(true)}
                  >
                    <button className="border-[2px] border-white p-2 bg-[rgba(255,255,255,0.1)]">
                      {" "}
                      Copy to Clip Board
                    </button>
                  </CopyToClipboard>
                  {copy ? "copied." : ""}
                </div>
                {/* From https://css.glass  */}

                {/* background: rgba(255, 255, 255, 0);
              border-radius: 16px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(0.4px); -webkit-backdrop-filter:
              blur(0.4px); border: 1px solid rgba(255, 255, 255, 0.96); */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
