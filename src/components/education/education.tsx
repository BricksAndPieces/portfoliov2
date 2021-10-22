import React from "react";
import styles from "./education.module.css"
import { Timeline } from "../timeline/timeline";

export class Education extends React.Component {
  render() {
    return (
      <>
        <Timeline
          startRight={false}
          elements={[
            {
              title: "University of Minnesota",
              subtitle: "BS in Computer Science",
              desc: "Worked with small companies and Fortune 500 companies. " +
                "Worked with the following technologies: AngularJS, TypeScript, Micronaut, Ruby-on-Rails. " +
                "Worked with frontend and backend technologies to implement services. " +
                "Operated within a fully-remote, agile team. "
            },
            {
              title: "Eden Prairie High School",
              subtitle: "High School Diploma",
              desc: "Elected by the team via an application. " +
                "One of four team captains in charge of a 40+ member team. " +
                "Supervise 5 business leads and subteams. " +
                "Conduct weekly team meetings, captain meetings, and monthly team leadership meetings. " +
                "Communicate effectively with the team through weekly emails and over Slack. " +
                "Foster relationships by engaging with sponsors and community. " +
                "Promote team brand. "
            },
          ]}/>
      </>
    );
  }
}