const todoItem = function(title,desc,due,prio) {
    this.title = title;
    this.desc = desc;
    this.due = due;
    this.prio = prio;

    return {title,desc,due,prio}
}

export default todoItem;