import './Loading.css'
import MoonLoader from "react-spinners/MoonLoader";

function Loading() {
  return (
    <div className="sweet-loading">
      <MoonLoader
        color={"#222831"}
        loading={true}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loading;