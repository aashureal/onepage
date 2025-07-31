import gsap from "gsap";
import { useRef } from "react";

const Hero_Homerun = () => {
  // Refs for each animated character
  const hRef = useRef(null);
  const oRef = useRef(null);
  const mRef = useRef(null);
  const eRef = useRef(null);
  const rRef = useRef(null);
  const uRef = useRef(null);
  const nRef = useRef(null);

  // Individual animation functions:
  const animateH = () => {
    const tl = gsap.timeline();
    tl.to(hRef.current, { x: -200, opacity: 0, duration: 0.2 });
    tl.set(hRef.current, { x: 100, opacity: 0 });
    tl.to(hRef.current, { x: 0, opacity: 1, duration: 0.2 });
  };
  const animateO = () => {
    const tl = gsap.timeline();
    tl.to(oRef.current, { y: 200, opacity: 0, duration: 0.2 });
    tl.set(oRef.current, { y: -100, opacity: 0 });
    tl.to(oRef.current, { y: 0, opacity: 1, duration: 0.2 });
  };
  const animateM = () => {
    const tl = gsap.timeline();
    tl.to(mRef.current, { x: 200, opacity: 0, duration: 0.2 });
    tl.set(mRef.current, { x: -100, opacity: 0 });
    tl.to(mRef.current, { x: 0, opacity: 1, duration: 0.2 });
  };
  const animateE = () => {
    const tl = gsap.timeline();
    tl.to(eRef.current, { y: -200, opacity: 0, duration: 0.2 });
    tl.set(eRef.current, { y: 100, opacity: 0 });
    tl.to(eRef.current, { y: 0, opacity: 1, duration: 0.2 });
  };
  const animateR = () => {
    const tl = gsap.timeline();
    tl.to(rRef.current, { x: -200, opacity: 0, duration: 0.2 });
    tl.set(rRef.current, { x: 100, opacity: 0 });
    tl.to(rRef.current, { x: 0, opacity: 1, duration: 0.2 });
  };
  const animateU = () => {
    const tl = gsap.timeline();
    tl.to(uRef.current, { y: 200, opacity: 0, duration: 0.2 });
    tl.set(uRef.current, { y: -100, opacity: 0 });
    tl.to(uRef.current, { y: 0, opacity: 1, duration: 0.2 });
  };
  const animateN = () => {
    const tl = gsap.timeline();
    tl.to(nRef.current, { x: 200, opacity: 0, duration: 0.2 });
    tl.set(nRef.current, { x: -100, opacity: 0 });
    tl.to(nRef.current, { x: 0, opacity: 1, duration: 0.2 });
  };

  return (
    <div className="Homerun page">
      <section className="hero">
        <div className="textbox">
          <h2 className="text hero__text">
            <span className="left" onMouseEnter={animateH}>
              <div className="char" ref={hRef}>
                H
              </div>
            </span>
            <span className="down" onMouseEnter={animateO}>
              <div className="char" ref={oRef}>
                o
              </div>
            </span>
            <span className="right" onMouseEnter={animateM}>
              <div className="char" ref={mRef}>
                m
              </div>
            </span>
            <span className="up" onMouseEnter={animateE}>
              <div className="char" ref={eRef}>
                e
              </div>
            </span>
            <span className="left" onMouseEnter={animateR}>
              <div className="char" ref={rRef}>
                r
              </div>
            </span>
            <span className="down" onMouseEnter={animateU}>
              <div className="char" ref={uRef}>
                u
              </div>
            </span>
            <span className="right" onMouseEnter={animateN}>
              <div className="char" ref={nRef}>
                n
              </div>
            </span>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Hero_Homerun;
