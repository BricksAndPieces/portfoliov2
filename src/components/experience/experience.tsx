import React from "react";
import styles from "../timeline/timeline.module.css"
import { Timeline } from "../timeline/timeline";

export class Experience extends React.Component {
  render() {
    return (
      <>
        <Timeline
          startRight={true}
          elements={[
          {
            title: "Associate Software Engineer",
            subtitle: "ExperienceIT",
            desc: "Worked for a $$fortune $$50 medical company to create and maintain a $$medical $$portal. " +
                  "Worked with the following technologies: Angular, TypeScript, Micronaut. " +
                  "Worked with frontend and backend technologies to implement services. " +
                  "Operated within a $$fully-remote, $$agile $$team. "
          },
          {
            title: "Robotics Captain",
            subtitle: "FRC Talon Robotics 2502",
            desc: "$$Elected by the team via an application. " +
                  "One of four team captains in charge of a $$40+ $$member $$team. " +
                  "Supervise 5 business leads and subteams. " +
                  "Conduct weekly team meetings, captain meetings, and monthly team $$leadership meetings. " +
                  "$$Communicate $$effectively with the team through weekly emails and over Slack. " +
                  "Foster relationships by $$engaging $$with $$sponsors and community. " +
                  "Promote team brand. "
          },
          {
            title: "Media Lead",
            subtitle: "FRC Talon Robotics 2502",
            desc: "Selected by team captains via an application. " +
                  "Media subteam was $$founded after I noticed a significant lack in management of our website. " +
                  "In charge of maintaining team $$website, social media, and $$photography equipment. " +
                  "Revamped the team website over the course of a year. "
          },
        ]}/>
      </>
    );
  }
}