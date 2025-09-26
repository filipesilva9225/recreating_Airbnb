import React from "react";
import { Link, useParams } from "react-router-dom";
import AccProfile from "../components/AccProfile";

const Account = () => {
  const { subpage } = useParams();

  const buttonClass = (button) => {
    let finalClass =
      "hover:bg-p-400 cursor-pointer rounded-full px-4 py-2 transition hover:text-white";

    if (button === subpage) finalClass += " bg-p-400 text-white";
    return finalClass;
  };

  return (
    <section className="p-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4">
        <div className="flex gap-2">
          <Link to="/accont/profile" className={buttonClass("Profile")}>
            Perfil
          </Link>
          <Link to="/accont/bookings" className={buttonClass("bookings")}>
            Bookings
          </Link>
          <Link to="/accont/places" className={buttonClass("places")}>
            Places
          </Link>
        </div>
        {subpage === "profile" && <AccProfile user={user} />}
      </div>
    </section>
  );
};

export default Account;
