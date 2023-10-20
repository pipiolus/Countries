import "../style.css";

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Loading data...</p>
    </div>
  );
};
export default LoadingSpinner;
