import useMobileDeviceDetection from "hooks/useMobileDetection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBrand = () => {
  const isMobile = useMobileDeviceDetection();
  return (
    <>
      <div
        className={`select-none ${
          isMobile ? "cursor-default" : "cursor-pointer"
        }`}
      >
        <Link href={"/"} passHref>
          <div className="flex items-center w-fit h-fit">
            <Image
              src={"/images/Logo_Djoki.png"}
              width={60}
              height={60}
              alt="company brand"
              loading="lazy"
            />
            <p className="text-lg font-semibold text-white">
              DjokiCoding
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavBrand;
