import React, {createClass, PropTypes} from 'react'

export default createClass({
  displayName: "filter",
  render(){
    var {placeholder, onChangeHandler} = this.props;
    return(
      <input onChange={onChangeHandler} placeholder={placeholder} type="text"/>
    )
  }
});
