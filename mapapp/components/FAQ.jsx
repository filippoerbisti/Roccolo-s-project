import React from 'react';
import { FaAngleUp } from 'react-icons/fa';
import useTranslation from 'next-translate/useTranslation';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
// import 'react-accessible-accordion/dist/fancy-example.css';

const FAQ = () => {
    const { t } = useTranslation('common');

    const space = ' ';
    const phoneNumber = "+390457581077";
    const mailTo = "info@roccolodellago.it";
    
    return (
        <div>
            <Accordion allowZeroExpanded> {/* allowZeroExpanded allows closing of all accordions */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {t('faq1TContact')}
                            <FaAngleUp className='arrow' />
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {t('faq1PAvailable')} {space}
                        <a href='https://goo.gl/maps/Pgp5XzNNhqQoMqVa6' target='_blank' style={{textDecoration: 'underline'}}>{t('faq1PFarm')} Roccolo del Lago</a>.
                        <br />
                        {t('faq1PCallUs')} {space}
                        <a href={`tel:${phoneNumber}`} style={{textDecoration: 'underline'}}>0457581077</a> 
                        {space} {t('faq1PMailUs')} {space}
                        <a href={`mailto:${mailTo}`} target='_blank' rel="noopener noreferrer" style={{textDecoration: 'underline'}}>{mailTo}</a>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {t('faq2TDownload')}
                            <FaAngleUp className='arrow' />
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {t('faq2PDownload')}
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {t('faq2TDownload')}
                            <FaAngleUp className='arrow' />
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {t('faq2PDownload')}
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {t('faq2TDownload')}
                            <FaAngleUp className='arrow' />
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {t('faq2PDownload')}
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default FAQ