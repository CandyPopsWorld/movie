const CollectionItem = (props) => {
    let {name, poster, rating, idKey} = props;
    const style = {'backgroundColor': null};
    if(rating > 7){
        style.backgroundColor = 'green';
    } else if(rating > 5 && rating < 7){
        style.backgroundColor = 'yellow';
    } else {
        style.backgroundColor = 'red';
    }

    if(Number.isInteger(rating)){
        rating += '.0';
    }
    return (
    <div className="collection_list_item" key={idKey}>                    
        <div className="poster">
            <img src={poster} alt=""/>
            {/* <img src="https://images.unsplash.com/photo-1657907157592-dd6cfb9d06cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80" alt=""/> */}
        </div>
        <span>{name}</span>
        <div className="rating" style={style}>
            <span>{rating}</span>
        </div>
    </div>
    )
}

export default CollectionItem;