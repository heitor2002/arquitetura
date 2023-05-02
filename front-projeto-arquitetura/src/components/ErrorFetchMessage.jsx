export const ErrorFetchMessage = () => {
  return (
    <>
      <div
        className="loading-comments"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#eaeae9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div class="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};
