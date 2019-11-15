import * as React from "react";

function CustomDate() {
  //I will use react hooks for to create state object in our react application
  // React.useState()

  //define the function and the state to update
  let [time, setTime] = React.useState("");

  //when this function is executed on a button click we want the
  //setTime function to be called
  let getTime = () => {
    setTime(new Date().toTimeString());
  };

  return (
    <div>
      {/* this will be updated to show the new value */}
      {time}
      <button onClick={getTime}>Get current Time</button>
    </div>
  );
}

CustomDate.displayName = "CustomDate";

export default CustomDate;
