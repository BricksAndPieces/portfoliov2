import React from "react";
import styles from "./projects.module.css"
import { ProjectCard } from "../project-card/project-card";

import SNAKE_THUMBNAIL from "../../assets/project-thumbnails/snake-ai.gif"
import MARIO_THUMBNAIL from "../../assets/project-thumbnails/mario.gif"
import DISCORD_THUMBNAIL from "../../assets/project-thumbnails/discord-bot.png"
import PORTFOLIO_THUMBNAIL from "../../assets/project-thumbnails/portfolio.png"
import COVID_THUMBNAIL from "../../assets/project-thumbnails/covid.jpg"
import BOIDS_THUMBNAIL from "../../assets/project-thumbnails/boids.gif"

export class Projects extends React.Component {
  render() {
    return (
      <>
        <ProjectCard
          title={"Neural Network Framework"}
          desc={
            "A $$neural $$network coded entirely from scratch using the java standard libraries. " +
            "The code repository includes the neural network, traditional training algorithms and $$genetic $$training algorithms. " +
            "The project also includes multiple examples of the AI in use - most interesting of which is the $$Snake $$AI."}
          thumbnail={SNAKE_THUMBNAIL}
          tools={["java"]}
          githubUrl={"https://github.com/BricksAndPieces/Neural-Network-Framework"}
        />
        <ProjectCard
          title={"Super Mario Bros AI"}
          desc={
            "An AI made using the $$NEAT algorithm which is able to play the NES $$Super $$Mario $$Bros and SNES $$Super $$Mario " +
            "$$World. The AI is currently at a state where it is able to easily beat multiple levels from Super Mario " +
            "Bros. Made using python and $$OpenAI $$Gym $$Retro"
          }
          thumbnail={MARIO_THUMBNAIL}
          shiftTnLeft={true}
          tools={["python"]}
        />
        <ProjectCard
          title={"Discord Bot"}
          desc={
            "A bot that uses the Reddit and Discord $$APIs to link the two services together. Users on the Discord " +
            "chat service were able to access posts on $$Reddit through $$Discord. This bot was marketed and " +
            "showcased on several of the largest bot listing sites and was used by over $$300 $$servers and " +
            "accessible by nearly $$90,000 $$users."
          }
          thumbnail={DISCORD_THUMBNAIL}
          tools={["java"]}
        />
        <ProjectCard
          title={"Personal Portfolio"}
          desc={
            "A $$personal $$website made using react and typescript. Made to display my skills and experiences in a more " +
            "practical, easy to view way. $$Responsive for computers, tablets, and mobile devices with common aspect " +
            "ratios"
          }
          thumbnail={PORTFOLIO_THUMBNAIL}
          tools={["react", "typescript", "css3"]}
          githubUrl={"https://github.com/BricksAndPieces/bricksandpieces.github.io"}
          websiteUrl={"https://bricksandpieces.github.io/"}
        />
        <ProjectCard
          title={"Covid-19 Virus Simulation"}
          desc={
            "A java $$simulation demonstrating the effectiveness of various $$preventative $$measures against the " +
            "$$coronavirus and other sicknesses. The main measures visualized were $$social $$distancing, hand washing, " +
            "and the capacity of a country's $$healthcare $$infrastructure."
          }
          thumbnail={COVID_THUMBNAIL}
          tools={["java"]}
          githubUrl={"https://github.com/BricksAndPieces/Virus-Simulation"}
          websiteUrl={"https://www.youtube.com/watch?v=KAYSk7BD_oI"}
        />
        <ProjectCard
          title={"Boids Flocking Ecosystem"}
          desc={
            "A java $$simulation of the boids algorithm which mimics the $$flocking behavior seen in fish and birds. " +
            "Simulation includes the default flocking algorithm and a modified version with multiple flocks with a " +
            "$$predator and $$prey relationship."
          }
          thumbnail={BOIDS_THUMBNAIL}
          tools={["java"]}
          githubUrl={"https://github.com/BricksAndPieces/Boids-Ecosystem/"}
        />
      </>
    );
  }
}