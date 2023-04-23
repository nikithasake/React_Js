import './Card.css'

const Card=(props)=>{
    const classes = 'card ' + props.className;
    //console.log(props.className);//expenses and expense-item
    return <div className={classes}>{props.children}</div>;
}


export default Card;