import React, { useEffect, useState } from "react";


const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);


  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);
const onClick_installed = e =>{
  alert('Thanks! Get Recipes Progressive App is intalled - pls check it on your device')
}
  const onClick = e => {
    e.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return (
    <div>
      {!promptInstall ?
            <button className="installPwaBtn"
            id="setup_button"
            aria-label="Install app"
            title="Install app"
            onClick={onClick}
          >
            Install App for free (PWA)
        </button>
        :
        <button className="installPwaBtn"
        id="setup_button"
        aria-label="Install app"
        title="Install app"
        onClick={onClick_installed}
      >
        Progressive Get Recipes App
    </button>
      }

    </div>
  );
};

export default InstallPWA;