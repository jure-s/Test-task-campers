import { Link, useLocation } from "react-router-dom";
import styles from "./navigation.module.css";
import { styled } from "@mui/material/styles";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
const Navigation = () => {
  const { pathname } = useLocation();
  const favoriteObject = useSelector((state) => state.favorites.favorites);
  const countBadges = Object.values(favoriteObject).length;
  const isActiveLink = (link) => pathname === link;

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -14,
      top: -17,
      padding: "0 4px",
      backgroundColor: "red",
    },
  }));

  return (
    <nav>
      <ul>
        <li>
          <Link
            className={isActiveLink("/") ? styles.active_link : null}
            to="/"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={isActiveLink("/catalog") ? styles.active_link : null}
            to="/catalog"
          >
            Catalog
          </Link>
        </li>
        <li>
          <Link
            className={isActiveLink("/favorites") ? styles.active_link : null}
            to="/favorites"
          >
            Favorites
          </Link>
          <StyledBadge color="secondary" badgeContent={countBadges} />
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
