import React from "react";

const WithLoading = WrappedComponent => ({isLoading, ...otherProps}) => {
  return isLoading ? (
    <h2>IS LOADING</h2>
  ):(
    <WrappedComponent {...otherProps} />
  )
}

export default WithLoading;