import { useEffect } from "react";

export const useBeforeload = () => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      alert('Are you Sure? All Cart Items Will Be Delete?')
      event.returnValue = "Are you Sure? All Cart Items Will Be Deleted"; // Standard way to show a prompt in most browsers
      return "Your Data is not being sa"; // Required for older browsers
     
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
};


