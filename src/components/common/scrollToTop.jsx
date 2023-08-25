import { useEffect } from "react";
  
 const ScrollToTop = ({routePath,children}) => {

const onTop = () => {
    window.scrollTo(0, 0);
}

  useEffect(() => {
    onTop()
  }, [routePath]);
  
  return children;
}

export default ScrollToTop;