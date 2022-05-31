import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { useStateContext } from "../contexts/ContextProvider";
import { motion } from "framer-motion";

const ButtonTheme = () => {
  const { theme, setTheme } = useStateContext();

  const styles = {
    buttonDark:
      "flex justify-center gap-3 items-center p-3 rounded-full text-slate-500  hover:text-slate-600 dark:text-yellow-500 dark:hover:bg-dark-500",
    buttonLight:
      "flex justify-center items-center p-3 rounded-full text-slate-500 hover:bg-gray-200 hover:text-slate-600",
  };
  return (
    <>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={styles.buttonDark}
        >
          <motion.div  >
            <RiMoonClearFill />
          </motion.div>
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={styles.buttonLight}
        >
          <motion.div >
            <RiSunFill />
          </motion.div>
        </button>
      )}
    </>
  );
};

export default ButtonTheme;
