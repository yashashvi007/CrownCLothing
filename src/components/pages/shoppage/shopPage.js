import React from 'react';
import SHOP_DATA from './shopdata'
import CollectionPreview from './../../PreviewCollection/collectionpreview'

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
           collections : SHOP_DATA
        }
    }
    
    render(){
        const {collections} = this.state;
        return (
          <div className='shopping-page'>
              {
                  collections.map(({id , ...otherProps})=>(
                      <CollectionPreview key={id} {...otherProps} />
                  ))
              }
          </div>
        )
    }



}

export default ShopPage;