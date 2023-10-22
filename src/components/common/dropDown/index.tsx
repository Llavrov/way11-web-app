import * as React from 'react';
import {type ReactElement, useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import {AccordionDetails} from "@mui/material";
import styles from './dropDown.module.css';
import Image from "next/image";
import {TExpert} from "@/components/pages/aboutUs/experts";
import Link from "next/link";
import TagColor from "@/components/common/tags/tagColor";

type RCDropDownProps = {
    points: TExpert[];
};

export default function RCDropDown({points = []}: RCDropDownProps): ReactElement {
    const [selected, setSelected] = useState<number[]>([]);

    return (
        <div className="w-full gap-4" style={{alignItems: 'center', marginTop: 8}}>
            {points.map(({socialNetworks, name, role, image}, index) => (
                    <Accordion
                        key={index}
                        expanded={selected.includes(index)}
                        sx={{
                            width: '100%',
                            color: selected.includes(index) ? 'white' : '#7B7B7B',
                            '&:before': {
                                display: 'none',
                            },
                            borderBottom: '1px solid #353535',
                            background: 'transparent',
                            boxShadow: 'none',
                            paddingX: '0',
                            '& .Mui-expanded': {
                                minHeight: '24px',
                                marginY: '0',
                                paddingX: '0',
                            },
                            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                transform: 'rotate(180deg)',
                                paddingX: '0',
                            },
                            '& .MuiAccordionDetails-root': {
                                paddingX: '0',
                            },
                            '& .MuiAccordionSummary-root': {
                                paddingX: '0',
                            },
                            '& .MuiAccordionSummary-content': {
                                marginY: '20px',
                                paddingX: '0',
                            },
                            '&.Mui-expanded': {
                                marginY: '0',
                                paddingX: '0',
                            }
                        }}
                        onChange={() => selected.includes(index)
                            ? setSelected(selected.filter(item => item !== index))
                            : setSelected([...selected, index])
                        }
                    >
                        <AccordionSummary
                            expandIcon={selected.includes(index)
                                ? (
                                    <div className={styles.closeIcon}>
                                        <Image className="cursor-pointer" src={'/svg/arrow-down.svg'} alt={'arrow-down'} width={17} height={9} />
                                    </div>
                                ) : (
                                    <div className={styles.openIcon}>
                                        <Image className="cursor-pointer" src={'/svg/arrow-down.svg'} alt={'arrow-down'} width={17} height={9} />
                                    </div>
                                )}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{
                                width: '100%',
                            }}
                        >
                            <div className="flex flex-col gap-1">
                                <Typography sx={{ fontSize: '18px', color: 'white' }}>
                                    {name}
                                </Typography>

                                <Typography sx={{ fontSize: '15px', color: '#8E8E93' }}>
                                    {role}
                                </Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="flex flex-col gap-4">
                                <Image className="w-full h-full min-h-[400px] max-h-[400px] object-cover rounded-5" src={image} alt={'picture of teammate'} width={540} height={540} />

                                <div className="flex gap-2">
                                    {
                                        Object.entries(socialNetworks).map(([socialNetwork, link]) => (
                                            <Link key={socialNetwork} href={link}>
                                                <TagColor title={socialNetwork} color={'white'} />
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                )
            )}
        </div>
    );
}


