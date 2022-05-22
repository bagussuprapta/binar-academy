import React from "react";
import Lesson from "./Lesson";

class Main extends React.Component {
  render() {
    const languageList = [
      {
        name: "HTML & CSS",
        image:
          "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg",
      },
      {
        name: "React",
        image:
          "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg",
      },
      {
        name: "Ruby",
        image:
          "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ruby.svg",
      },
      {
        name: "Ruby on Rails",
        image:
          "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/rails.svg",
      },
      {
        name: "Python",
        image:
          "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg",
      },
    ];

    return (
      <div>
        <h1>GUSDE</h1>
        {languageList.map((lessonItem) => {
          return <Lesson name={lessonItem.name} image={lessonItem.image} />;
        })}
      </div>
    );
  }
}

export default Main;
