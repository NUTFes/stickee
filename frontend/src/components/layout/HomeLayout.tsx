import React from "react";

import { HeadTab, Header, SideTab } from "@/components/common";

interface LayoutProps {
  children?: React.ReactNode;
}

const HomeLayout = ({ children }: LayoutProps) => (
  <>
    <Header>
      <HeadTab />
    </Header>
    <main className="flex h-full">
      <aside className="hidden w-[280px] lg:block xl:block 2xl:block">
        <SideTab />
      </aside>
      <section className="h-screen w-full bg-green-200">{children}</section>
    </main>
  </>
);

export default HomeLayout;
