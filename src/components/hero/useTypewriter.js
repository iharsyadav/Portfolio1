import { useEffect, useState } from "react";

const useTypewriter = (roles) => {

  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {

    const current = roles[idx];

    const speed = del ? 45 : 90;

    const timer = setTimeout(() => {

      if (!del && text === current) {
        setTimeout(() => setDel(true), 1200);
        return;
      }

      if (del && text === "") {
        setDel(false);
        setIdx((idx + 1) % roles.length);
        return;
      }

      setText(
        del
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1)
      );

    }, speed);

    return () => clearTimeout(timer);

  }, [text, del, idx, roles]);

  return text;
};

export default useTypewriter;