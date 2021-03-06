const Pet = (props) => {
  return React.createElement("div", {}, [
              React.createElement("h1", {}, props.name),
              React.createElement("h2", {}, props.animal),
              React.createElement("h2", {}, props.breed)
  ]);
}

class App extends React.Component{
  handleTitleClick () {
    alert("You clicked the Title");
  }
  render(){
    return React.createElement("div", {} ,  [
      React.createElement("h1", { onClick: this.handleTitleClick }, " Adopt Me! "),
      React.createElement(Pet , {
        name : "Luna",
        animal: "Dog",
        breed: "Havanese"
      }),
      React.createElement(Pet , {
        name : "Pepper",
        animal: "Bird",
        breed: "Cockatiel"
      }),
      React.createElement(Pet , {
        name : "Chip",
        animal: "Squirrel",
        breed: "Red"
      })  

    ])
} 
}



  
  ReactDOM.render(React.createElement(App), document.getElementById('root'))

    