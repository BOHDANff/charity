import React, {useState} from 'react';
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import FizOsobaButton from "./FizOsobaButton";

const FizOsoba = () => {
    const [buttonVariant, setButtonVariant] = useState(1);
    return (
        <div className='fizOsoba__wrapper'>
            <ButtonGroup>
                <FizOsobaButton setButtonVariant={setButtonVariant} buttonVariant={buttonVariant} number={1}>Фіз. особа</FizOsobaButton>
                <FizOsobaButton setButtonVariant={setButtonVariant} buttonVariant={buttonVariant} number={2}>Юр. особа</FizOsobaButton>
            </ButtonGroup>
        </div>
    );
};

export default FizOsoba;