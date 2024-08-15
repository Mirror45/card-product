import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Wrapper, Nav } from "./styled";

export default function Layout() {
  return (
    <Wrapper>
      <Nav>
        <NavLink to="/">Каталог</NavLink>
      </Nav>
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
}
