"use client";
import * as React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ExpandableCardProps {
  title: string;
  src: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  classNameExpanded?: string;
  [key: string]: any;
}

export function ExpandableCard({
  title,
  src,
  description,
  children,
  className,
  classNameExpanded,
  ...props
}: ExpandableCardProps) {
  const [active, setActive] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);
  const id = React.useId();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    if (active) {
      window.addEventListener("keydown", onKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [active]);

  if (!mounted) return null;

  return (
    <>
      {createPortal(
        <AnimatePresence>
          {active && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-10 h-full w-full bg-black/80"
              />
              <div
                className={cn(
                  "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10",
                )}
              >
                <motion.div
                  layoutId={`card-${title}-${id}`}
                  ref={cardRef}
                  className={cn(
                    "relative flex w-full max-w-[850px] flex-col bg-zinc-900 shadow-2xl rounded-3xl border border-zinc-700/50 max-h-[90vh] overflow-hidden",
                    classNameExpanded,
                  )}
                  {...props}
                  style={{ willChange: "transform, opacity" }}
                >
                  <motion.button
                    aria-label="Close card"
                    layoutId={`button-${title}-${id}`}
                    className="absolute top-4 right-4 z-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-black/20 text-white transition-colors duration-300 hover:bg-zinc-800 focus:outline-none"
                    onClick={() => setActive(false)}
                  >
                    <motion.div
                      animate={{ rotate: active ? 45 : 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </motion.div>
                  </motion.button>

                  <div className="overflow-y-auto h-full p-6">
                    <motion.div layoutId={`image-${title}-${id}`}>
                      <div className="relative">
                        <img
                          src={src}
                          alt={title}
                          className="w-full aspect-video object-contain object-center rounded-2xl bg-zinc-900/50"
                        />
                      </div>
                    </motion.div>
                    <div className="relative mt-4">
                      <div className="flex h-auto items-start justify-between py-4">
                        <div>
                          <motion.p
                            layoutId={`description-${description}-${id}`}
                            className="text-lg text-zinc-400"
                          >
                            {description}
                          </motion.p>
                          <motion.h3
                            layoutId={`title-${title}-${id}`}
                            className="mt-0.5 text-4xl font-semibold text-white sm:text-4xl"
                          >
                            {title}
                          </motion.h3>
                        </div>
                      </div>
                      <div className="relative px-6 sm:px-8">
                        <motion.div
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex flex-col items-start gap-4 overflow-auto pb-10 text-base text-zinc-400"
                        >
                          {children}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>,
        document.body,
      )}
      <motion.div
        role="dialog"
        aria-labelledby={`card-title-${id}`}
        aria-modal="true"
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-between rounded-2xl border border-zinc-700/50 bg-transparent p-3 shadow-sm hover:bg-zinc-900/20 transition-colors",
          className,
        )}
      >
        <div className="flex flex-col gap-4">
          <motion.div layoutId={`image-${title}-${id}`}>
            <img
              src={src}
              alt={title}
              className="h-60 w-full rounded-lg object-cover object-center"
            />
          </motion.div>
          <div className="flex items-center justify-between flex-col gap-4">
            <div className="flex flex-col items-center text-center">
              <motion.p
                layoutId={`description-${description}-${id}`}
                className="text-sm font-medium text-zinc-400 text-center"
              >
                {description}
              </motion.p>
              <motion.h3
                layoutId={`title-${title}-${id}`}
                className="font-semibold text-white text-center mt-1"
              >
                {title}
              </motion.h3>
            </div>
            <motion.button
              aria-label="Open card"
              layoutId={`button-${title}-${id}`}
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-transparent text-white transition-colors duration-300 hover:bg-zinc-800 focus:outline-none",
                className,
              )}
            >
              <motion.div
                animate={{ rotate: active ? 45 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
