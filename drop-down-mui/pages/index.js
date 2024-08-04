import Head from "next/head";
import Image from "next/image";
import {
  Inter
} from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  dividerClasses
} from "@mui/material";
import Dropdown from "@/components/Dropdown";

const inter = Inter({
  subsets: ["latin"]
});

export default function Home() {
  return (
    <div>
      <Dropdown/>
    </div>
  )
}