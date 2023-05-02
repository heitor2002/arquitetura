export const ErrorFetchMessage = ({errMessage}) => {
  return (
    <>
      <div
        className="loading-error-message">
        <h2>{errMessage}</h2>
      </div>
    </>
  );
};
