import React, { Component } from "react";
import Header from "./components/Header";
import HeadLine from "./components/HeadLine";
import "./App.scss";

import Button from "./components/Button/index";
import ListItem from "./components/ListItem/ListItem";
import { connect } from "react-redux";
import { fetchPosts } from "./redux/actions/index";

// console.log('fetchPosts=', fetchPosts)

const tempArray = [
  {
    fName: "joe",
    lName: "blog",
    email: "joeblog@gmail.com",
    age: 25,
    onlineStatus: true,
  },
];

class App extends Component {
  constructor(props){
    super(props);
    this.fetch = this.fetch.bind(this);
  }
  fetch() {
    // console.log('this.props.fetchPosts=', this.props.fetchPosts)
    this.props.fetchPosts();
  }

  render() {
    const configButton={
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }
    const {posts}=this.props;
    // console.log('props=',  this.props)
    return (
      <div className="App" data-test='appComponent'>
        <Header />
        <section className="main">
          <HeadLine
            header={"posts"}
            description="clickthe button to render posts"
            tempArray={tempArray}
          />
          <Button {...configButton}/>
          {posts.length? 
          (<div>
            {posts.map(post=>{
              const {title, body, id}=post;
              const configListItem={
                title,
                description: body
              }
              return (<ListItem key={id} {...configListItem}/>)
            })}
          </div>) : null
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('state=',  state)
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);

// "test": "react-scripts test",
