import { useEffect } from "react";
import { useRouter } from "next/router";
const languageDetector: any = import("@/lib/languageDetector");

export const useRedirect = (to: any) => {
  const router = useRouter();
  to = to || router.asPath;

  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect();
    if (to.startsWith("/" + detectedLng) && router.route === "/404") {
      // prevent endless loop
      router.replace("/" + detectedLng + router.route);
      return;
    }

    languageDetector.cache(detectedLng);
    router.replace("/" + detectedLng + to);
  });

  return <></>;
};

export const Redirect = () => {
  useRedirect(null);
  return <></>;
};

// eslint-disable-next-line react/display-name
export const getRedirect = (to: any) => () => {
  useRedirect(to);
  return <></>;
};
