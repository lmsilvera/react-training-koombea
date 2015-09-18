import React, {createClass} from 'react';
import sortBy from 'sort-by';
var lista = require('../lista.json').people;
var {ul, li, h1, div, b} = React.DOM;

import Filter from './filter'

var ItemList = createClass({
  render(){
    var {email, firstName, lastName, role} = this.props;
    return(
      <li>{`${firstName} ${lastName} ${role}`} <b>{`${email}`}</b> </li>
    )
  }
})

var List = createClass({
  displayName: "Lista",
	render() {
    var items = this.props.trabajadores.map((trabajador) => {
      return <ItemList {...trabajador} />
    });

		return(<ul>{items}</ul>);
	}
});

var App = createClass({
  displayName: "AppMain",
  render(){
    console.log(this.state.searchValue)
    return(
      <div>
        <Filter placeholder="Buscar" onChangeHandler={this.onChangeHandler}/>
        <List trabajadores={this.state.listaFiltrada}/>
      </div>
    )
  },
  getInitialState(){
    return {
      searchValue: "",
      trabajadores: lista,
      listaFiltrada: lista
    }
  },
  onChangeHandler(e){
    var searchValue = e.target.value
        , regex = RegExp(searchValue, 'i')
        , listaFiltrada = this.state.trabajadores.filter((item) => {
                          return item.firstName.search(regex) > -1
                        }).sort(sortBy("firstName"))

    if (searchValue.length < 1){
      this.setState({
        listaFiltrada: this.state.trabajadores
      })
    }else{
      this.setState({
        searchValue,
        listaFiltrada
      })
    }
  }
})

module.exports = App;

/*
  mostrar los items en la lista de las personas que trabajan como developers
  ordenadas por nombre. Ademas, colocar un campo de texto y filtar
  por nombre.
*/
