import React from 'react';


submitTask = e => {
    e.preventDefault();
    .addTask(e, this.state.task);
};

submitItem = e => {
    e.preventDefault();
    this.props.addTask(e, this.state.task);
};