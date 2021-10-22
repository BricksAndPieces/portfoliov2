import React from "react";
import styles from "./timeline.module.css";

export class Timeline extends React.Component<{
  elements: { title: string, subtitle: string, desc: string }[]
  startRight: boolean
}, {}> {

  // Replaces any text preceded by "$$" with a span in order to emphasize the detail
  generateProjectText(txt: string) {
    return (
      <>
        {txt.split(" ").map((v, i) => {
          if(v.startsWith("$$"))
            return <span className={styles.emphasis}><b>{v.substring(2)+" "}</b></span>
          else return v+" ";
        })}
      </>
    );
  }

  render() {
    return (
      <>
        <ul className={styles.timeline}>
        {this.props.elements.map(({title, subtitle, desc}, index) => (
          <li>
            <div className={(index+Number(this.props.startRight)) % 2 === 0 ? styles.directionL : styles.directionR}>
              <div className={styles.flagWrapper}>
                <span className={styles.flag}>
                  {title}
                </span>
                <span className={styles.timeWrapper}><span className={styles.time}>{subtitle}</span></span>
              </div>
              <div className={styles.desc}>
                <span>
                  {this.generateProjectText(desc)}
                </span>
              </div>
            </div>
          </li>
        ))}
        </ul>
      </>
    );
  }
}