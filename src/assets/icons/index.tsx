import React from "react";
import { IconType } from "react-icons";
import { FaTelegramPlane } from "react-icons/fa";
import {
  FaAddressBook,
  FaArrowRightToBracket,
  FaArrowUpRightFromSquare,
  FaBars,
  FaCaretDown,
  FaChevronDown,
  FaChevronLeft,
  FaEnvelopeOpen,
  FaFaceSmile,
  FaFigma,
  FaGithub,
  FaHandHoldingDroplet,
  FaInstagram,
  FaLaptopFile,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaRegChessKnight,
  FaRegCopy,
  FaRegFaceSmile,
  FaRegFileLines,
  FaTelegram,
  FaUser,
  FaWallet,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiOutlineCheckBadge,
  HiOutlineHeart,
  HiOutlineInformationCircle,
  HiOutlinePlusCircle,
} from "react-icons/hi2";

interface DynamicIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
}

const iconComponents: Record<string, IconType> = {
  FaAddressBook,
  FaArrowRightToBracket,
  FaArrowUpRightFromSquare,
  FaBars,
  FaCaretDown,
  FaChevronLeft,
  FaFaceSmile,
  FaRegFaceSmile,
  FaRegCopy,
  FaRegChessKnight,
  FaEnvelopeOpen,
  FaFigma,
  FaGithub,
  FaHandHoldingDroplet,
  FaInstagram,
  FaLaptopFile,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaRegFileLines,
  FaUser,
  FaTelegram,
  FaXTwitter,
  FaYoutube,
  FaTelegramPlane,
  HiOutlinePlusCircle,
  HiOutlineCheckBadge,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiOutlineInformationCircle,
  HiOutlineHeart,
  FaWallet,
  FaChevronDown,
};

const Icon: React.FC<DynamicIconProps> = ({ name, ...rest }) => {
  // Get the corresponding icon component based on the name
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    console.error(`Icon '${name}' not found`);
    return null;
  }

  return <IconComponent {...rest} />;
};

export default Icon;
