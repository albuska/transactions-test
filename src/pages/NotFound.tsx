import { Link } from "react-router-dom";
import ImageNotFoundPage from "../assets/images/notFound.webp";

const NotFound = () => {
  return (
    <div
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <Link
        to="/"
        style={{
          textAlign: "center",
          fontSize: 30,
          textDecoration: "underline",
        }}
        className="font-gravity text-[var(--main-color)] hover:text-[red]"
      >
        Go Home
      </Link>
      <img
        src={ImageNotFoundPage}
        alt="NotFoundPage"
        width={700}
        style={{ margin: "0 auto" }}
      />
    </div>
  );
};

export default NotFound;
