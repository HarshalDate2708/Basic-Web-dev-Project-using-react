import React from "react";

function Footer() {
  var curryear = new Date().getFullYear();
  return (
    <footer>
      <p>pratikshalonkar @ {curryear}</p>
    </footer>
  );
}

export default Footer;
