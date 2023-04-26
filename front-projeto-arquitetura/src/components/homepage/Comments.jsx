import fetchApi from "@/hooks/fetchApi";
import Aos from "aos";
import { useEffect } from "react";

const Comments = () => {
  const { data } = fetchApi("http://localhost:5000/social-proof");
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <>
      <aside className="comments" data-aos="fade-up">
        {data.map((commentary) => {
          return (
            <>
              <div className="commentary">
                <h2>{commentary.name}</h2>
                <p>{commentary.message}</p>
              </div>
            </>
          );
        })}
      </aside>
    </>
  );
};

export default Comments;
