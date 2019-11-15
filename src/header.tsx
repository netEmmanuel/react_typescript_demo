import * as React from "react";

//we can force types on the props been passed into our components
type HeaderProps = {
  text: string;
  //to allow a null value (text?: string)
};

//we need to make this header component more dynamic and props
//is the way to pass in data to your components from the parent.

//state will be used for data that changes all the time
//as opposed to props that doesn't change
function Header(props: HeaderProps) {
  //this useEffect method will make sure that the code fires this operation only when
  //the object is available
  React.useEffect(() => {
    alert(document.querySelector("#my-header"));
  });

  //it's not a good practice to change the value of your props in the component
  //This goes against functional programming principles
  //props.text = "don't do this";
  return (
    <h1 id="my-header" className="primary-header">
      {props.text}
    </h1>
  );
}

Header.displayName = "Header";

//incase you need to export multiple components from a file
export { Header };

//incase you need to export a single component from a file
// export default Header;
