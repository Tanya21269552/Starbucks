import React from "react";


type Props = {};

export default function LocationButton({ }: Props) {
  return (
    <>
      <div className="mr-[40px]">
        <a href="#" style={{ alignItems: 'center' }} className={` flex  text-sm mr-4 hover:text-green-700`} >

          <svg aria-hidden="true" className=" pr-2 " focusable="false" preserveAspectRatio="xMidYMid meet" style={{ width: '32px', height: '32px', overflow: 'visible', fill: 'currentColor' }} viewBox="0 0 24 24">
            <path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5">
            </path>
          </svg>
          <span>Find a store</span>
        </a>
      </div>
    </>
  );
}
