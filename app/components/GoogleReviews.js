"use client";
import Script from "next/script";

export default function GoogleReviews() {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div
        className="elfsight-app-dd2d57ca-4b65-4c60-8a24-02833fdb4e1c"
        data-elfsight-app-lazy=""
      />
    </>
  );
}
