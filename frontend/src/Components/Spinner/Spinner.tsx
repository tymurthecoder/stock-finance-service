import { ClipLoader } from "react-spinners";

interface Props {
  isLoading?: boolean;
}

const Spinner = ({ isLoading = true }: Props) => {
  return (
    <>
      <div id="loading-spinner">
        <ClipLoader
          color="#36d7b7"
          loading={isLoading}
          size={35}
          aria-label="Loading Spinner"
          data-test="loader"
        />
      </div>
    </>
  );
};

export default Spinner;
