import "../styles/ScrollingAd.css";

const ScrollingAd = () => {
  console.log("ScrollingAd");

  return (
    <div className="relative flex overflow-x-hidden bg-accent text-accentSecond">
      <div className="animate-marquee whitespace-nowrap py-1">
        <span className="text-md mx-4 font-bold">
          {" "}
          Up to 15% - even better prices!{" "}
        </span>
        <span className="text-md mx-4">
          <i>The offer is valid on selected goods while stocks last.</i>
        </span>
        <span className="text-md mx-4 font-bold">
          {" "}
          Up to 15% - even better prices!{" "}
        </span>
        <span className="text-md mx-4">
          <i>The offer is valid on selected goods while stocks last.</i>
        </span>
      </div>

      <div className="animate-marquee2 absolute top-0 whitespace-nowrap py-1">
        <span className="text-md mx-4 font-bold">
          {" "}
          Up to 15% - even better prices!{" "}
        </span>
        <span className="text-md mx-4">
          <i>The offer is valid on selected goods while stocks last.</i>
        </span>
        <span className="text-md mx-4 font-bold">
          {" "}
          Up to 15% - even better prices!{" "}
        </span>
        <span className="text-md mx-4">
          <i>The offer is valid on selected goods while stocks last.</i>
        </span>
      </div>
    </div>
  );
  /* <span className="inline-block text-white">
{" "}
Up to 10% - even better prices!{" "}
<i>The offer is valid on selected goods while stocks last.</i>
</span> */
};

export default ScrollingAd;
