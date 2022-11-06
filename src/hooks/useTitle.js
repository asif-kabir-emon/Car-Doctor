import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = "Car Doctor - " + title;
  }, [title]);
};

export default useTitle;
