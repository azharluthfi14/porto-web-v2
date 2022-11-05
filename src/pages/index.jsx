import React from "react";
import LayoutPage from "../components/Layout";
import { Hero, About, Built, OtherProject } from "../sections";

export default function IndexPage() {
  return (
    <LayoutPage>
      <Hero />
      <About />
      <Built />
      <OtherProject />
    </LayoutPage>
  );
}
