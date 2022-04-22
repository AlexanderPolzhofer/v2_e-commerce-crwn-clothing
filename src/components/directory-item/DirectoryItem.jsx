import { useNavigate } from 'react-router-dom';

import {
    DirectoryItemBodyContainer,
    DirectoryItemContainer,
    BackgroundImage
} from './DirectoryItem.styles';

const DirectoryItem = ({ category }) => {

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