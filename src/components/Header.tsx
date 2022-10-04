import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "react-daisyui";

const Header = () => {
  const session = useSession();

  return (
    <header className="navbar bg-neutral shadow-xl rounded-box m-auto my-2 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link href={"/"}>
          <a className="btn btn-ghost normal-case text-xl">Tmdb clone</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-neutral">
              <li className="hover-bordered">
                <a>Submenu 1</a>
              </li>
              <li className="hover-bordered">
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>

      {session.status === "authenticated" ? (
        <div className="navbar-end gap-3">
          <a className="btn btn-outline text-white">my account</a>
          <Button
            className="btn btn-outline text-white"
            onClick={() => signOut()}
          >
            Logout
          </Button>
        </div>
      ) : (
        <div className="navbar-end gap-3">
          <Link href={"/auth/login"}>
            <a className="btn btn-outline text-white">Sign In</a>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
