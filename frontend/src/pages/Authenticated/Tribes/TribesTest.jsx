import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios'

const questions = [
  { id: 'EXT1', text: 'I am the life of the party.' },
  { id: 'EXT2', text: "I don't talk a lot." },
  { id: 'EXT3', text: 'I feel comfortable around people.' },
  { id: 'EXT4', text: 'I keep in the background.' },
  { id: 'EXT5', text: 'I start conversations.' },
  { id: 'EXT6', text: 'I have little to say.' },
  { id: 'EXT7', text: 'I talk to a lot of different people at parties.' },
  { id: 'EXT8', text: "I don't like to draw attention to myself." },
  { id: 'EXT9', text: "I don't mind being the center of attention." },
  { id: 'EXT10', text: 'I am quiet around strangers.' },
  { id: 'EST1', text: 'I get stressed out easily.' },
  { id: 'EST2', text: 'I am relaxed most of the time.' },
  { id: 'EST3', text: 'I worry about things.' },
  { id: 'EST4', text: 'I seldom feel blue.' },
  { id: 'EST5', text: 'I am easily disturbed.' },
  { id: 'EST6', text: 'I get upset easily.' },
  { id: 'EST7', text: 'I change my mood a lot.' },
  { id: 'EST8', text: 'I have frequent mood swings.' },
  { id: 'EST9', text: 'I get irritated easily.' },
  { id: 'EST10', text: 'I often feel blue.' },
  { id: 'AGR1', text: 'I feel little concern for others.' },
  { id: 'AGR2', text: 'I am interested in people.' },
  { id: 'AGR3', text: 'I insult people.' },
  { id: 'AGR4', text: "I sympathize with others' feelings." },
  { id: 'AGR5', text: "I am not interested in other people's problems." },
  { id: 'AGR6', text: 'I have a soft heart.' },
  { id: 'AGR7', text: 'I am not really interested in others.' },
  { id: 'AGR8', text: 'I take time out for others.' },
  { id: 'AGR9', text: "I feel others' emotions." },
  { id: 'AGR10', text: 'I make people feel at ease.' },
  { id: 'CSN1', text: 'I am always prepared.' },
  { id: 'CSN2', text: 'I leave my belongings around.' },
  { id: 'CSN3', text: 'I pay attention to details.' },
  { id: 'CSN4', text: 'I make a mess of things.' },
  { id: 'CSN5', text: 'I get chores done right away.' },
  { id: 'CSN6', text: 'I often forget to put things back in their proper place.' },
  { id: 'CSN7', text: 'I like order.' },
  { id: 'CSN8', text: 'I shirk my duties.' },
  { id: 'CSN9', text: 'I follow a schedule.' },
  { id: 'CSN10', text: 'I am exacting in my work.' },
  { id: 'OPN1', text: 'I have a rich vocabulary.' },
  { id: 'OPN2', text: 'I have difficulty understanding abstract ideas.' },
  { id: 'OPN3', text: 'I have a vivid imagination.' },
  { id: 'OPN4', text: 'I am not interested in abstract ideas.' },
  { id: 'OPN5', text: 'I have excellent ideas.' },
  { id: 'OPN6', text: 'I do not have a good imagination.' },
  { id: 'OPN7', text: 'I am quick to understand things.' },
  { id: 'OPN8', text: 'I use difficult words.' },
  { id: 'OPN9', text: 'I spend time reflecting on things.' },
  { id: 'OPN10', text: 'I am full of ideas.' },
];

const options = [
  { label: 'Strongly Agree', value: '5' },
  { label: 'Agree', value: '4' },
  { label: 'Neutral', value: '3' },
  { label: 'Disagree', value: '2' },
  {label : "Strongly Disagree" , value : "1"}
];

export default function TribesTest() {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate()

  const handleChange = (questionId, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const submitHandler = async () => {
    console.log(Object.keys(answers).length)
    if(Object.keys(answers).length != 50) {
        alert("Please fill all questions before submitting!!")
        return;
    }

    const baseURL = "http://127.0.0.1:5000/classify"
    try {
        const response = await axios.post(baseURL,answers)
        console.log(response)
        if(response.data.status == 200) {
          const baseURL = "http://localhost:5000/api/tribes/add"
          const un = localStorage.getItem("username")
          const tribe_response = await axios.post(baseURL , {"username" : un , "tribe" : response.data.personality})
          if(tribe_response.status != 200) {
            alert("something went wrong...")
            return;
          }
          localStorage.setItem("tribe" , response.data.personality)
          setTimeout(() => {
            navigate("/account/home");
          }, 1000);
        }
        else
          alert("something went wrong...")
    }
    catch(error) {
        return "SERVER_ERROR"
    }
  };

  return (
    <div>
      <h1>Answer the below questions to know your tribe!</h1>
      <Grid container spacing={2}>
        {questions.map((question) => (
          <Grid item xs={12} key={question.id}>
            <FormControl component="fieldset" margin="normal" fullWidth>
              <FormLabel component="legend">{question.text}</FormLabel>
              <Box display="flex" justifyContent="center">
                <RadioGroup
                  row
                  aria-label={question.id}
                  name={question.id}
                  value={answers[question.id] || ''}
                  onChange={(e) => handleChange(question.id, e.target.value)}
                >
                  {options.map((option) => (
                    <FormControlLabel
                      key={option.value}
                      value={option.value}
                      control={<Radio />}
                      label={option.label}
                    />
                  ))}
                </RadioGroup>
              </Box>
            </FormControl>
          </Grid>
        ))}
      </Grid>
      <Box mt={2} display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={submitHandler}>
          Submit
        </Button>
      </Box>
    </div>
  );
}
