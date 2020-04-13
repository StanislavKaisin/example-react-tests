import React, { Component } from "react";
import Header from "./components/Header";
import HeadLine from "./components/HeadLine";
import "./App.scss";

import Button from "./components/Button/index";
import ListItem from "./components/ListItem/ListItem";
import { connect } from "react-redux";
import { fetchPosts } from "./redux/actions/index";

// console.log('fetchPosts=', fetchPosts)
//array only for test
const tempArray = [
  {
    fName: "joe",
    lName: "blog",
    email: "joeblog@gmail.com",
    age: 25,
    onlineStatus: true,
  },
];
// initial state for test
const initialState = {
  hideBtn: false
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...initialState
    }
    this.fetch = this.fetch.bind(this);
  }
  fetch() {
    // console.log('this.props.fetchPosts=', this.props.fetchPosts)
    this.props.fetchPosts();
    this.exampleMethod_updateState();
  }

  exampleMethod_updateState(){
    const {hideBtn}=this.state
    this.setState({
      hideBtn: !hideBtn
    })
  }
  exampleMethod_returnAValue(number){
    return number+1
  }

  render() {
    const configButton={
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }
    const {posts}=this.props;
    const {hideBtn}=this.state;

    // console.log('props=',  this.props)
    return (
      <div className="App" data-test='appComponent'>
        <Header />
        <section className="main">
          <HeadLine
            header={"posts"}
            description="clickthe button to render posts. but where is it?"
            tempArray={tempArray}
          />
          {!hideBtn && <Button {...configButton}/>}
          
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
