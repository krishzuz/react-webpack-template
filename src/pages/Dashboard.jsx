import React from "react";
import { Link } from "react-router-dom";

export default function dashboard() {
  return (
    <div>
      dashboard
      <Link to="/about"> about </Link>
    </div>
  );
}
