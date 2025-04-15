import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import React from 'react';
import { PROJECT_EXPERIENCES } from '../../constants';
import ExperienceCard from './ExperienceCard';
import {
    Desc,
    ExperianceContainer,
    TimelineSection,
    Title,
} from './ExperienceStyleComponents';

const Experience = () => {
    return (
        <ExperianceContainer id="experience-container">
            <Title>Project Experience</Title>
            <Desc>
                My work experience as a Web Developer & working on different companies
                and projects.
            </Desc>

            <TimelineSection>
                <Timeline>
                    {PROJECT_EXPERIENCES.map((experience, index) => (
                        <TimelineItem
                            key={index}
                            sx={{ '&::before': { px: { xs: '0px' } } }}
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="secondary" />
                                {index !== PROJECT_EXPERIENCES.length - 1 && (
                                    <TimelineConnector style={{ background: '#854CE6' }} />
                                )}
                            </TimelineSeparator>

                            <TimelineContent
                                sx={{ px: { xs: '10px', sm: '16px' }, py: '12px' }}
                            >
                                <ExperienceCard experience={experience} />
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </TimelineSection>
        </ExperianceContainer>
    );
};

export default Experience;