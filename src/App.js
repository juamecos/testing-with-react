import React from "react";
import Header from "./components/Header";
import Headline from "./components/Headline";
import SharedButton from "./components/Button";
import ListItem from "./components/ListItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";
import "./app.scss";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 23,
    onlineStatus: false,
  },
];

function App(props) {
  const { posts } = props;

  const fetch = () => {
    props.fetchPosts();
  };

  const configButton = {
    buttonText: "Get Posts",
    emitEvent: fetch,
  };
  return (
    <div className="app">
      <Header />
      <section className="main">
        <Headline
          header="Hello"
          desc="Clock the button to render posts"
          tempArr={tempArr}
        />
        <SharedButton {...configButton} />
        {posts &&
          posts.map(({ id, title, body }) => (
            <div key={id}>
              <ListItem title={title} description={body} />
            </div>
          ))}
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, { fetchPosts })(App);
