"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "../styles/navigationDataPages.module.css";
import Link from "next/link";

const NavigationDataPages = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  let page = parseInt(searchParams.get("page") ? searchParams.get("page") : 1);

  const handleClick = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(`${pathname}?page=${e.target.innerText}`);
   
  };

  return (
    <div className={styles["container-buttons"]}>
      <Link
        className={styles["button-active"]}
        href={`${pathname}?page=${page}`}
      >
        {page}
      </Link>
      <Link
        className={styles.button}
        onClick={handleClick}
        href={{ pathname: `${pathname}`, query: { page: `${page + 1}` } }}
      >
        {page + 1}
      </Link>
      <Link
        className={styles.button}
        onClick={handleClick}
        href={{ pathname: `${pathname}`, query: { page: `${page + 2}` } }}
      >
        {page + 2}
      </Link>
      <Link
        className={styles.button}
       onClick={handleClick}
        href={{ pathname: `${pathname}`, query: { page: `${page + 3}` } }}
      >
        {page + 3}
      </Link>
    </div>
  );
};

export default NavigationDataPages;
