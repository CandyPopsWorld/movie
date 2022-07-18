import CollectionItem from '../collectionItem/CollectionItem';

import './CollectionList.scss';

const CollectionList = ({children, idKey}) => {
    return (
        <ul className="collection_list">
            {children}
        </ul>
    )
}

export default CollectionList;