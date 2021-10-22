import React from "react";
import styles from "./project-card.module.css"

export class ProjectCard extends React.Component<{
  title: string,
  desc: string
  thumbnail: string
  shiftTnLeft?: boolean
  tools: string[]
  githubUrl?: string
  websiteUrl?: string
}, {}> {

  // Replaces any text preceded by "$$" with a span in order to emphasize the detail
  generateProjectText() {
    return (
      <>
        {this.props.desc.split(" ").map((v, i) => {
          if(v.startsWith("$$"))
            return <span><b>{v.substring(2)+" "}</b></span>
          else return v+" ";
        })}
      </>
    );
  }

  render() {
    return (
      <>
        <div className={styles.center}>
          <div className={styles.card}>
            <img className={styles.mobileThumbnail} src={this.props.thumbnail} alt={"Project Thumbnail"}/>
            <div className={styles.contentArea}>
              <h3>{this.props.title}</h3>
              <p>{this.generateProjectText()}</p>
              <div className={styles.iconContainer}>
                <div className={styles.toolsContainer}>
                  {this.props.tools.map(tool => {
                    return <i className={"devicon-"+tool+"-plain"}/>
                  })}
                </div>
                <div className={styles.webLinksContainer}>
                  {this.props.githubUrl &&
									  <a href={this.props.githubUrl} target={"_blank"} rel="noreferrer">
                      <i className="devicon-github-plain"/>
									  </a>
                  }
                  {this.props.websiteUrl &&
									<a href={this.props.websiteUrl} target={"_blank"} rel="noreferrer">
                    <i className="fa fa-external-link"/>
									</a>
                  }
                </div>
              </div>
            </div>
            <img className={
              `${styles.normalThumbnail} ${this.props.shiftTnLeft ? styles.shiftThumbnailLeft : ''}`
            } src={this.props.thumbnail} alt={"Project Thumbnail"}/>
          </div>
        </div>
      </>
    );
  }
}