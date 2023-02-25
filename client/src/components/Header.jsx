import React from "react";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ugFP-ksYpDeLnKBslCChRLVDm5yTUbyfINoev5-vytA6CNavqlP8v9FkaM-daKKTf6M&usqp=CAU"
              alt="logo"
              className="mr-2"
            />
            <div>Management</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
