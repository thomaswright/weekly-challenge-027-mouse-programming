module Main = {
  @module("./other.jsx") @react.component
  external make: unit => React.element = "default"
}

@react.component
let make = () => {
  <div>
    <Main />
  </div>
}
