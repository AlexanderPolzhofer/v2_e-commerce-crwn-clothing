import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { DirectoryCategory } from '../directory/Directory';

import {
    DirectoryItemBodyContainer,
    DirectoryItemContainer,
    BackgroundImage
} from './DirectoryItem.styles';

type DirectoryItemProps = {
    category: DirectoryCategory;
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {

    const { imageUrl, title, route } = category;

    const navigate = useNavigate();

    const handleOnNavigate = () => {
        navigate(route);
    }

    return (
        <DirectoryItemContainer
            onClick={handleOnNavigate}
        >
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