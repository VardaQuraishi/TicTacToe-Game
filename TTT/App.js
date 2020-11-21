import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as Icon} from 'react-native-vector-icons';

export default class App2 extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      gameState: [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ],
      currentPlayer:1,
    }
  }

componentDidMount() {
  this.initializeGame ();

}

initializeGame =() =>{
  this.setState({gameState:
  [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ],
  currentPlayer: 1,
  });
}

getWinner = ()=> {
  const NUM_TILES=3;
  var arr = this.state.gameState;
  var sum;
  for (var i=0; i<NUM_TILES;i++){
    sum = arr[i][0] + arr[i][1]+ arr[i][2];
    if (sum==3) {return 1;}
    else if (sum===-3){return -1;}
  }

    sum = arr[0][i] + arr[1][i]+ arr[2][i];
    if (sum==3) {return 1;}
    else if (sum===-3){return -1;}
  

    sum = arr[0][0] + arr[1][1]+ arr[2][2];
    if (sum == 3) {return 1;}
    else if (sum===-3){return -1;}

     sum = arr[0][2] + arr[1][1]+ arr[2][0];
    if (sum == 3) {return 1;}
    else if (sum===-3){return -1;}

    return 0;
  
}
onNewGamePress = ()=>{
  this.initializeGame();
}

onTilePress = (row, col) => {
  //TODO
  var value= this.state.gameState[row][col];
  if (value !== 0) { return; }
  var currentPlayer=this.state.currentPlayer;

  var arr = this.gameState.slice();
  arr[row][col]= currentPlayer;
  this.setState({gameState: arr});

  var nextPlayer = (currentPlayer==1) ? -1:1;
  this.setState ({currentPlayer: nextPlayer});

  var winner = this.getWinner
  if (winner ==1){
    alert.alert("Player 1 is the winner")
    this.initializeGame();
  }
  else if (winner == -1){
    alert.alert("Player 2 is the winner")
    this.initializeGame();
  }
  
}

renderIcon=(row, col)=>{
  var value= this.state.gameState[row][col];
  switch(value)
  {
    case 1: return <Icon name="check-outline" style={styles.tileT}/>;
    case -1: <Icon name="close" style={styles.tileX}/>;
    
    default: return <View />;
  }
}
  render() {
    return (
      <View style={styles.container}>

      <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={()=> this.onTilePress(0,0)} style={styles.tile}>
          {this.renderIcon (0,0)}
        </TouchableOpacity>   
        <TouchableOpacity onPress={()=> this.onTilePress(0,1)} style={styles.tile}>
          {this.renderIcon (0,1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onTilePress(0,2)} style={styles.tile}>
        {this.renderIcon (0,2)}
        </TouchableOpacity>
      </View> 

      <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={()=> this.onTilePress(1,0)} style={styles.tile}>
          {this.renderIcon (1,0)}
        </TouchableOpacity>   
        <TouchableOpacity onPress={()=> this.onTilePress(1,1)} style={styles.tile}>
          {this.renderIcon (1,1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onTilePress(1,2)} style={styles.tile}>
        {this.renderIcon (1,2)}
        </TouchableOpacity>
      </View>  

      <View style={{flexDirection:"row"}}>
       <TouchableOpacity onPress={()=> this.onTilePress(2,0)} style={styles.tile}>
          {this.renderIcon (2,0)}
        </TouchableOpacity>   
        <TouchableOpacity onPress={()=> this.onTilePress(2,1)} style={styles.tile}>
          {this.renderIcon (2,1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onTilePress(2,2)} style={styles.tile}>
        {this.renderIcon (2,2)}
        </TouchableOpacity>
      </View> 
      <View style = {{paddingTop:50}} />
      <Button title="New Game" onPress={this.onNewGamePress} />

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  tile: {
    borderWidth:5,
    width: 100,
    height:   100,
  },
  tileT: {
     color: "red",
     fontSize:70,
     flex:1,
     alignItems:"center",
    justifyContent: "Center",

  
     
  },
  tileX: {
     color: "blue",
     fontSize:70,
     flex:1,
    alignItems:"center",
    justifyContent: "Center",
     
  }
});
