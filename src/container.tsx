import React from "react";
import './container.css';


interface ContainerProps {
}

const Container: React.FC<ContainerProps> = () => {
  return (
    <div className="container-container">
      Hello WORLD!
    </div>
  );
};

export default Container;