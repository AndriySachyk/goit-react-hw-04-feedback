import {  useState } from "react"
import { Statistics } from "./Statistics/Statistics"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Section } from "./Section/Section"
import { Notification } from "./Notification/Notification"



export const App = () => {
 
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  
  
  const options = Object.keys({ good, neutral, bad });

  const total = ()=> {
    return good + neutral + bad
  }


 const positiveFeedbackPercentage = () => {
    if (total() > 0 ) {
      return Math.round((good / total()) * 100 || 0 )    
    }

  
}

  
  
 const onFeedback = (even) => {
    switch (even) {
      case 'good':
        setGood(good + 1)
        break;
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      case 'bad':
        setBad(bad + 1)
        break;
    
      default:
        break;
    }
  }

  // onLeaveFeedback = state => {
  //   this.setState(prevState => {
  //     return {
  //       [state]: prevState[state] + 1,
  //     };
  //   });
  // };
  
  // countTotalFeedback = () => {
  //   return this.state.bad + this.state.good + this.state.neutral
  // }
  

  // countPositiveFeedbackPercentage = () => {
  //   return Math.round((this.state.good / this.countTotalFeedback())*100 || 0 )
  // }


    
    return (
      <>
        <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onFeedback}
        />
        </Section>
        
        <Section title="Statistics">
          {total() > 0 ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total()}
              positivePercentage={positiveFeedbackPercentage()}
            /> : <Notification message="There is no feedback"></Notification>}
        
        </Section>
      </>
    );
    
  }

