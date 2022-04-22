import React from 'react';

import {
    DirectoryItemBodyContainer,
    DirectoryItemContainer,
    BackgroundImage
} from './DirectoryItem.styles';

const DirectoryItem = ({ category }) => {

    const { imageUrl, title } = category;

    return (
        <DirectoryItemContainer>
            <BackgroundImage
                imageUrl={imageUrl}
            />
            <DirectoryItemBodyContainer>
                <h2>
                    {title}
                </h2>
                <p>Shop Now</p>
            </DirectoryItemBodyContainer>
        </DirectoryItemContainer>)
}

export default DirectoryItem;