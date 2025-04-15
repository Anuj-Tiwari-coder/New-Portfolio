import styled from "styled-components";
import { Modal } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import React from "react";

const ProjectDetailsContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  background-color: #000000a7;
  display: flex;
  justify-content: center;
  align-items: top;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const ProjectDetailsInnerContainer = styled.div`
  height: min-content;
  width: 100%;
  max-width: 800px;
  margin: 50px 12px;
  padding: 20px;
  color: #f2f3f4;
  background-color: #171721;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  position: relative;
`;

const Title = styled.div`
  margin: 8px 6px 0px 6px;
  color: #f2f3f4;
  font-size: 28px;
  font-weight: 600;
  @media (min-width: 1300px) {
    font-size: 32px;
  }
  @media (min-width: 1700px) {
    font-size: 35px;
  }
  @media (max-width: 600px) {
    margin: 6px 6px 0px 6px;
    font-size: 24px;
  }
`;

const Desc = styled.div`
  margin: 8px 6px;
  color: #b1b2b3;
  font-size: 16px;
  font-weight: 400;
  @media (min-width: 1300px) {
    font-size: 18px;
  }
  @media (min-width: 1700px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    margin: 6px 6px;
    font-size: 14px;
  }
`;

const Image = styled.img`
  width: 100%;
  margin-top: 30px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  object-fit: cover;
`;

const TagsContainer = styled.div`
  margin: 8px 0px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    margin: 4px 0px;
  }
`;

const Tag = styled.div`
  color: #854ce6;
  margin: 4px;
  padding: 4px 8px;
  background-color: #854ce620;
  font-size: 14px;
  font-weight: 400;
  border-radius: 8px;
  @media (min-width: 1300px) {
    font-size: 16px;
  }
  @media (min-width: 1700px) {
    font-size: 18px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const ButtonContainer = styled.div`
  margin: 12px 0px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const Button = styled.a`
  width: 100%;
  padding: 12px 16px;
  color: #f2f3f4;
  background-color: #854ce6;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: #854ce699;
  }
  ${({ $disabled }) =>
    $disabled &&
    `
        pointer-events: none;
        cursor: default;
        opacity: 0.6;
        color: #b1b2b3;
        background-color: #1C1E27;
    `}
  @media (min-width: 1300px) {
    font-size: 18px;
  }
  @media (min-width: 1700px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal.project;

  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <ProjectDetailsContainer>
        <ProjectDetailsInnerContainer>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project.image} />
          <Title>{project.title}</Title>

          <TagsContainer>
            {project.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsContainer>

          <Desc>{project.description}</Desc>
          <ButtonContainer>
            <Button
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              $disabled={!project.github}
            >
              View Code
            </Button>
            <Button
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              $disabled={!project.link}
            >
              View Live App
            </Button>
          </ButtonContainer>
        </ProjectDetailsInnerContainer>
      </ProjectDetailsContainer>
    </Modal>
  );
};

export default ProjectDetails;
